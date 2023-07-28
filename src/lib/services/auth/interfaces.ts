

export interface IAuthParams<T>{
    errorCallback?: (err?:unknown)=>void
    successCallback?:(value?:T) =>void
    requestParams:unknown
}

export interface IAuthUser{
    getAuth:()=>Promise<any>
    setSession:<T>(params:IAuthParams<T>)=>Promise<any>
    loading: boolean
}