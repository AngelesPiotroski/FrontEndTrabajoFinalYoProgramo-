import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalSwitchService {

  constructor() { }

  $modal = new EventEmitter<any>();


}
