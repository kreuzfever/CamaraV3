import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import { AnimationController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-capturalista',
  templateUrl: './capturalista.page.html',
  styleUrls: ['./capturalista.page.scss'],
})
export class CapturalistaPage implements OnInit {
    @ViewChild("titulo", { read: ElementRef, static: true }) titulo!: ElementRef;
    constructor(private animationCtrl: AnimationController,private router: Router,private menu: MenuController) { }
  
    nombreUsuario: any; 

    ngOnInit() {
      this.nombreUsuario = localStorage.getItem('nombreUsuario')
      console.log(this.nombreUsuario);
      this.crecer();
    }
   
    public avanzarDerecha() { 
      const animation = this.animationCtrl
        .create()
        .addElement(this.titulo.nativeElement)
        .duration(2000)
        .iterations(Infinity)
        .fromTo('transform', 'translateX(0px)', 'translateX(200px)')
        .fromTo('black', "blue","red")
        .fromTo('opacity', '1', '0');
  
      animation.play();
    }
  
    public crecer() {
      const animation = this.animationCtrl
        .create()
        .addElement(this.titulo.nativeElement)
        .duration(1000)
        .iterations(Infinity)
        .fromTo('transform', 'scale3d(1,1,1)', 'scale3d(2,2,2)')
        .fromTo("color", "green", "blue")
        .fromTo('opacity', '1', '0');
  
      animation.play();
    }
    bienvenida() {
      this.router.navigate(["/bienvenida"]);
    }
    cerrarSesion(){
      localStorage.removeItem('autenticado');
      this.router.navigate(["/ingresar"]);
      this.menu.close();
    }
  
  }
  
  
  
  
  
 

