const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //Middleware
            console.log(`Request de ${req.originalUrl}`)
            console.log(`request type: ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send('demande GET avec succès');
        })

        .post((req,res) =>
            res.send('demande POST avec succès'));

    app.route('/contact/:contactId')
        .put((req,res) =>
            res.send('demande PUT avec succès'))
        
        .delete((req,res) =>
            res.send('demande DELETE avec succès'));
}

export default routes;