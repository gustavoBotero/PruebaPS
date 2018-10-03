export class GeneralInfo {
    constructor (
        private documentType: string,
        private document: string,
        private firstName: string,
        private lastName: string,
        private birthDate: string,
        private email: string,
        private phone: string,
        private isLinkedInfo: boolean,
        private linkedInfo: LinkedInfo | null
    ) {}
}

export class LinkedInfo {
    constructor (
        private firstName: string,
        private lastName: string,
        private relationShipType: string,
        private email: string,
        private phone: string
    ) {}
}