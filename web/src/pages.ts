import {Request, Response} from 'express';
import orphanages from './database/fakedatabase';
export default {
    index(req: Request, res: Response) {
        const name = 'Reudismam';
        return res.render('index', {name});
    },
    orphanage(req: Request, res: Response) {
        const name = 'Reudismam';
        return res.render('orphanage', {name});
    },
    orphanages(req: Request, res: Response) {
        console.log(orphanages);
        return res.render('orphanages', {orphanages});
    },
    createOrphanage(req: Request, res: Response) {
        const name = 'Reudismam';
        return res.render('create-orphanage', {name});
    }
}