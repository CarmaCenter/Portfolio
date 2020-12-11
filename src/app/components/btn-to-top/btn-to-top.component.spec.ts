import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnToTopComponent } from './btn-to-top.component';

describe('BtnToTopComponent', () => {
  let component: BtnToTopComponent;
  let fixture: ComponentFixture<BtnToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnToTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
