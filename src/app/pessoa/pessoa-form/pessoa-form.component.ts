import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pessoa} from '../../models/pessoa/pessoa';
import {PessoaService} from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent implements OnInit {

  @Input() pessoa: Pessoa = {} as Pessoa;
  @Output() salvo = new EventEmitter();

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() { }

  public salvar(): void {
    this.pessoaService.savePessoa(this.pessoa).subscribe(p => {
      this.salvo.emit(this.pessoa);
    });
  }

}
