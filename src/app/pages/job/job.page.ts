// Angular imports
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

// Ionic imports
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements AfterViewInit {

  @Input() job = null;
  @Input() people = [];

  constructor(
    private platform: Platform,
    private modalController: ModalController
  ) { }

  ngAfterViewInit() {
    const compensationChart = new Chart(document.getElementById('compensationChart') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: this.people.map(obj => obj.name.substring(0, 15)),
        datasets: [{
          label: 'Employee',
          data: this.people.map(obj => obj.compensations.employee ? obj.compensations.employee.amount : 0),
          backgroundColor: '#3880ff'
        }, {
          label: 'Freelancer',
          data: this.people.map(obj => obj.compensations.freelancer ? obj.compensations.freelancer.amount : 0),
          backgroundColor: '#3dc2ff'
        }, {
          label: 'Intern',
          data: this.people.map(obj => obj.compensations.intern ? obj.compensations.intern.amount : 0),
          backgroundColor: '#5260ff'
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
