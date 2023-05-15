import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UserLogin } from 'src/app/_model/UserLogin';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/_service/login.service'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string;
  password: string;
  private usser = new UserLogin;
  hide = true;

  formul: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.buildFrom();
  }
  private buildFrom() {
    
    this.formul = this.formBuilder.group({    
      documento: [this.usser.documento, [Validators.required,Validators.maxLength(15), Validators.minLength(3),Validators.pattern('[0-9]*')]],
      clave: [this.usser.clave, [Validators.required,Validators.minLength(4), Validators.maxLength(15)]],
    });
  }

  ingresar(event: Event){
    this.usser = this.formul.value;
    this.loginService.login(this.usser).subscribe(data =>{
      
      sessionStorage.setItem(environment.TOKEN, data.Token);
      this.loginService.paginaReactiva.next(true);
      this.openSnackBar("Ingreso correctamente");
      this.router.navigate(['inicio']);
    }, err => {
      this.openSnackBar("Usuario o contraseña Incorrecta\nIntente nuevamente");
    });
  }

  private openSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Aceptar', {
      duration: 7000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  } 

}
