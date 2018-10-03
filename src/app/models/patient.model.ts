export class Patient {
    constructor (
        private TipoDocumento: string,
        private Documento: string,
        private Nombres: string,
        private Apellidos: string,
        private FechaNacimiento: string,
        private Correo: string,
        private Telefono: string,
        private AntecedentesPersonales: string,
        private AntecedentesFamiliares: string,
        private EPS: string,
        private isLinkedInfo: boolean,
        private linkedInfo: LinkedInfo | null
    ) {}
}

export class LinkedInfo {
    constructor (
        private Nombres: string,
        private Apellidos: string,
        private relationShipType: string,
        private Correo: string,
        private Telefono: string
    ) {}
}