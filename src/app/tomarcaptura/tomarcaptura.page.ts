import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tomarcaptura',
  templateUrl: './tomarcaptura.page.html',
  styleUrls: ['./tomarcaptura.page.scss'],
})
export class TomarcapturaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  capturalista() {
    this.router.navigate(["/capturalista"]);
  }

}
