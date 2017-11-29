package Proiect731.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "traducere_raspuns")
public class TraducereRaspuns {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_traducere")
	private int idTraducere;

	@Column(name = "enunt")
	private String enunt;

	@Column(name = "limba")
	private String limba;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_raspuns", nullable = false)
	private Raspuns raspuns;

	public TraducereRaspuns() {

	}

	public TraducereRaspuns(String enunt, String limba, Raspuns idraspuns) {
		this.enunt = enunt;
		this.limba = limba;
		this.raspuns = idraspuns;
	}
	
	public int getIdTraducere() {
		return idTraducere;
	}

	public void setIdTraducere(int idTraducere) {
		this.idTraducere = idTraducere;
	}

	public String getEnunt() {
		return enunt;
	}

	public void setEnunt(String enunt) {
		this.enunt = enunt;
	}

	public String getLimba() {
		return limba;
	}

	public void setLimba(String limba) {
		this.limba = limba;
	}

	public Raspuns getRaspuns() {
		return raspuns;
	}

	public void setRaspuns(Raspuns raspuns) {
		this.raspuns = raspuns;
	}

	@Override
	public String toString() {
		return "TraducereRaspuns [idTraducere=" + idTraducere + ", enunt=" + enunt + ", limba=" + limba + ", Raspuns="
				+ raspuns + "]";
	}

}
