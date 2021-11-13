import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivateMessagesService {
private message: any = [];
  constructor() { }

  guardarDados(index: string, message: any): boolean {
    if(index){
      this.message[index] = message;
      return true;
    }
    return false;
  }
  pegarDados(index: string): any {
    if(index){
      return this.message[index];
    }
    return null;
  }

  deletarDados(index: string): boolean{
    return delete this.message[index];
  }
}
