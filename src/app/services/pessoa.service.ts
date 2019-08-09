import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Pessoa} from '../models/pessoa/pessoa';

const headers = new HttpHeaders('Content-Type: application/json');

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private pessoasUrl = 'http://localhost:8080/pessoa';

  constructor(private http: HttpClient) { }

  getPessoas(page: string = '0', size: string = '8'): Observable<Pageable<Pessoa>> {
    const params = new HttpParams();
    params.set('page', page);
    params.set('size', size);
    return this.http.get<Pageable<Pessoa>>(`${this.pessoasUrl}?page=${page}&size=${size}`);
  }

  getPessoa(pessoaId: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.pessoasUrl}/${pessoaId}`);
  }

  savePessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${this.pessoasUrl}`, JSON.stringify(pessoa), {headers} );
  }

  updatePessoa(pessoaId: string, pessoa: Pessoa): Observable<any>{
    return this.http.put<Pessoa>(`${this.pessoasUrl}/${pessoaId}`, JSON.stringify(pessoa), {headers});
  }

  deletePessoa(pessoa: Pessoa): Observable<any> {
    return this.http.delete(`${this.pessoasUrl}/${pessoa.id}`);
  }
}
