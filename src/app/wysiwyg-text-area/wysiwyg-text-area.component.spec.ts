import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WysiwygTextAreaComponent } from './wysiwyg-text-area.component';

describe('WysiwygTextAreaComponent', () => {
  let component: WysiwygTextAreaComponent;
  let fixture: ComponentFixture<WysiwygTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WysiwygTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwygTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
