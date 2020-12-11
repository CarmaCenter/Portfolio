import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGoToTopComponent } from './btn-go-to-top.component';

describe('BtnGoToTopComponent', () => {
  let component: BtnGoToTopComponent;
  let fixture: ComponentFixture<BtnGoToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnGoToTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGoToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
