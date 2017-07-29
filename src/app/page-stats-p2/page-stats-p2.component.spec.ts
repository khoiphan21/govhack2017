import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatsP2Component } from './page-stats-p2.component';

describe('PageStatsP2Component', () => {
  let component: PageStatsP2Component;
  let fixture: ComponentFixture<PageStatsP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStatsP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStatsP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
