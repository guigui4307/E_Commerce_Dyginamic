export default class  Users {
    name:string;
    email:string;
    passeword:string;
    constructor(nom:string, e:string, pwd:string) {
        this.name=nom;
        this.email=e;
        this.passeword=pwd;
    }
}