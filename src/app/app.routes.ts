import { Routes } from '@angular/router';
import { MsicComponent } from './msic/msic.component';

export const routes: Routes = [
    { path: 'msic', component: MsicComponent},
    {path: '', redirectTo: 'msic', pathMatch: 'full'},
];
