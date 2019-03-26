import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ElencoCarteComponent} from './elenco-carte/elenco-carte.component';
import {ListapositionComponent} from './listaposition/listaposition.component';
import {StepperComponent} from './stepper/stepper.component';



const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'elencocarte', component: ElencoCarteComponent},
  {path: '', component: ListapositionComponent},
  {path: 'listaposition', component: ListapositionComponent},
  {path: 'stepper', component: StepperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}
