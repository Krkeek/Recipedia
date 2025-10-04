import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelButton } from './side-panel-button';

describe('SidePanelButton', () => {
  let component: SidePanelButton;
  let fixture: ComponentFixture<SidePanelButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePanelButton],
    }).compileComponents();

    fixture = TestBed.createComponent(SidePanelButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
