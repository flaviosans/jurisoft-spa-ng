import {Component, Input, OnInit} from '@angular/core';
import {Pessoa} from '../models/pessoa/pessoa';

@Component({
  selector: 'app-pessoa-view',
  templateUrl: './pessoa-view.component.html',
  styleUrls: ['./pessoa-view.component.scss']
})
export class PessoaViewComponent implements OnInit {

  @Input() pessoa: Pessoa = {} as Pessoa;

  constructor() { }

  ngOnInit() {
  }

}
