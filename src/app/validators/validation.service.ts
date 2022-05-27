import { Injectable } from '@angular/core';
import {Observable, timer} from "rxjs";
import {mapTo} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  /**
   *
   * @param password
   */
  validatePassword(password: string):Observable<boolean> {
    return timer(5000).pipe(mapTo(password == 'aaAA11!!'))
  }

}
