import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { PhysicianService } from '../../physician.service';

@Component({
  selector: 'app-deleteappointments',
  templateUrl: './deleteappointments.component.html',
  styleUrls: ['./deleteappointments.component.scss'],
})
export class DeleteappointmentsComponent implements OnInit {
  constructor(
    private service: PhysicianService,
    private snakBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  deletedata: any;
  patientid: any = sessionStorage.getItem('patientid');
  delete() {
    this.service.rejectAppointment(this.patientid).subscribe((response) => {
      this.deletedata = response;
      console.log(
        'this is patient id whose appointment delete',
        this.patientid
      );
    });
  }

  openAcceptSnackbar(message: string, action: string) {
    let snakBarRef = this.snakBar.open(message, action, { duration: 3000 });
    snakBarRef.afterDismissed().subscribe();

    snakBarRef.onAction().subscribe();
  }

  openrejectSnackbar(message: string, action: string) {
    let snakBarRef = this.snakBar.open(message, action, { duration: 3000 });
    snakBarRef.afterDismissed().subscribe();

    snakBarRef.onAction().subscribe();
  }
}
