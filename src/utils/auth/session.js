/** 
 * @getSession 获取session
 * @setSession 设置session
 * @removeSession 移除session
 **/
export const getSession=(key)=>{
    return sessionStorage.getItem(key)
}

export const setSession=(key,value)=>{
    return sessionStorage.setItem(key,value)
}

export const removeSession=(key)=>{
    return sessionStorage.removeItem(key)
}
