package com.interfin.backend.spring.entity;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Table(name = "Stiri")
public class StiriEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @DateTimeFormat(iso= DateTimeFormat.ISO.DATE)
    private LocalDate data;

    private String titlu;

    private String continut;

    public StiriEntity() {
    }

    public StiriEntity(@NotNull LocalDate data, String titlu, String continut) {
        this.data = data;
        this.titlu = titlu;
        this.continut = continut;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
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

    public String getContinut() {
        return continut;
    }

    public void setContinut(String continut) {
        this.continut = continut;
    }
}
