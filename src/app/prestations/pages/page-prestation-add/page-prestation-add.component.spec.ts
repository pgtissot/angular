import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrestationAddComponent } from './page-prestation-add.component';

describe('PagePrestationAddComponent', () => {
  let component: PagePrestationAddComponent;
  let fixture: ComponentFixture<PagePrestationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePrestationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePrestationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
