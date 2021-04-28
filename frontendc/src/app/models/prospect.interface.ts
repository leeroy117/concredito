export interface IProspect {
    id_prospecto?: string;
    nombre: string;
    primer_apellido: string;
    segundo_apellido?: string;
    calle: string;
    numero: string;
    colonia: string;
    cp: string;
    tel: string;
    rfc: string;
    observaciones?: string;
    status?: string;
}
