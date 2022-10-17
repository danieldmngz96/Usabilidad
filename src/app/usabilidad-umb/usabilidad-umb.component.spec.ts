import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsabilidadUMBComponent } from './usabilidad-umb.component';

describe('UsabilidadUMBComponent', () => {
  let component: UsabilidadUMBComponent;
  let fixture: ComponentFixture<UsabilidadUMBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsabilidadUMBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsabilidadUMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
