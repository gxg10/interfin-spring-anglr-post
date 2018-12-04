export class Account {
    nume: string;
    prenume: string;
    email: string;
    adresa: string;
    telefon: number;

    constructor(nume: string, prenume: string, email: string, 
        adresa: string, telefon: number ) {
        this.nume = nume;
        this.prenume = prenume;
        this.email = email;
        this.adresa = adresa;
        this.telefon = telefon;
    }
}
