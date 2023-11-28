import { Component, OnInit,ElementRef, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  @ViewChild("titulo", { read: ElementRef, static: true }) titulo!: ElementRef;
  constructor( private animationCtrl: AnimationController, 
    private router: Router) { }

  nombreUsuario: any; 

 
  ngOnInit() {
    this.nombreUsuario = localStorage.getItem('nombreUsuario')
    console.log(this.nombreUsuario);
    this.crecer();

  }

  tomarCaptura() {
    this.router.navigate(["/tomarcaptura"]);
  }

  public avanzarDerecha() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(200px)')
      .fromTo('color', "blue", "red")
      .fromTo('opacity', '1', '0');

    animation.play();
  }

  public crecer() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .fromTo('transform', 'scale3d(1,1,1)', 'scale3d(1.5,1.5,1.5)')
      .fromTo("color", "black", "black")
      .fromTo('opacity', '1', '0');

    animation.play();
  }

}
