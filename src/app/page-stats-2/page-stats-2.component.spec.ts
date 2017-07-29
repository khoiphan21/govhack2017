import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStats2Component } from './page-stats-2.component';

describe('PageStats2Component', () => {
  let component: PageStats2Component;
  let fixture: ComponentFixture<PageStats2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStats2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStats2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
