import {getSession} from '@utils/auth/session';
const headers=()=>{
    return {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "token":getSession("token")
    }
}
export default headers