import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamadas',
  templateUrl: './chamadas.page.html',
  styleUrls: ['./chamadas.page.scss'],
})
export class ChamadasPage implements OnInit {
  public status: Status[] = [{id:1,firstName:'Shaw',photo:'https://robohash.org/quiavoluptatumamet.png?size=50x50&set=set1',hour:'6:15'},
  {id:2,firstName:'Amity',photo:'https://robohash.org/enimidaut.png?size=50x50&set=set1',hour:'6:08'},
  {id:3,firstName:'David',photo:'https://robohash.org/consequaturprovidentporro.png?size=50x50&set=set1',hour:'4:24'},
  {id:4,firstName:'Deb',photo:'https://robohash.org/voluptascorruptiamet.png?size=50x50&set=set1',hour:'4:49'},
  {id:5,firstName:'Lissy',photo:'https://robohash.org/deseruntdebitismaxime.png?size=50x50&set=set1',hour:'19:57'},
  {id:6,firstName:'Osmund',photo:'https://robohash.org/aliquidsedet.png?size=50x50&set=set1',hour:'10:59'},
  {id:7,firstName:'Arnuad',photo:'https://robohash.org/praesentiumsitet.png?size=50x50&set=set1',hour:'7:43'},
  {id:8,firstName:'Borg',photo:'https://robohash.org/pariaturquorecusandae.png?size=50x50&set=set1',hour:'9:53'},
  {id:9,firstName:'Idette',photo:'https://robohash.org/quibusdampossimusut.png?size=50x50&set=set1',hour:'4:57'},
  {id:10,firstName:'Rutter',photo:'https://robohash.org/culpanonet.png?size=50x50&set=set1',hour:'22:05'},
  {id:11,firstName:'Sherlocke',photo:'https://robohash.org/sedvoluptatemqui.png?size=50x50&set=set1',hour:'4:22'},
  {id:12,firstName:'Jacob',photo:'https://robohash.org/etsapienteearum.png?size=50x50&set=set1',hour:'15:08'},
  {id:13,firstName:'Corette',photo:'https://robohash.org/etnullaporro.png?size=50x50&set=set1',hour:'8:56'},
  {id:14,firstName:'Sidonnie',photo:'https://robohash.org/quidemconsequatursunt.png?size=50x50&set=set1',hour:'11:58'},
  {id:15,firstName:'Inger',photo:'https://robohash.org/doloremcupiditatedeleniti.png?size=50x50&set=set1',hour:'9:35'},
  {id:16,firstName:'Urson',photo:'https://robohash.org/voluptasminimanon.png?size=50x50&set=set1',hour:'0:27'},
  {id:17,firstName:'Adolphe',photo:'https://robohash.org/adipiscivoluptatibusiste.png?size=50x50&set=set1',hour:'0:42'},
  {id:18,firstName:'Norine',photo:'https://robohash.org/temporibusmolestiaedeleniti.png?size=50x50&set=set1',hour:'9:09'},
  {id:19,firstName:'Laure',photo:'https://robohash.org/teneturestvoluptates.png?size=50x50&set=set1',hour:'3:22'},
  {id:20,firstName:'Chanda',photo:'https://robohash.org/rerumautmagnam.png?size=50x50&set=set1',hour:'4:24'}];
  constructor() { }

  ngOnInit() {
  }

}


export type Status = {
  id: number;
  firstName: string;
  photo: string;
  hour: string;
};
