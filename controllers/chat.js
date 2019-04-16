import store from '../scripts/store.js';

export default class Chat {

    constructor(router) {
        this.view = 'chat.html';
        this.router = router;
    }

    init() {
        console.log('CHAT !');

        firebase.auth().onAuthStateChanged(user => {
            console.log('user récuépeé !', user).doc(user.uid).get()
            .then(user =>{
                //mise a jour du state
                store.setState ({ user:  user.data()});

                this.user = user.data();

                console.log(this.user);
            });
        });
        
    }
}