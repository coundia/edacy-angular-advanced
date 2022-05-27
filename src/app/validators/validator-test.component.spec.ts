import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorTestComponent } from './validator-test.component';

describe('ValidatorTestComponent', () => {
  let component: ValidatorTestComponent;
  let fixture: ComponentFixture<ValidatorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatorTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
