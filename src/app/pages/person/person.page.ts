// Angular imports
import { AfterViewInit, Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

// Ionic imports
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements AfterViewInit {

  @Input() person = null;
  @Input() jobs = [];

  constructor(
    private platform: Platform,
    private modalController: ModalController
  ) { }

  ngAfterViewInit() {
    if (this.person.stats) {
      const statsChart = new Chart(document.getElementById('statsChart') as HTMLCanvasElement, {
        type: 'pie',
        data: {
          labels: Object.keys(this.person.stats),
          datasets: [{
            label: 'Stat',
            data: Object.values(this.person.stats),
            backgroundColor: [
              '#3880ff',
              '#3dc2ff',
              '#5260ff',
              '#2dd36f',
              '#ffc409',
              '#eb445a',
              '#92949c'
            ]
          }]
        }
      });
    }
    if (this.person.personalityTraitsResults) {
      const personalityChart = new Chart(document.getElementById('personalityChart') as HTMLCanvasElement, {
        type: 'radar',
        data: {
          labels: this.person.personalityTraitsResults.analyses.map(obj => obj.groupId),
          datasets: [{
            label: 'Analysis',
            data: this.person.personalityTraitsResults.analyses.map(obj => obj.analysis),
            backgroundColor: '#3880ff7f'
          }]
        },
        options: {
          scales: {
            r: {
              suggestedMin: 0
            }
          }
        }
      });
    }
    const compensationChart = new Chart(document.getElementById('compensationChart') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: this.jobs.map(obj => obj.objective.substring(0, 15)),
        datasets: [{
          label: 'Job min',
          data: this.jobs.map(obj => obj.compensation.data ? obj.compensation.data.minAmount : 0),
          backgroundColor: '#3880ff'
        }, {
          label: 'Job max',
          data: this.jobs.map(obj => obj.compensation.data ? obj.compensation.data.maxAmount : 0),
          backgroundColor: '#3dc2ff'
        }]
      },
      options: {
        aspectRatio: this.platform.is('mobile') || this.platform.is('mobileweb') ? 1 : 2,
        scales: {
          xAxes: {
            stacked: true
          }
        }
      }
    });
  }

  onDismiss() {
    this.modalController.dismiss()
  }

}
