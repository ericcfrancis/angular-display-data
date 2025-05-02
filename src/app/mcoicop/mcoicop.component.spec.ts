import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McoicopComponent } from './mcoicop.component';

describe('McoicopComponent', () => {
  let component: McoicopComponent;
  let fixture: ComponentFixture<McoicopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McoicopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McoicopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
