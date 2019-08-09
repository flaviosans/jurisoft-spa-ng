import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa.service';
import {HttpParams} from '@angular/common/http';
import {Pessoa} from '../../models/pessoa/pessoa';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pessoas-index',
  templateUrl: './pessoa-index.component.html',
  styleUrls: ['./pessoa-index.component.scss']
})
export class PessoaIndexComponent implements OnInit {

  pessoas: Pageable<Pessoa>;
  currentPage: number;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() { this.getPessoas(); }

  navigate(step: number = 1) {
    step = this.pessoas.number + step;
    this.getPessoas(step.toString());
  }

  getPessoas(page: string = '0') {
    this.pessoaService.getPessoas(page).subscribe(p => {
      this.pessoas = p;
    });
  }

  deletePessoa(pessoa: Pessoa) {
    this.pessoaService.deletePessoa(pessoa).subscribe(p =>{
      this.getPessoas(this.pessoas.number.toString());
    });
  }
}
