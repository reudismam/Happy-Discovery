import {Request, Response} from 'express';
import Database from './database/db';
import saveOrphanage from './database/saveOrphanage';

export default {
    index(req: Request, res: Response) {
        const name = 'Reudismam';
        return res.render('index', {name});
    },
    async orphanage(req: Request, res: Response) {
        const {id} = req.query;
        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id="${id}"`);
            const orphanage = results[0];
            
            orphanage.images = orphanage.images.split(',');
            orphanage.firstImage = orphanage.images[0];

            if (orphanage.open_on_weekends == '0') {
                orphanage.open_on_weekends = false;
            }
            else {
                orphanage.open_on_weekends = true;
            }
            return res.render('orphanage', {"orphanage": orphanage});
         } catch (error) {
             console.log(error);
            return res.send("Erro no banco de dados.");
         }
        return res.render('orphanage', {name});
    },
    async orphanages(req: Request, res: Response) {
        try {
           const db = await Database;
           const orphanages = await db.all('SELECT * FROM orphanages');
           return res.render('orphanages', {orphanages});
        } catch (error) {
            console.log(error);
           return res.send("Erro no banco de dados.");
        }
    },
    createOrphanage(req: Request, res: Response) {
        const name = 'Reudismam';
        return res.render('create-orphanage', {name});
    },
    async saveOrphanage(req: Request, res: Response) {
        const fields = req.body;
        console.log(fields);
        /*if (Object.values(fields).includes('')) {
            return res.send("Todos os campos devem ser preenchidos");
        }*/
        try {
            const db = await Database;
            await saveOrphanage.save(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends
            });
            return res.redirect('/orphanages'); 
    }catch (error) {
            console.log(error);
            res.send("Erro no banco de dados.");
    }
    }
}