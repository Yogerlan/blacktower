// Angular imports
import { AfterViewInit, Component, OnInit } from '@angular/core';

// Ionic imports
import { LoadingController, ModalController } from '@ionic/angular';

// Local imports
import { TorreService } from '../../services/torre.service';
import { PersonPage } from '../person/person.page';
import { JobPage } from '../job/job.page';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements AfterViewInit {

  segment = 'people';
  people: any = {};
  jobs: any = {};

  constructor(
    private torreService: TorreService,
    private loadingController: LoadingController,
    private modelController: ModalController
  ) { }

  async ngAfterViewInit() {
    const loading = await this.loadingController.create({
      message: 'Loading data...'
    });
    await loading.present();
    const peopleResponse: any = await this.torreService.searchPeople();
    if (peopleResponse) {
      this.people = peopleResponse;
      console.log(this.people);
    }
    const jobsResponse: any = await this.torreService.searchJobs();
    if (jobsResponse) {
      this.jobs = jobsResponse;
      console.log(this.jobs);
    }
    loading.dismiss();
  }

  segmentChanged(event: any) {
    this.segment = event.detail.value;
    console.log(this.segment);
  }

  disablePrevious() {
    if (this.segment === 'people') {
      if (this.people.pagination && this.people.pagination.previous) {
        return false;
      }
    } else {
      if (this.jobs.pagination && this.jobs.pagination.previous) {
        return false;
      }
    }
    return true;
  }

  disableNext() {
    if (this.segment === 'people') {
      if (this.people.pagination && this.people.pagination.next) {
        return false;
      }
    } else {
      if (this.jobs.pagination && this.jobs.pagination.next) {
        return false;
      }
    }
    return true;
  }

  pageInfo() {
    if (this.segment === 'people') {
      const start = this.people.offset ? this.people.offset + 1 : 0;
      const end = this.people.size ? this.people.size + start : start;
      const total = this.people.total ? this.people.total : 0;
      return `${start} - ${end} of ${total}`;
    } else {
      const start = this.jobs.offset ? this.jobs.offset + 1 : 0;
      const end = this.jobs.size ? this.jobs.size + start : start;
      const total = this.jobs.total ? this.jobs.total : 0;
      return `${start} - ${end} of ${total}`;
    }
  }

  async onPrevious() {
    const loading = await this.loadingController.create({
      message: 'Loading data...'
    });
    await loading.present();
    if (this.segment === 'people') {
      const peopleResponse: any = await this.torreService.searchPeople(`?before=${this.people.pagination.previous}`);
      if (peopleResponse) {
        this.people = peopleResponse;
        console.log(this.people);
      }
    } else {
      const jobsResponse: any = await this.torreService.searchJobs(`?before=${this.jobs.pagination.previous}`);
      if (jobsResponse) {
        this.jobs = jobsResponse;
        console.log(this.jobs);
      }
    }
    loading.dismiss();
  }

  async onNext() {
    const loading = await this.loadingController.create({
      message: 'Loading data...'
    });
    await loading.present();
    if (this.segment === 'people') {
      const peopleResponse: any = await this.torreService.searchPeople(`?after=${this.people.pagination.next}`);
      if (peopleResponse) {
        this.people = peopleResponse;
        console.log(this.people);
      }
    } else {
      const jobsResponse: any = await this.torreService.searchJobs(`?after=${this.jobs.pagination.next}`);
      if (jobsResponse) {
        this.jobs = jobsResponse;
        console.log(this.jobs);
      }
    }
    loading.dismiss();
  }

  async showPerson(username) {
    const loading = await this.loadingController.create({
      message: 'Loading person data...'
    });
    await loading.present();
    const person = await this.torreService.getPerson(username);
    if (person) {
      console.log(person);

      const modal = await this.modelController.create({
        component: PersonPage,
        componentProps: {
          'person': person,
          'jobs': this.jobs.results
        }
      });
      modal.present();
    }
    loading.dismiss();
  }

  async showJob(id) {
    const loading = await this.loadingController.create({
      message: 'Loading job data...'
    });
    await loading.present();
    const job = await this.torreService.getJob(id);
    if (job) {
      console.log(job);

      const modal = await this.modelController.create({
        component: JobPage,
        componentProps: {
          'job': job,
          'people': this.people.results
        }
      });
      modal.present();
    }
    loading.dismiss();
  }

}
