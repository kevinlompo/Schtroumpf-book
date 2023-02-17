import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchtroumpfListComponent } from './schtroumpf-list.component';

describe('SchtroumpfListComponent', () => {
  let component: SchtroumpfListComponent;
  let fixture: ComponentFixture<SchtroumpfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchtroumpfListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchtroumpfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
