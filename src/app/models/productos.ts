export class Producto{
    id: number;
    nombre : string;
    modelo: string;
    idTalla: number;
    color: string;
    precio: number;
    cantidad: number;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.modelo = '';
        this.idTalla = 0;
        this.color = '';
        this.precio = 0;
        this.cantidad = 0;
    }
}