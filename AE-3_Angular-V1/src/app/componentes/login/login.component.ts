import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  listaUsuarios : Usuario[] = []
  

  //Habilitar o deshabilitar mensajes de error 
  //El usuario y la clave no pueden estar vacios
  usuarioObligatorioOculto = true
  claveObligatorioOculto = true


  usuarioError = false;

  //Datos que recogeremos del formulario
  usuario : string = ""
  clave : string = ""

  //Le pedimos a Angular que nos lo inyecte el objeto "router"cuando cree este componente
  constructor(private router:Router) {
    let usuario : Usuario = new Usuario("pepe", "123")
    this.listaUsuarios.push(usuario)
    usuario= new Usuario("azul", "456")
    this.listaUsuarios.push(usuario)
   }


  /**
   * Método que cargan en el formulario el heroe elegido en la tabla de la lista de heroes.
   * Una vez elegido el heroe, podremos modificarlo o borrarlo, pero no insertarlo.
   * El boton de insertar se deshabilitará, pero se habilitarán los botones de modificar
   * y de borrar
   * 
   * @param usuario representa el usuario que queremos loguear
   */
   public loginUser() : void{
    if(!this.hayErroresEnFormulario()){
      for(let i = 0; i < this.listaUsuarios.length; i++){
        let usuarioAux : Usuario = this.listaUsuarios[i]
        if(usuarioAux.nombre === this.usuario && usuarioAux.clave === this.clave){
          this.usuarioError = false;
          this.routingProgramatico()
          this.vaciar()
        }else{
          this.usuarioError = true;
        }
      }
    }
  }

  /**
   * Método que comprueba si los campos del formulario están vacios
   * @returns true en caso de que los campos usuario o clave esten vacios. false
   * en caso contrario
   */
   public hayErroresEnFormulario() : boolean{
    //Partimos de la base de que no hay errores en el formulario
    let error : boolean = false
    this.ocultarMensajesError()

    if(this.usuario.trim().length==0){
      this.usuarioObligatorioOculto = false//mostramos el mensaje de usuario obligatorio
      error = true
    }
    
    if(this.clave.trim().length==0){
      this.claveObligatorioOculto = false//mostramos el mensaje de clave obligatorio
      error = true
    }
    return error
  }

  /**
   * Metodo que oculta los mensajes de error de los formularios.
   */
     public ocultarMensajesError(){
      this.usuarioObligatorioOculto = true
      this.claveObligatorioOculto = true
    } 

  /**
   * Método que vacia los campos del formulario, resetea los mensajes de error
   */
   public vaciar(){
    console.log("Vaciando...")  
    //Reseteamos el formulario   
    this.usuario = ""
    this.clave = ""
    this.ocultarMensajesError()
  }

  //Para hacer routing programático debemos de usar el objeto "router"
  //Muy util cuando queremos mete logica de navegación o el componente
  //donde queremos ir depende de otros parámetros
  public routingProgramatico(){
    console.log("Navegando...")
    //Podemos establecer de manera programática a donde queremos ir mediante
    //el objeto router que hemos inyectado previamente
    this.router.navigate([ '/home', {usuario: this.usuario}])
  }


  ngOnInit(): void {
  }

}
