import { setUnLoggedMode } from "./functions";
import store from '../scripts/store.js';

export default class logout {


    constructor(router) {
        this.router = router;
        this.view = null;
    }

    init() {
        console.log('LOGOUT');

        firebase.auth().signOut().then(() => {
            setUnLoggedMode();

            this.router.navigateTo('/');
        });
    }
}