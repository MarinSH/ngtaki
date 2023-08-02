import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtakiComponent } from './ngtaki.component';

describe('NgtakiComponent', () => {
  let component: NgtakiComponent;
  let fixture: ComponentFixture<NgtakiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgtakiComponent]
    });
    fixture = TestBed.createComponent(NgtakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
