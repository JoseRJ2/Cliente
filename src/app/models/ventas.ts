export class Venta{
    id: number;
    idPagoCarrito: number;
    Usuario: string;
    Cliente: string;
    fecha: string;
    total: number;

    constructor() {
        this.id = 0;
        this.idPagoCarrito = 0;
        this.Cliente = "";
        this.Usuario = "";
        this.fecha = "";
        this.total = 0;
    }
}