import { store } from "../redux/Store";
import { loginOut } from "../redux/userRedux";
//verify if user is logged
const VerifiSession = (router) => {
    const state = store.getState();
    if (state.user.currentUser === null) {
        router.push({
            pathname: "/",
        })
    }
}


const Logout = (dispatch, router) => {

    dispatch(loginOut())
    router.push({
        pathname: "/",
    })

}

const IndexValidation = () => {

    const state = store.getState();
    if (state.user.currentUser !== null) {
        return {
            auth: true,
            response: {
                redirect: {
                    destination: "/home",
                    permanent: false,
                },
                props: {},
            }
        };
    }
    return {
        auth: false,
        response: {
            props: {},
        }
    }

}



export { VerifiSession, Logout, IndexValidation }