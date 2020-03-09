import {Component, Input, OnInit} from '@angular/core';
import {Pessoa} from '../../models/pessoa/pessoa';

@Component({
  selector: 'app-pessoas-index',
  templateUrl: './pessoa-index.component.html',
  styleUrls: ['./pessoa-index.component.scss']
})
export class PessoaIndexComponent implements OnInit {

  pessoa: Pessoa = {} as Pessoa;
  constructor() { }

  ngOnInit() { }

  setPessoa(pessoa: Pessoa){
    this.pessoa = pessoa;
  }
}
