package com.interfin.backend.spring.entity;

import javax.persistence.*;

@Entity
@Table(name = "cont")
public class Cont {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String nume;

    @Column
    private String prenume;

    @Column
    private String email;

    @Column
    private String address;

    @Column
    private String telefon;

    public Cont() {
    }

    public Cont(String nume, String prenume, String email, String address, String telefon) {
        this.nume = nume;
        this.prenume = prenume;
        this.email = email;
        this.address = address;
        this.telefon = telefon;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getPrenume() {
        return prenume;
    }

    public void setPrenume(String prenume) {
        this.prenume = prenume;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }
}
