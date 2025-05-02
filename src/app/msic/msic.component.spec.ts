import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsicComponent } from './msic.component';

describe('MsicComponent', () => {
  let component: MsicComponent;
  let fixture: ComponentFixture<MsicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
