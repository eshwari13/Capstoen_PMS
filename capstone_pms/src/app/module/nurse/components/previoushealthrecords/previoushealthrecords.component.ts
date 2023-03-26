import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewprescriptionComponent } from 'src/app/module/physician/components/viewprescription/viewprescription.component';
import { NurseService } from '../../nurse.service';
import { PrescriptionComponent } from '../prescription/prescription.component';

export interface TestList {
  testId: number;
  testName: string;
  result: string;
  testNotes: string;
}
export interface VisitId {
  visitId: number;
}

export interface AllAppointments {
  appointmentId: number;
}
export interface AppointmentDetails {
  physicianEmail: string;
  date: string;
}

@Component({
  selector: 'app-previoushealthrecords',
  templateUrl: './previoushealthrecords.component.html',
  styleUrls: ['./previoushealthrecords.component.scss']
})
export class PrevioushealthrecordsComponent {

  constructor(
    private historyService: NurseService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) {}

  displayedColumns1: string[] = ['testId', 'testName', 'result', 'testNotes'];

  arr: string = JSON.parse(sessionStorage.getItem('data') || '{}');
  appId: string = JSON.parse(sessionStorage.getItem('app') || '{}');

  // no :number[] = parseInt(this.arr);

  ngOnInit() {
    this.getVisitId();
    console.log("VisitId",this.arr);
    
    this.getTests();
   
  }
  nums: number[] = [];

  ngAfterViewInit(): void {
    

    this.dataSource1 = new MatTableDataSource<TestList>(this.tests);
    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
  }
  private _tests!: TestList[];
  private _visits: VisitId[] = [];
  private _appointments: AllAppointments[] = [];

  public get tests(): TestList[] {
    return this._tests;
  }
  public set tests(value: TestList[]) {
    this._tests = value;
  }
  public get visits(): VisitId[] {
    return this._visits;
  }
  public set visits(value: VisitId[]) {
    this._visits = value;
  }
  public get appointments(): AllAppointments[] {
    return this._appointments;
  }
  public set appointments(value: AllAppointments[]) {
    this._appointments = value;
  }
  public set appointmentDetails(value: AppointmentDetails[]) {
    this._appointmentDetails = value;
  }
  public get appointmentDetails() {
    return this._appointmentDetails;
  }
  isLoading = false;

  dataSource1 = new MatTableDataSource<TestList>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizes = [3, 5, 7];
  @ViewChild(MatSort) sort!: MatSort;

  num: any = sessionStorage.getItem('patientid');

  public getVisitId(): void {
    console.log(this.num);
    this.historyService.getAllVisitId(3).subscribe(
      (reponse: VisitId[]) => {
        this.visits = reponse;
        sessionStorage.setItem('data', JSON.stringify(reponse));
        console.log("visitId",this.visits);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // public getAppointmentId(): void {
  //   this.historyService.getAllAppointments(this.num).subscribe(
  //     (response: AllAppointments[]) => {
  //       this.appointments = response;
  //       sessionStorage.setItem('app', JSON.stringify(response));
  //       console.log('Mrunal', this.appointments);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  //mrunal: any;
  try: any[] = [];

  public getTests(): void {
    for (let mrunal of this.arr) {
      console.log('getTEst', Number(mrunal));
      this.historyService.getAllTests(Number(mrunal)).subscribe(
        (response: TestList[]) => {
          this.tests = response;
          sessionStorage.setItem('visitid', mrunal);
          var len = this.try.push(response);
          // console.log(this.tests);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  // perviousAppointmentIdData: any;
  // getPeviousAppointment() {
  //   this.historyService
  //     .getPeviousAppointment(this.num)
  //     .subscribe((response) => {
  //       this.perviousAppointmentIdData = response;
  //       console.log(response);
  //       console.log(this.perviousAppointmentIdData.appointmentId);
  //     });
  // }
  // perviousAppointmentVisitHistory: any;
  // getPeviousAppointmentVisitHistory() {
  //   console.log(this.perviousAppointmentIdData.appointmentId);
  //   this.historyService
  //     .getPeviousAppointmentVisitHistory(
  //       this.perviousAppointmentIdData.appointmentId
  //     )
  //     .subscribe((response) => {
  //       this.perviousAppointmentVisitHistory = response;
  //       console.log(response);
  //     });
  // }

   

  openDialog(ashwin : any) {
    
    sessionStorage.setItem('view',ashwin);
    console.log("ASHWIN",ashwin)
    this.dialog.open(PrescriptionComponent);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

  eshu: any[] = [];
  _appointmentDetails: AppointmentDetails[] = this.eshu;

  // public getAppointment(): void {
  //   for (let ashwin of this.appId) {
  //     this.historyService.getAppointmentDetails(Number(ashwin)).subscribe(
  //       (response: AppointmentDetails[]) => {
  //         this.appointmentDetails = response;
  //         var x = this.eshu.push(response);
  //         console.log('Mru', this.eshu);
  //       },
  //       (error: HttpErrorResponse) => {
  //         alert(error.message);
  //       }
  //     );
  //   }
  // }
}
