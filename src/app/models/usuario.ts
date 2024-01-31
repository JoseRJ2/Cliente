export class Usuario{
    id: number;
    nombre : string;
    idRol: number;
    usuario: string;
    contrasena: string;
    telefono: string;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.usuario = 'PEEP2003';
        this.idRol = 0;
        this.contrasena = 'Robles2003';
        this.telefono = '';
    }
}