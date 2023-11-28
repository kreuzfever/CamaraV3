import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TomarcapturaPage } from './tomarcaptura.page';

describe('TomarcapturaPage', () => {
  let component: TomarcapturaPage;
  let fixture: ComponentFixture<TomarcapturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TomarcapturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
