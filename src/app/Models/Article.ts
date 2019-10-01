export default class Article {
    name:string;
    descritpion:string;
    quantity:number;
    price:number;
    constructor(nom:string, des:string, quant:number, prix:number) {
        this.name=nom;
        this.descritpion=des;
        this.quantity=quant;
        this.price=prix;
    }
}