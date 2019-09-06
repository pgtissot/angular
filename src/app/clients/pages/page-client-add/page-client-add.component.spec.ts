import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientAddComponent } from './page-client-add.component';

describe('PageClientAddComponent', () => {
  let component: PageClientAddComponent;
  let fixture: ComponentFixture<PageClientAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClientAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
