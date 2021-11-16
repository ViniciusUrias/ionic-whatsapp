import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  list: any = [
    'Novo grupo',
    'Nova transmissão',
    'Aparelhos conectados',
    'Mensagens favoritas',
    'Pagamentos',
    'Enviar mensagem para um número',
    'Configurações'
  ];
  constructor() { }

  ngOnInit() {}

}
