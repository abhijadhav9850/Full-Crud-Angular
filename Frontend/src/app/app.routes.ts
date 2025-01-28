import { Routes } from '@angular/router';
import { UiPageComponent } from './pages/ui-page/ui-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',component:UiPageComponent},
];
