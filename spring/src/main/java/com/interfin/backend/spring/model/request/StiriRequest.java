package com.interfin.backend.spring.model.request;

public class StiriRequest {

    private Long id;
    private String titlu;
    private String continut;

    public StiriRequest() {
    }

    public StiriRequest(Long id, String titlu, String continut) {
        this.id = id;
        this.titlu = titlu;
        this.continut = continut;
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
