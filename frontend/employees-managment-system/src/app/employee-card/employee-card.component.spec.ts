import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeCardComponent } from './employee-card.component';

describe('EmpolyeeCardComponent', () => {
  let component: EmpolyeeCardComponent;
  let fixture: ComponentFixture<EmpolyeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpolyeeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpolyeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
