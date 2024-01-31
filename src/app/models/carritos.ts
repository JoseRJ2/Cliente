export class Carrito{
    id: number;
    idUsuario: number;
    idCliente: number;
    fechaLimite: string;
    estado: string;

    constructor() {
        this.id = 0;
        this.idUsuario = 0;
        this.idCliente = 0;
        this.fechaLimite = '';
        this.estado = '';
    }
}