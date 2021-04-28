import { Request, Response } from 'express';
import { connect } from '../database';
import { IProspect } from '../interfaces/Prospect';

export async function index(req: Request, res: Response): Promise<Response> {
    const conn = await connect();

    const prospects = await conn.query('SELECT * FROM vGetProspectos');

    conn.end();

    return res.json({
        status: true,
        message: 'Lista de prospectos cargada correctamente',
        item: prospects[0]
    });
};

export async function store(req: Request, res: Response) {
    const prospect: IProspect = req.body;
    try {
        const conn = await connect();

        const insertedProspect = conn.query('call SP_CreateProspect(?,?,?,?,?,?,?,?,?)',
            [
                prospect.nombre,
                prospect.primer_apellido,
                prospect.segundo_apellido,
                prospect.calle,
                prospect.numero,
                prospect.colonia,
                prospect.cp,
                prospect.tel,
                prospect.rfc
            ]);

        return res.json({
            status: true,
            message: 'Prospecto creado correctamente.',
            item: insertedProspect
        });

    } catch (error) {
        console.error(error);
        return res.json({
            message: error
        });
    }

};

export async function show(req: Request, res: Response): Promise<Response> {
    const conn = await connect();

    const id = req.params.prospectId;

    const prospect = await conn.query('SELECT * FROM vGetOneProspect where id_prospecto = ?', [id]);

    return res.json({
        status: true,
        message: 'Prospecto mostrado correctamente.',
        item: prospect[0]
    });
};

export async function update(req: Request, res: Response): Promise<Response> {
    const conn = await connect();

    const id = req.params.prospectId;
    const prospect: IProspect = req.body;
    console.log(prospect);
    const updatedProspect = await conn.query('call SP_UpdateProspect(?,?,?)',
        [
            prospect.observaciones,
            prospect.status,
            id
        ]);

    return res.json({
        status: true,
        message: 'Prospecto actualizado correctamente.',
        item: updatedProspect[0]
    });
}