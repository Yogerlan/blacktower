// Angular imports
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

// Ionic imports
import { IonicModule } from '@ionic/angular';

// Local imports
import { JobPage } from './job.page';

describe('JobPage', () => {
  let component: JobPage;
  let fixture: ComponentFixture<JobPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [JobPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
