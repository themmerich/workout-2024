import { Routes } from '@angular/router';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';

export const equipmentRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: EquipmentListComponent,
    title: 'Equipment List',
  },
];
