import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pessoa} from '../models/pessoa/pessoa';
import {PessoaService} from '../services/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

  @Output() selected = new EventEmitter();
  pessoas: Pageable<Pessoa>;
  currentPage: number;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() { this.getPessoas(); }

  deletePessoa(pessoa: Pessoa) {
    this.pessoaService.deletePessoa(pessoa).subscribe(p =>{
      this.getPessoas(this.pessoas.number.toString());
    });
  }

  selectPessoa(pessoa: Pessoa) {
    this.selected.emit(pessoa);
  }

  navigate(step: number = 1) {
    step = this.pessoas.number + step;
    this.getPessoas(step.toString());
  }

  getPessoas(page: string = '0') {
    this.pessoaService.getPessoas(page).subscribe(p => {
      this.pessoas = p;
    });
  }

}
