import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoCarteComponent } from './elenco-carte.component';

describe('ElencoCarteComponent', () => {
  let component: ElencoCarteComponent;
  let fixture: ComponentFixture<ElencoCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
