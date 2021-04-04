import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalhesComponent } from './modal-detalhes.component';

describe('ModalDetalhesComponent', () => {
  let component: ModalDetalhesComponent;
  let fixture: ComponentFixture<ModalDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
