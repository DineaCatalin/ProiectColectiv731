package Proiect731.controllers;

import java.util.List;

public class Receive {

    private int nrInterbari;
    private Integer nivelDificultate;
    private String limbaj;
    private String tehnologie;
    private String limba;

    public Receive() {

    }

    public Receive(int nrInterbari, Integer nivelDificultate, String limbaj, String tehnologie, String limba) {
        this.nrInterbari = nrInterbari;
        this.nivelDificultate = nivelDificultate;
        this.limbaj = limbaj;
        this.tehnologie = tehnologie;
        this.limba = limba;
    }

    public int getNrInterbari() {
        return nrInterbari;
    }

    public void setNrInterbari(int nrInterbari) {
        this.nrInterbari = nrInterbari;
    }

    public Integer getNivelDificultate() {
        return nivelDificultate;
    }

    public void setNivelDificultate(Integer nivelDificultate) {
        this.nivelDificultate = nivelDificultate;
    }

    public String getLimbaj() {
        return limbaj;
    }

    public void setLimbaj(String limbaj) {
        this.limbaj = limbaj;
    }

    public String getTehnologie() {
        return tehnologie;
    }

    public void setTehnologie(String tehnologie) {
        this.tehnologie = tehnologie;
    }

    public String getLimba() {
        return limba;
    }

    public void setLimba(String limba) {
        this.limba = limba;
    }
}
