import { runInNewContext } from "vm";
import { 
    addNewContact, 
    getContacts,
    getContactWithID,
    deleteContact,
    updateContact
} from '../controllers/crmControllers';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //Middleware
            console.log(`Request de ${req.originalUrl}`)
            console.log(`request type: ${req.method}`)
            next();
        }, getContacts)


        .post(addNewContact);

    app.route('/contact/:contactId')
        //contact avec ID
        .get(getContactWithID)

        //Mise a jour contact
        .put(updateContact)

        //supprimer contact
        .delete(deleteContact);
}

export default routes;