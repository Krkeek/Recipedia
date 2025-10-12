import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanner } from './meal-planner';

describe('MealPlanner', () => {
  let component: MealPlanner;
  let fixture: ComponentFixture<MealPlanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealPlanner],
    }).compileComponents();

    fixture = TestBed.createComponent(MealPlanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
