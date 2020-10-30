/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MorceauComponent } from './morceau.component';

describe('MorceauComponent', () => {
  let component: MorceauComponent;
  let fixture: ComponentFixture<MorceauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorceauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorceauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
