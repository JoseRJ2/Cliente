export class Usuario{
    id: number;
    nombre : string;
    Rol: string;
    usuario: string;
    contrasena: string;
    telefono: string;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.usuario = 'PEEP2003';
        this.Rol = '';
        this.contrasena = 'Robles2003';
        this.telefono = '';
    }
}