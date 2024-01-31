export class Venta{
    id: number;
    idPagoCarrito: number;
    idCliente: number;
    idUsuario: number;
    fecha: string;

    constructor() {
        this.id = 0;
        this.idPagoCarrito = 0;
        this.idCliente = 0;
        this.idUsuario = 0;
        this.fecha = "";
    }
}