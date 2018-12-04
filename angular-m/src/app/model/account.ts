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

    setName(name: string) {
        this.nume = name;
    }

    setPrenume(prenume: string) {
        this.prenume = prenume;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setAdresa(adresa: string) {
        this.adresa = adresa;
    }

    setTelefon(telefon: number) {
        this.telefon = telefon;
    }
}
