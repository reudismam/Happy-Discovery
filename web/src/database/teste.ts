import Database from './db';
import SaveOrphanage from './saveOrphanage';

Database.then(async (db) => {
    await SaveOrphanage.save(db, {
        name: "Lar das meninas",
        about: "Presta assistência ....",
        images: [
            "https://source.unsplash.com/random/1",
            "https://source.unsplash.com/random/2"
        ].toString(),
        lat: "-5.2036578",
        lng: "-37.3283334",
        whatsapp: "(83)90000000",
        instructions: "Instruções gerais...",
        opening_hours: "Todos as horas",
        open_on_weekends: "1"
    });

    const selectedOrphanages = await db.all('SELECT * from orphanages');
    console.log(selectedOrphanages);

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id="1"');
    console.log(orphanage);

    /*await db.run("DELETE FROM from orphanages WHERE id='1'");*/
});