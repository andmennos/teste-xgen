import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoXgenComponent } from './logo-xgen.component';

describe('LogoXgenComponent', () => {
  let component: LogoXgenComponent;
  let fixture: ComponentFixture<LogoXgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoXgenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoXgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
