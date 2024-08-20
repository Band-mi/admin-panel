import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzLayoutComponent } from './nz-layout.component';

describe('NzLayoutComponent', () => {
  let component: NzLayoutComponent;
  let fixture: ComponentFixture<NzLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
