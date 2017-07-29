import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStats4Component } from './page-stats-4.component';

describe('PageStats4Component', () => {
  let component: PageStats4Component;
  let fixture: ComponentFixture<PageStats4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStats4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStats4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
