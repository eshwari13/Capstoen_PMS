import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NurseRoutingModule } from './nurse-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefaultComponent } from './components/default/default.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { TestComponent } from './components/test/test.component';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { PatientinfoComponent } from './components/patientinfo/patientinfo.component';
import { PreviousappointmentComponent } from './components/previousappointment/previousappointment.component';
import { AddvisitdetailsComponent } from './components/addvisitdetails/addvisitdetails.component';
import { PatientComponent } from './components/patient/patient.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { MatOptionModule } from '@angular/material/core';
import { NotificationComponent } from './components/notification/notification.component';
import { DoctorappointmentsComponent } from './components/doctorappointments/doctorappointments.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PrevioushealthrecordsComponent } from './components/previoushealthrecords/previoushealthrecords.component';
import { LogoutdialogComponent } from './components/logoutdialog/logoutdialog.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent,
    SidebarComponent,
    PrescriptionComponent,
    TestComponent,
    ExpandableComponent,
    PatientinfoComponent,
    PreviousappointmentComponent,
    AddvisitdetailsComponent,
    PatientComponent,
    SnackbarComponent,
    NotificationComponent,
    DoctorappointmentsComponent,
    DoctorsComponent,
    PrevioushealthrecordsComponent,
    LogoutdialogComponent,
    
  ],
  imports: [
    CommonModule,
    NurseRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule,
    MatOptionModule,
    MatSnackBarModule,

  ]
})
export class NurseModule { }
