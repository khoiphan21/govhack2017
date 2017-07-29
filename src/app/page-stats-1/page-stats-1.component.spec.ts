import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStats1Component } from './page-stats-1.component';

describe('PageStats1Component', () => {
  let component: PageStats1Component;
  let fixture: ComponentFixture<PageStats1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStats1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStats1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
