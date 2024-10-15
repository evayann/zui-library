import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuiLibraryComponent } from './zui-library.component';

describe('ZuiLibraryComponent', () => {
  let component: ZuiLibraryComponent;
  let fixture: ComponentFixture<ZuiLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZuiLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZuiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
