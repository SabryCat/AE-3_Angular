
// Clase que guarda los atributos de un Usuario
export class Usuario{

    /** 
    * Los atributos privados se ponen con "_" por convenio
    * Atributo privado que lleva el identificador único del Usuario. Solo se
    * permitiá acceder a él con el método get.
    */
    private _id : number = 0;

    /*
    * Atributo contador del ID del Usuario. Es estático para que su ciclo de vida no dependa 
    * del tiempo de vida de los objetos.
    * La función de este atributo es llevar un contador del atributo "_id"
    * que se asingará en el constructory se autoincrementará automáticamente por cada 
    * objeto Usuario que se cree.
    */
    private static contadorId : number = 1;

    //OJO! Al poner en el constructor los parametros de entrada, se crean automáticamente 
    //los atributos nombre y clave en la clase. Es decir, esta clase tendrá 3 atributos
    //dinamicos y 1 estatico en total.
    constructor(public nombre : string, public clave : string){
        this._id = Usuario.contadorId++;
        this.nombre = nombre
        this.clave = clave
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
        return `ID: ${this._id}, Nombre: ${this.nombre}, Clave: ${this.clave}`
    }

}