import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPortfolioComponent } from './mi-portfolio.component';

describe('MiPortfolioComponent', () => {
  let component: MiPortfolioComponent;
  let fixture: ComponentFixture<MiPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
