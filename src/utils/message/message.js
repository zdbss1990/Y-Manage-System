import { Message } from 'element-ui';
let msg=null;
const message=(options)=>{
    if(msg){
        msg.close()
    }
    msg=Message(options)
}

export default message;