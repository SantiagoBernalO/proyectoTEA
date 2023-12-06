import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxSpinnerModule } from 'ngx-spinner';

import { RegistrarComponent } from './pages/registrar/registrar.component';
import { MaterialModule } from './material/material.module'
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JwtModule } from '@auth0/angular-jwt';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ActividadComponent } from './pages/actividad/actividad.component';
import { EnlazarNinoComponent } from './pages/enlazar-nino/enlazar-nino.component';
import { EnlaceConElPacienteComponent } from './pages/enlace-con-el-paciente/enlace-con-el-paciente.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { Not404Component } from './pages/not404/not404.component';
import { CrearActividadComponent } from './pages/crear-actividad/crear-actividad.component';
import { PanelActividadesComponent } from './pages/panel-actividades/panel-actividades.component';
import { ActividadDemoComponent } from './pages/actividad-demo/actividad-demo.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { PanelResultadosComponent } from './pages/panel-resultados/panel-resultados.component';
import { EvaluacionInicialComponent } from './pages/evaluacion-inicial/evaluacion-inicial.component';
import { HighchartsChartModule } from "highcharts-angular";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { PanelGraficasResultadosComponent } from './pages/panel-graficas-resultados/panel-graficas-resultados.component';
import { PanelActividadesImitacionComponent } from './pages/panel-actividades-imitacion/panel-actividades-imitacion.component';
import { PopupComponent } from './pages/popup/popup.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {MatDialogModule } from '@angular/material/dialog';
import { PecsComponent } from './pages/pecs/pecs.component';
import { AdministrarActividadComponent } from './pages/administrar-actividad/administrar-actividad.component';
import { MisActividadesComponent } from './pages/mis-actividades/mis-actividades.component';
import { FormularioCompraComponent } from './pages/formulario-compra/formulario-compra.component';
import { RecuperarClaveComponent } from './pages/recuperar-clave/recuperar-clave.component';
import { NuevaClaveComponent } from './pages/nueva-clave/nueva-clave.component';
import { FollowCursorComponent } from './follow-cursor/follow-cursor.component';
import { GestionarActividadComponent } from './components/gestionar-actividad/gestionar-actividad.component';
import { PizarronComponent } from './components/pizarron/pizarron.component';
import { PanelActividadMotoraPizarronComponent } from './pages/panelActividadMotoraPizarron/panel-actividad-motora-pizarron/panel-actividad-motora-pizarron.component';
import { CamaraVisualizadorComponent } from './pages/camara-visualizador/camara-visualizador.component';
import {WebcamModule} from 'ngx-webcam';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    LoginComponent,
    InicioComponent,
    ActividadComponent,
    EnlazarNinoComponent,
    EnlaceConElPacienteComponent,
    PerfilComponent,
    Not404Component,
    CrearActividadComponent,
    PanelActividadesComponent,
    ActividadDemoComponent,
    PanelResultadosComponent,
    EvaluacionInicialComponent,
    PanelGraficasResultadosComponent,
    PanelActividadesImitacionComponent,
    PopupComponent,
    PecsComponent,
    AdministrarActividadComponent,
    MisActividadesComponent,
    FormularioCompraComponent,
    RecuperarClaveComponent,
    NuevaClaveComponent,
    FollowCursorComponent,
    GestionarActividadComponent,
    PizarronComponent,
    PanelActividadMotoraPizarronComponent,
    CamaraVisualizadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    JwtModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatProgressBarModule,
    HighchartsChartModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatDialogModule,
    WebcamModule,
  ],
  exports: [],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  entryComponents:[MatDialogModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
