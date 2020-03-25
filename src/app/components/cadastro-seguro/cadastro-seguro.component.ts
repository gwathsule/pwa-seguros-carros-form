import { Component, OnInit } from '@angular/core';
import {Seguro} from '../../models/Seguro';
import {Observable} from 'rxjs';
import {MarcaCarro} from '../../models/MarcaCarro';
import {MarcaCarroService} from '../../services/marca-carro.service';
import {SeguroService} from '../../services/seguro.service';

@Component({
  selector: 'app-cadastro-seguro',
  templateUrl: './cadastro-seguro.component.html',
  styleUrls: ['./cadastro-seguro.component.css']
})
export class CadastroSeguroComponent implements OnInit {

  public seguro = new Seguro();
  public marcasCarro$ = new Observable<MarcaCarro[]>();

  constructor(
    private marcaCarroService: MarcaCarroService,
    private seguroService: SeguroService
  ) { }

  ngOnInit(): void {
    this.marcasCarro$ = this.marcaCarroService.getMarcas();
  }

  cadastrar() {
    this.seguro.id = this.seguro.placaCarro;
    this.seguroService.cadastrar(this.seguro);
  }

}
