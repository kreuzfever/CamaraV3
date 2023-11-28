import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { AnimationController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  @ViewChild("titulo", { read: ElementRef, static: true }) titulo!: ElementRef;
  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.avanzarDerecha();

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

}




