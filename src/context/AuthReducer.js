const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                currentUser: action.payload,
            }
            break;
        case "LOGOUT":
            return {
                currentUser: null,
            }
            break;
        default:
            return state;
    }
}

export default AuthReducer;