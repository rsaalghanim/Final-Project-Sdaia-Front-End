import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedualsComponent } from './scheduals.component';

describe('SchedualsComponent', () => {
  let component: SchedualsComponent;
  let fixture: ComponentFixture<SchedualsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedualsComponent]
    });
    fixture = TestBed.createComponent(SchedualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
