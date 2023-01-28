import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudesyvaloracionesComponent } from './aptitudesyvaloraciones.component';

describe('AptitudesyvaloracionesComponent', () => {
  let component: AptitudesyvaloracionesComponent;
  let fixture: ComponentFixture<AptitudesyvaloracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudesyvaloracionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptitudesyvaloracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
