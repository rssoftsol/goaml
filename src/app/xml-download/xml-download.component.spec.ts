import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlDownloadComponent } from './xml-download.component';

describe('XmlDownloadComponent', () => {
  let component: XmlDownloadComponent;
  let fixture: ComponentFixture<XmlDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmlDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
