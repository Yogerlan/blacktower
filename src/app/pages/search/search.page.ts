// Angular imports
import { Component, OnInit } from '@angular/core';

// Ionic imports
import { SegmentChangeEventDetail } from '@ionic/core';

// Local imports
import { TorreService } from '../../services/torre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  segment = 'people';
  people = [];
  jobs = [];

  constructor(private torreService: TorreService) { }

  async ngOnInit() {
    const jobsResponse: any = await this.torreService.searchJobs();
    if (jobsResponse) {
      this.jobs.push(...jobsResponse.results);
    }
    console.log(this.jobs);
    const peopleResponse: any = await this.torreService.searchPeople();
    if (peopleResponse) {
      this.people.push(...peopleResponse.results);
    }
    console.log(this.people);
  }

  segmentChanged(event: any) {
    this.segment = event.detail.value;
    console.log(this.segment);
  }

}
