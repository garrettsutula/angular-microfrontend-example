import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsTableComponent } from './table.component';

describe('TableComponent', () => {
  let component: ArtistsTableComponent;
  let fixture: ComponentFixture<ArtistsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistsTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
