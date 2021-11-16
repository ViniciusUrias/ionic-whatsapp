import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivateMessagesService {
private status: any = [];
  constructor() { }

  guardarDados(index: string, status: any): boolean {
    if(index){
      this.status[index] = status;
      return true;
    }
    return false;
  }
  pegarDados(index: string): any {
    if(index){
      return this.status[index];
    }
    return null;
  }

  deletarDados(index: string): boolean{
    return delete this.status[index];
  }
}
