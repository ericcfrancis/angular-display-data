import { Routes } from '@angular/router';
import { MsicComponent } from './msic/msic.component';
import { McoicopComponent } from './mcoicop/mcoicop.component';

export const routes: Routes = [
    { path: 'msic', component: MsicComponent},
    { path: 'mcoicop', component: McoicopComponent },
    {path: '', redirectTo: 'msic', pathMatch: 'full'},
];
