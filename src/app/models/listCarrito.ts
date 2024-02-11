export class ListarCarrito{
    id: number;
    estado: string;
    nombre: string;
    modelo: string;
    cantidad: number;
    precio: number;


    constructor() {
        this.id = 0;
        this.estado = '';
        this.nombre = '';
        this.modelo = '';
        this.cantidad = 0;
        this.precio = 0;
    }
}