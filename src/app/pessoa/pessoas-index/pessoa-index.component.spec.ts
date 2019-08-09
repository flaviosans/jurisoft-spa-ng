import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaIndexComponent } from './pessoa-index.component';

describe('PessoaIndexComponent', () => {
  let component: PessoaIndexComponent;
  let fixture: ComponentFixture<PessoaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
