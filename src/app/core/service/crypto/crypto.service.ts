import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'
@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  encrypt(data: any, key: any): any {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString()
    } catch (error) {
      console.log(error);

    }
  }
  decrypt(data: any, key: any) {
    try {
      const decryptData: any = CryptoJS.AES.decrypt(data, key)
      if (decryptData === '') {
        return " "
      } else {
        if (decryptData.toString()) {
          return JSON.parse(decryptData.toString(CryptoJS.enc.Utf8))
        } else {
          return data
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}
