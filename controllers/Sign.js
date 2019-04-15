export default class Sign {
    
    constructor(router) {
        this.router = router ;
        this.view = 'sign.html';
    }

    init() {
        console.log('HOME !');


        document.getElementById('login').addEventListener('submit', this.onSubmitLogin.bind(this), false);

        document.getElementById('signin').addEventListener('submit', this.onSignin.bind(this), false);

        document.getElementById('google').addEventListener('click', this.onGoogle.bind(this), false);


        document.getElementById('twitter').addEventListener('click', this.onTwitter.bind(this), false);

        document.getElementById('github').addEventListener('click', this.onGithub.bind(this), false);
    }

        onSubmitLogin(event){

            event.preventDefault();

            console.log('Connexion !');
    }

    onSignin(event){

        event.preventDefault();
        const firstname = document.getElementById('signin_firstname').value;
        const lastname = document.getElementById('signin_lastname').value;
        const email = document.getElementById('signin_email').value;
        const password = document.getElementById('signin_password').value;
        const password_confirm = document.getElementById('signin_password_confirm');const avatar = document.getElementById('signin_avatar').files[0];

        console.log(firstname, lastname, email, password, password_confirm, avatar /* ... */);
        if (password !== password_confirm) {
            
            return this.displayError('les mot de pass ne correspond pas.');


}     
    // tentative creation de compte 

    firebase.auth().creatUserWithEmailAndPassword(email, password)

    .then((userCredentials) => firebase.firestore().collection('users').doc(userCredentials.users.uid).set({firstname,lastname , email}))
    .catch(error => {
        this.displayError(error.code + '\n' + error.message);
    })
  
}

    onGoogle(event){

        event.preventDefault();
        console.log('google !');

    }

    onTwitter(event){

        event.preventDefault();
        console.log('twitter !')
    }

    onGithub(event){

        event.preventDefault();
        console.log('github !')
    }

    displayError(errorMessage){
        let error = document.getElementById('error');
        error.classList.remove('d-none');
        error.textContent = errorMessage;
    }
}