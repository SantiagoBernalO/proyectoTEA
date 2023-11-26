import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Actividad } from 'src/app/_model/Actividad';
import { ActividadPECS_Categorias } from 'src/app/_model/ActividadPECS_Categorias';
import { ActividadService } from 'src/app/_service/actividad.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-gestionar-actividad',
  templateUrl: './gestionar-actividad.component.html',
  styleUrls: ['./gestionar-actividad.component.css']
})
export class GestionarActividadComponent implements OnInit {

  @Input() actividadType: number;

  public listaActividades_activas = new MatTableDataSource<Actividad>();
  public listaActividades_inactivas = new MatTableDataSource<Actividad>();

  public listaCategorias_activas =
    new MatTableDataSource<ActividadPECS_Categorias>();
  public listaCategorias_inactivas =
    new MatTableDataSource<ActividadPECS_Categorias>();

  public user: string;
  tipoGestion;

  constructor(
    private servicioActividad: ActividadService,
    private snackBar: MatSnackBar,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.datosSesion();

    this.cargaDatosSegunTipoGestion(this.actividadType);
  }
  //ENCABEZADO DE LAS TABLAS
  displayedColumns: string[] = [
    'Nombre Actividad',
    'Descripcion',
    'Tipo Actividad',
    'Contenido',
    'Desactivar',
  ];
  displayedColumns_: string[] = [
    'Nombre Actividad',
    'Descripcion',
    'Tipo Actividad',
    'Contenido',
    'Activar',
  ];

  datosSesion() {
    const helper = new JwtHelperService();
    let token = sessionStorage.getItem(environment.TOKEN);
    const decodedToken = helper.decodeToken(token);
    this.user = decodedToken.Usuario;
  }

  actualizareActividad(id_actividad) {
    this.servicioActividad.putActividad(id_actividad).subscribe((data) => {
      this.openSnackBar(data);
      this.ngOnInit();
    });
  }

  actualizarCategoria(id_categoria) {
    console.log('id categoria ' + id_categoria);
    this.servicioActividad
      .putCategoriaEstado(id_categoria)
      .subscribe((data) => {
        this.openSnackBar(data);
        this.ngOnInit();
      });
  }

  private openSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, '', {
      duration: 7000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  cargaDatosSegunTipoGestion(id_tipoGestion) {
    if (id_tipoGestion == 1) {
      this.SpinnerService.show();
      this.tipoGestion = 'GESTIÓN DE ACTIVIDADES DE IMITACIÓN';
      this.servicioActividad
        .getListaActividades(1, this.user)
        .subscribe((data) => {
          this.listaActividades_activas = new MatTableDataSource(
            data.filter((x) => x.Estado_id <= 1)
          );
          this.listaActividades_inactivas = new MatTableDataSource(
            data.filter((x) => x.Estado_id >= 2)
          );
          this.SpinnerService.hide();
        });
    } else if (id_tipoGestion == 2) {
      this.SpinnerService.show();
      this.tipoGestion = 'GESTIÓN DE CATEGORÍAS PECS';
      this.servicioActividad.getListaCategorias(this.user).subscribe((data) => {
        this.listaCategorias_activas = new MatTableDataSource(
          data.filter((x) => x.estado_id <= 1)
        );
        this.listaCategorias_inactivas = new MatTableDataSource(
          data.filter((x) => x.estado_id >= 2)
        );
        this.SpinnerService.hide();
      });
    }
  }

}
