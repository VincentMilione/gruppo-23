package com.findmyflock.model;

import java.util.HashMap;

public class Animal {
    public Animal(String gps) {
        this.setGps(gps);
    }

    public Animal() {
    }

    public Animal(String gps, String name, String type, String bday, String sex, int lmilk, int children, int hrtbt,
            int[] hrtbtH, HashMap<String, Double> cordinate, String address, String note) {
        setGps(gps);
        setAddress(address);
        setBday(bday);
        setChildren(children);
        setCordinate(cordinate);
        setHrtbt(hrtbt);
        setHrtbtH(hrtbtH);
        setLmilk(lmilk);
        setName(name);
        setNote(note);
        setSex(sex);
        setType(type);
    }

    @Override
    public boolean equals(Object obj) {
        if(this == obj)
            return true;
        if(obj == null)
            return false;
        if(getClass() != obj.getClass())
            return false;
        if (gps != null) {
            Animal o = (Animal) obj;
            return gps.equals(o.gps);
        }
        return false;
    }

    // name, type, bday, sex, lmilk, children, hrtbt, hrtbtH, cordinate,address,note
    public String getGps() {
        return gps;
    }

    public void setGps(String gps) {
        this.gps = gps;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBday() {
        return this.bday;
    }

    public void setBday(String bday) {
        this.bday = bday;
    }

    public String getSex() {
        return this.sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public int getLmilk() {
        return this.lmilk;
    }

    public void setLmilk(int lmilk) {
        this.lmilk = lmilk;
    }

    public int getChildren() {
        return this.children;
    }

    public void setChildren(int children) {
        this.children = children;
    }

    public int getHrtbt() {
        return this.hrtbt;
    }

    public void setHrtbt(int hrtbt) {
        this.hrtbt = hrtbt;
    }

    public int[] getHrtbtH() {
        return this.hrtbtH;
    }

    public void setHrtbtH(int[] hrtbtH) {
        this.hrtbtH = hrtbtH;
    }

    public HashMap<String,Double> getCordinate() {
		return this.cordinate;
	}

    public void setCordinate(HashMap<String,Double> cordinate) {
		this.cordinate = cordinate;
	}

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNote() {
        return this.note;
    }

    public void setNote(String note) {
        this.note = note;
    }
    
    private String gps;
    private String name;
    private String type;
    private String bday;
    private String sex;
    private int lmilk;
    private int children;
    private int hrtbt;
    private int[] hrtbtH;
    private HashMap<String, Double> cordinate;
    private String address;
    private String note;

}