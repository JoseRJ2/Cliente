export class ListProducto{
   idCarrito: number;
   estadoCarrito: string;
   productos: string;
   modelo: string;
   cantidad: number;
   precio: number;
    constructor() {
        this.idCarrito = 0;
        this.estadoCarrito = '';
        this.productos = '';
        this.modelo = '';
        this.cantidad = 0;
        this.precio = 0;
    }
}