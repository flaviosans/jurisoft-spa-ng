import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.scss']
})
export class PessoaEditComponent implements OnInit {

  pessoa: Pessoa = {} as Pessoa;

  constructor(private pessoaService: PessoaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.pessoaService.getPessoa(p.get('id')).subscribe(p => {
        this.pessoa = p;
      });
    });
  }

  public voltar(){
    this.router.navigate(['/pessoas']);
  }
}
