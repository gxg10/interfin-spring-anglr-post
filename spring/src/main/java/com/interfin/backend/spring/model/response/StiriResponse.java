package com.interfin.backend.spring.model.response;

public class StiriResponse {

    private Long id;
    private String titlu;
    private String continut;

    public StiriResponse() {
    }

    public StiriResponse(String titlu, String continut) {
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
