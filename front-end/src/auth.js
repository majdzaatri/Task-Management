class Auth {

    constructor() {
        this.authinticated = false;
    }

    login(cb) {
        this.authinticated = true;
        cb()
    }

    logout(cb){
        this.authinticated = false;
        cb()
    }

    isAuthenticated() {
        return this.authinticated;
    }
}

export default new Auth;