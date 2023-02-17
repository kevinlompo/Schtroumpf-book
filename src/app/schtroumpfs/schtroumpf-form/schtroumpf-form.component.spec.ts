import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchtroumpfFormComponent } from './schtroumpf-form.component';

describe('SchtroumpfFormComponent', () => {
  let component: SchtroumpfFormComponent;
  let fixture: ComponentFixture<SchtroumpfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchtroumpfFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchtroumpfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
