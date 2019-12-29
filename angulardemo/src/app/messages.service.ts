import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages:string[] = [];
  //增加消息
  add(message:string){
    this.messages.push(message);
  }
  //清空消息
  clear(){
    this.messages = [];
  }



  constructor() { }
}
