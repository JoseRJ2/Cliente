export class Cliente{
    id: number;
    nombre : string;
    direccion: string;
    telefono: string;
    correo: string;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.direccion = '';
        this.telefono = '';
        this.correo = '';
    }
}