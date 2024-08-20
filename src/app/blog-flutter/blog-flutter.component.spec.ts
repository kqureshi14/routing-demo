import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFlutterComponent } from './blog-flutter.component';

describe('BlogFlutterComponent', () => {
  let component: BlogFlutterComponent;
  let fixture: ComponentFixture<BlogFlutterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogFlutterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogFlutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
