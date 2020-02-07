import { Injectable } from '@angular/core';
import {of,Observable, observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    const observer = {
      next: num => console.log(num),
      error: e => console.log(e),
      complete: () => console.log('complete!!!')
    }

    const observable = Observable.create(observer => {
      try {
        let time = 0;
        observer.next(1);
        observer.next(2);
        observer.next(3);
        const intervalId = setInterval(() => {
          console.log(`wait ${++time}s`);
        }, 900)
        setTimeout(() => { observer.next(4); clearInterval(intervalId) }, 2000);
      } catch (e) {
        observer.error(e);
      }
      // observer.complete(); // 注意不能立即调用complete函数，不然会终止消息传输
      setTimeout(() => observer.complete(), 3000)
    });

    observable.subscribe(observer);
  }

}
