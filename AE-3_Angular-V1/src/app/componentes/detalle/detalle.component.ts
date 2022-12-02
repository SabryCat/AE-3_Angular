import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  usuario: string = ''
  titulo : string = ''
  company : string = ''
  imagen : string = ''
  valoracion : number = 0

  constructor(route : ActivatedRoute, private router: Router ) {
     this.usuario = route.snapshot.params["usuario"];
     this.titulo = route.snapshot.params["titulo"];
     this.company = route.snapshot.params["company"];
     this.imagen = route.snapshot.params["imagen"];
     this.valoracion = route.snapshot.params["valoracion"];
   }


   volver() {
    this.router.navigate([ '/home', {usuario: this.usuario}])
    }
  ngOnInit(): void {
  }

}
