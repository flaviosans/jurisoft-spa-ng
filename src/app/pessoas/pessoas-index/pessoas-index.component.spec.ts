import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasIndexComponent } from './pessoas-index.component';

describe('PessoasIndexComponent', () => {
  let component: PessoasIndexComponent;
  let fixture: ComponentFixture<PessoasIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
