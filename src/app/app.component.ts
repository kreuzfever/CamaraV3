import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { MenuController } from '@ionic/angular'; 

//npm install @capacitor/share
//npx cap sync (opcional)

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/bienvenida', icon: 'home' },
    { title: 'Escanear Qr Asistencia', url: '/tomarcaptura', icon: 'qr-code' },
 
  ];
  public labels = [];
  constructor(public router: Router, private menu: MenuController) {}

  nombreUsuario: any;
  email: any;


  ngOnInit() {
    this.nombreUsuario = localStorage.getItem('nombreUsuario')
    console.log(this.nombreUsuario);
    this.email = localStorage.getItem('email')
    console.log(this.email);
  } 
  compartirApp() {
    Share.share({
      title: 'Compartir myApp',
      url: 'https://bilbaolabs.cl',
      dialogTitle: 'Es perfecta!',
    });
  }

  abrirMapa() {
    this.router.navigate(["/mapita"]);
    this.menu.close();
  }
  abrirClima() {
    this.router.navigate(["/clima"]);
    this.menu.close();
  }

  cerrarSesion(){
    localStorage.removeItem('autenticado');
    this.router.navigate(["/ingresar"]);
    this.menu.close();
  }


}


