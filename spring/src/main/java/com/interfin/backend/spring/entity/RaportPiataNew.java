package com.interfin.backend.spring.entity;

import javax.persistence.*;

@Entity
@Table(name = "t_raport_piata")
public class RaportPiataNew {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_news;

    private String title;

    private String contents;

    private String news_date;

    private String active;

    private String tip;

    private String title_en;

    private String contents_en;

    public RaportPiataNew() {
    }

    public RaportPiataNew(String title, String contents, String news_date, String active, String tip, String title_en, String contents_en) {
        this.title = title;
        this.contents = contents;
        this.news_date = news_date;
        this.active = active;
        this.tip = tip;
        this.title_en = title_en;
        this.contents_en = contents_en;
    }

    public Long getId_news() {
        return id_news;
    }

    public void setId_news(Long id_news) {
        this.id_news = id_news;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public String getNews_date() {
        return news_date;
    }

    public void setNews_date(String news_date) {
        this.news_date = news_date;
    }

    public String getActive() {
        return active;
    }

    public void setActive(String active) {
        this.active = active;
    }

    public String getTip() {
        return tip;
    }

    public void setTip(String tip) {
        this.tip = tip;
    }

    public String getTitle_en() {
        return title_en;
    }

    public void setTitle_en(String title_en) {
        this.title_en = title_en;
    }

    public String getContents_en() {
        return contents_en;
    }

    public void setContents_en(String contents_en) {
        this.contents_en = contents_en;
    }
}
