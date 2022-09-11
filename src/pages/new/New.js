import React, { useEffect, useState } from 'react';
import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import './New.css';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { productInputs, userInputs } from "../../formSource";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { auth, database } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { PersonalVideo } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function New({inputs, title}) {

    const [file,setFile] = useState("");
    const collectionRef = collection(database, "users");
    const [data,setData] = useState();
    const [perc,setPerc] =useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const uploadFile = () => {
            const storage = getStorage();
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setPerc(progress)
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                    default:
                        break;
                }
            }, 
            (error) => {
                alert(error.message)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setData((prev) =>({...prev, img: downloadURL}))
                });
            }
            );
        }
        file && uploadFile()
    },[file])

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setData({...data, [id]: value})
        console.log(data)
    }



    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
        const res = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );
        await setDoc(doc(database, "users", res.user.uid), {
            ...data,
            timeStamp: serverTimestamp(),
        })
        navigate(-1)
        } catch (err) {
        console.log(err);
        }
    }

    return (
        <div className='new'>
            <Sidebar />
            <div className='newContainer'>
                <Navbar />
                <div className='new_top'>
                    <h1>{title}</h1>
                </div>
                <div className='new_footer'>
                    <div className='left'>
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=''
                        />
                    </div>
                    <div className='right' >
                        <form onSubmit={handleAddUser} >
                            <div className="formInput">
                                <label htmlFor="file">
                                Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                type="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                                />
                            </div>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input 
                                        id={input.id}
                                        type={input.type} 
                                        placeholder={input.placeholder}
                                        onChange={ handleInput } 
                                    />
                                </div>
                            ))}
                            <button disabled={ perc !== null && perc < 100} type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New