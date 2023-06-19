import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCustomizedComponent } from './image-customized.component';

describe('ImageCustomizedComponent', () => {
  let component: ImageCustomizedComponent;
  let fixture: ComponentFixture<ImageCustomizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCustomizedComponent]
    });
    fixture = TestBed.createComponent(ImageCustomizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
