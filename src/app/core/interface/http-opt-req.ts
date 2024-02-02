import {HttpHeaders,HttpParams} from '@angular/common/http'

export interface IhttpRequest{
    headers?:HttpHeaders
    responseType?:any,
    params :HttpParams
}


export class SharedData{
    value : any
}