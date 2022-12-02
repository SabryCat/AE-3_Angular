import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Videojuego } from 'src/app/entidades/videojuego';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario : string = ''
  //Controlar si hay usuario
  usuarioLogado = false;
  //Listado videojuegos
  listaVideojuegos : Videojuego[] = []
  videojuego : Videojuego | null = null//permitimos al videojuego apuntar null mediante el tipo unión "|"

  //En este caso, le solicitaremos un objeto de tipo ActivatedRoute, que es una clase 
  //cuyas instancias representan a la ruta presente en la barra de navegación
  //Basicamente se usa para recoger parámetros que nos envian otros componentes
  constructor(route : ActivatedRoute, private router:Router) {   
    //Accedemos a los valores contenidos en la ruta por el nombre que declaramos
    //ruta.snapshot.params['dato'], siendo "dato" el identificador que hemos declarado
    //en el fichero de routing (:dato)    
    //En nuestro caso:
    if(route.snapshot.params["usuario"] !== undefined){
      this.usuario = route.snapshot.params["usuario"]
      if(this.usuario.trim().length==0){
        this.usuarioLogado = false
      }else{
        this.usuarioLogado = true
        this.mostrarListado();
      }
    }
  }

public mostrarListado(): void{
  let videojuego : Videojuego = new Videojuego("Call of duty", "Infinity Ward", "/assets/img/cod.jpg", 9);
  this.listaVideojuegos.push(videojuego);
  videojuego = new Videojuego("Warcraft", "Blizzard", "/assets/img/warcraft.jpg", 10)
  this.listaVideojuegos.push(videojuego);
}


 /**
   * Método que cargan en el formulario el videojuego elegido en la tabla de la lista de videojuegos.
   * @param videojuego representa el videojuego que queremos cargar en el formulario
   */
  public seleccionar(videojuego : Videojuego) : void{
    for(let i=0; i<this.listaVideojuegos.length; i++){
      let videojuegoAux : Videojuego = this.listaVideojuegos[i]
      if(videojuegoAux.id == videojuego.id){
        this.router.navigate([ '/detalle', {usuario: this.usuario, titulo: videojuegoAux.titulo, company: videojuegoAux.company, imagen: videojuegoAux.imagen, valoracion: videojuegoAux.valoracion}])
        break
      }
    }
  }



  ngOnInit(): void {
  }

}
