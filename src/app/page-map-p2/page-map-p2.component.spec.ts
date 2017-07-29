import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMapP2Component } from './page-map-p2.component';

describe('PageMapP2Component', () => {
  let component: PageMapP2Component;
  let fixture: ComponentFixture<PageMapP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMapP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMapP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
