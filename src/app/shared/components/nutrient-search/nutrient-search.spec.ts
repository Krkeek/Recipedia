import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientSearch } from './nutrient-search';

describe('NutrientSearch', () => {
  let component: NutrientSearch;
  let fixture: ComponentFixture<NutrientSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutrientSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(NutrientSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
