import { Notification } from 'element-ui';
let notify=null;
const notifyMsg=(option)=>{
   if(notify){
       notify.close()
   }
   notify=Notification(option)
}

export default notifyMsg;
