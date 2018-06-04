package com.example.myapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
public class Widget {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String text;
	private String widgetType;
	private int size;
	private String name;
	private String link;
	private int listType;
	@ManyToOne
	private Lesson lesson;
	
	public Lesson getLesson() {
		return lesson;
	}
	public void setLesson(Lesson lesson) {
		this.lesson = lesson;
	}
	public String getWidgetType() {
		return widgetType;
	}
	public void setWidgetType(String widgetType) {
		this.widgetType = widgetType;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
//	public int getSize() {
//		return size;
//	}
//	public void setSize(int size) {
//		this.size = size;
//	}
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public String getLink() {
//		return link;
//	}
//	public void setLink(String link) {
//		this.link = link;
//	}
//	public int getListType() {
//		return listType;
//	}
//	public void setListType(int listType) {
//		this.listType = listType;
//	}
//	public int getIndex() {
//		return index;
//	}
//	public void setIndex(int index) {
//		this.index = index;
//	}
	
	
}

