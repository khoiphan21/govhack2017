import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStats5Component } from './page-stats-5.component';

describe('PageStats5Component', () => {
  let component: PageStats5Component;
  let fixture: ComponentFixture<PageStats5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStats5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStats5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
