import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRouters} from './app.routes';
import {DataService} from './data/data.service';
import {AuthService} from './auth.service';
import {CarteService} from './data/carte.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PositionService} from './data/position.service';
import {PostDialogComponent} from './post-dialog/post-dialog.component';
//import {FormsModule} from '@angular/forms';
import {ElencoCarteComponent } from './elenco-carte/elenco-carte.component';
import {ListapositionComponent } from './listaposition/listaposition.component';
import {GlobalVars} from './global';
import { StepperComponent } from './stepper/stepper.component';


//import {MatTooltipModule} from '@angular/material/dialog';
//import {MatStepperModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    PostDialogComponent,
    ElencoCarteComponent,
    ListapositionComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService, AuthService, CarteService, PositionService, GlobalVars],
  bootstrap: [AppComponent],
  entryComponents: [
    PostDialogComponent
  ]
})
export class AppModule {}
