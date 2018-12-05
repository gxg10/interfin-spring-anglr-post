package com.interfin.backend.spring.entity;


import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Table(name = "raport_piata")
public class RaportPiata {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String titlu;

    @NotNull
    @DateTimeFormat(iso= DateTimeFormat.ISO.DATE)
    private LocalDate data;

    private String tipRaport;

    private String continut;

    private String url;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public RaportPiata() {
    }

    public RaportPiata(String titlu, LocalDate data, String tipRaport, String continut, String url) {
        this.titlu = titlu;
        this.data = data;
        this.tipRaport = tipRaport;
        this.continut = continut;
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitlu() {
        return titlu;
    }

    public void setTitlu(String titlu) {
        this.titlu = titlu;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getTipRaport() {
        return tipRaport;
    }

    public void setTipRaport(String tipRaport) {
        this.tipRaport = tipRaport;
    }

    public String getContinut() {
        return continut;
    }

    public void setContinut(String continut) {
        this.continut = continut;
    }
}