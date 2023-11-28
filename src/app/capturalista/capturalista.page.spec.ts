import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapturalistaPage } from './capturalista.page';

describe('CapturalistaPage', () => {
  let component: CapturalistaPage;
  let fixture: ComponentFixture<CapturalistaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CapturalistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
