package com.example.courses.entities;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_course")
public class Course implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String image;
	private String title;
	private String createdBy;
	private String starNote;
	private String popularity;
	private String valueMoney;
	private String classification;
	
	public Course() {
		
	}

	public Course(Long id, String image, String title, String createdBy, String starNote, String popularity, String valueMoney, String classification) {
		super();
		this.id = id;
		this.image = image;
		this.title = title;
		this.createdBy = createdBy;
		this.starNote = starNote;
		this.popularity = popularity;
		this.valueMoney = valueMoney;
		this.classification = classification;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getStarNote() {
		return starNote;
	}

	public void setStarNote(String starNote) {
		this.starNote = starNote;
	}

	public String getPopularity() {
		return popularity;
	}

	public void setPopularity(String popularity) {
		this.popularity = popularity;
	}

	public String getValueMoney() {
		return valueMoney;
	}

	public void setValueMoney(String valueMoney) {
		this.valueMoney = valueMoney;
	}

	public String getClassification() {
		return classification;
	}

	public void setClassification(String classification) {
		this.classification = classification;
	}

	public Long getId() {
		return id;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, image);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Course other = (Course) obj;
		return Objects.equals(id, other.id) && Objects.equals(image, other.image);
	}
}
