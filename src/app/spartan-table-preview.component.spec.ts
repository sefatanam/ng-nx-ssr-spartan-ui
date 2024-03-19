import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpartanTablePreviewComponent } from './spartan-table-preview.component';

describe('SpartanTablePreviewComponent', () => {
  let component: SpartanTablePreviewComponent;
  let fixture: ComponentFixture<SpartanTablePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartanTablePreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpartanTablePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
