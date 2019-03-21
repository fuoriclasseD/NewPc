import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapositionComponent } from './listaposition.component';

describe('ListapositionComponent', () => {
  let component: ListapositionComponent;
  let fixture: ComponentFixture<ListapositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
