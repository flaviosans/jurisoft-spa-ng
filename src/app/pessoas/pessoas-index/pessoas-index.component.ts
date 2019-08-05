import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoas-index',
  templateUrl: './pessoas-index.component.html',
  styleUrls: ['./pessoas-index.component.scss']
})
export class PessoasIndexComponent implements OnInit {

  pessoas: any;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoaService.getPessoas().subscribe(p =>{
      this.pessoas = p.content;
    })
  }

}
