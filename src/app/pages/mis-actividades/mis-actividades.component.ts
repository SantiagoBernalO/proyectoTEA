import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TypeActivity } from 'src/app/_model/TypeActivity';
import { ActividadService } from 'src/app/_service/actividad.service';

@Component({
  selector: 'app-mis-actividades',
  templateUrl: './mis-actividades.component.html',
  styleUrls: ['./mis-actividades.component.css'],
})
export class MisActividadesComponent implements OnInit {
  public actividad_tipoList: TypeActivity[];
  public showAdministrarActividad: Boolean = false;
  public actividadType: number;

  constructor(private router: Router,
    private servicioActividad: ActividadService,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    //lista los tipos de actividades disponibles
    this.servicioActividad.getTypeActivity().subscribe((data) => {
      this.actividad_tipoList = data;
    });
    this.SpinnerService.hide();
  }

  opcionGestion(id) {
    this.actividadType=id;
    this.showAdministrarActividad=!this.showAdministrarActividad;
    //this.router.navigate(['/administrarActividad/'+id]);
  }

  regresar(){
    this.showAdministrarActividad=false;
  }
}
