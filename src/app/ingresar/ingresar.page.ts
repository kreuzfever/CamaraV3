import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, private alertController: AlertController, private router: Router) {
    this.formularioLogin = this.fb.group({
      'usuarioEmail': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar() {
    var f = this.formularioLogin.value;
    const input = f.usuarioEmail;

    var nombreUsuario = localStorage.getItem('nombreUsuario');
    var email = localStorage.getItem('email');
    var contrasenaUsuario = localStorage.getItem('contrasenaUsuario');

    //console.log("Nombre de usuario localstorage: ", nombreUsuario);
    //console.log("Constraseña de usuario: ", contrasenaUsuario);
    
    //console.log("Nombre de usuario de formulario:  ", f.nombre);
    //console.log("Constraseña de usuario: ", f.contrasena);


    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else if ((nombreUsuario == input || email == input) && contrasenaUsuario == f.contrasena) {
      localStorage.setItem('autenticado', 'true');
      this.router.navigate(["/bienvenida"]);
    
    } else {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Datos incorrectos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
  }

  registro() {
    this.router.navigate(["/registro"]);
  }

  restablecer() {
    this.router.navigate(["/restablecer"]);
  }
  
  
}
