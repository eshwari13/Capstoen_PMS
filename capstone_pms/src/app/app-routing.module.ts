import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'physician',
    loadChildren: () =>
      import('./module/physician/physician.module').then(
        (m) => m.PhysicianModule
      ),
  },
  {
    path: 'nurse',
    loadChildren: () =>
      import('./module/nurse/nurse.module').then(
        (m) => m.NurseModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
