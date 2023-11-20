import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetAdderComponent } from './preset-adder.component';

describe('PresetAdderComponent', () => {
  let component: PresetAdderComponent;
  let fixture: ComponentFixture<PresetAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresetAdderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresetAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
