export class Producto{
    id: number;
    nombre : string;
    modelo: string;
    Talla: string;
    color: string;
    precio: number;
    cantidad: number;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.modelo = '';
        this.Talla = '';
        this.color = '';
        this.precio = 0;
        this.cantidad = 0;
    }
}