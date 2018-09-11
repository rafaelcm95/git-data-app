import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateBarComponent } from './donate-bar.component';

describe('DonateBarComponent', () => {
  let component: DonateBarComponent;
  let fixture: ComponentFixture<DonateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
