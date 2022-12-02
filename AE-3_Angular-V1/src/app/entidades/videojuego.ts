
// Clase que guarda los atributos de un Videojuego
export class Videojuego{

    /** 
    * Los atributos privados se ponen con "_" por convenio
    * Atributo privado que lleva el identificador único del Videojuego. Solo se
    * permitiá acceder a él con el método get.
    */
    private _id : number = 0;

    /*
    * Atributo contador del ID del Videojuego. Es estático para que su ciclo de vida no dependa 
    * del tiempo de vida de los objetos.
    * La función de este atributo es llevar un contador del atributo "_id"
    * que se asingará en el constructory se autoincrementará automáticamente por cada 
    * objeto Videojuego que se cree.
    */
    private static contadorId : number = 1;

    //OJO! Al poner en el constructor los parametros de entrada, se crean automáticamente 
    //los atributos titulo, company, imagen, valoracion en la clase. Es decir, esta clase tendrá 4 atributos
    //dinamicos y 1 estatico en total.
    constructor(public titulo : string, public company : string, public imagen : string, public valoracion : number){
        this._id = Videojuego.contadorId++;
        this.titulo = titulo
        this.company = company
        this.imagen = imagen
        this.valoracion = valoracion
    }

    public get id() : number{
        return this._id;
    }

}