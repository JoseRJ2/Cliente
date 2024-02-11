export class Carrito{
    id: number;
    Usuario: string;
    Cliente: string;
    fechaLimite: string;
    estado: string;

    constructor() {
        this.id = 0;
        this.Usuario = '';
        this.Cliente = '';
        this.fechaLimite = '';
        this.estado = '';
    }
}