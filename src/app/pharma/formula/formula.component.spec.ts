import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaComponent } from './formula.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormulaComponent', () => {
  let component: FormulaComponent;
  let fixture: ComponentFixture<FormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ FormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
