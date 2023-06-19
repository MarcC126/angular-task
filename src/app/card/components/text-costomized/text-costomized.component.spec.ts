import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCostomizedComponent } from './text-costomized.component';

describe('TextCostomizedComponent', () => {
  let component: TextCostomizedComponent;
  let fixture: ComponentFixture<TextCostomizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextCostomizedComponent]
    });
    fixture = TestBed.createComponent(TextCostomizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
