import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStats3Component } from './page-stats-3.component';

describe('PageStats3Component', () => {
  let component: PageStats3Component;
  let fixture: ComponentFixture<PageStats3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStats3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStats3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
