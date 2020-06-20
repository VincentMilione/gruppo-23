package com.findmyflock.model;

import java.util.HashMap;

public class MockDB {

    /**
            new Animal(),
            new Animal("q003w","Mandorla","Bovino",2019,9,6),"Femmina",9,1,71,good,makeCordiHashMap( 40.695697,  14.744302},"Strada provinciale Croce","Nessuna nota"));
            new Animal("q004w","Nocciola","Caprino",2018,2,6),"Femmina",8,1,71,[70,71,72,71,69,70],makeCordiHashMap( 40.695730,  14.744270},"Strada provinciale Croce","Nessuna nota"));
            new Animal("q005w","Noce","Caprino",2017,9,2),"Femmina",14,3,70,good,makeCordiHashMap( 40.695728,  14.744249},"Strada provinciale Croce","Nessuna nota"));
            new Animal("q006w","Neve","Caprino",2020,4,6),"Femmina",0,0,69,good,makeCordiHashMap( 40.695759,  14.744236},"Strada provinciale Croce","Nessuna nota"));
            new Animal("q007w","Biancaneve","Caprino",2020,9,1),"Femmina",0,0,70,good,makeCordiHashMap( 40.695787,  14.744223},"Strada provinciale Croce","Nessuna nota"));
            new Animal("q008w","Brontolo","Caprino",2020,9,6),"Maschio",0,0,70,good,makeCordiHashMap( 40.695788,  14.744195},"Strada provinciale Croce","Nessuna nota"));
            new Animal("q009w","Mammolo","Caprino",2017,9,6),"Maschio",0,0,72,good, makeCordiHashMap( 40.695803,  14.744192},"Strada provinciale Croce","Nessuna nota"));
            new Animal("q010w","Cenerentola","Ovino",2017,9,7),"Femmina",13,3,70,good,makeCordiHashMap( 40.695766,  14.744184},"Strada provinciale Croce","Nessuna nota"));
            new Animal("q011w","Alice","Ovino",2016,9,6),"Femmina",19,4,73,good,makeCordiHashMap( 40.696517,  14.744356},"Strada provinciale Croce","Nessuna nota"));
            new Animal("q012w","Dolly","Ovino",2017,10,8),"Femmina",23,3,68,good,makeCordiHashMap( 40.696459,  14.744342},"Strada provinciale Croce","Nessuna nota"));
            new Animal("q013w","Aladino","Ovino",2016,5,1),"Maschio",0,0,0,[70,71,71,81,59,41],makeCordiHashMap( 40.696491,  14.744370},"Strada provinciale Croce","Nessuna nota"));
            new Animal("q014w","Jasmine","Ovino",2020,9,6),"Femmina",0,0,70,good,makeCordiHashMap( 40.696808,  14.744145},"Strada provinciale Croce","Nessuna nota"));
            new Animal("q015w","Bianchina","Ovino",2020,1,6),"Femmina",0,0,70,good,makeCordiHashMap( 40.696774,  14.744154},"Strada provinciale Croce","Nessuna nota") 
    */
    public MockDB() {
        list = new java.util.ArrayList<Animal> ();
        int[] good = {70,71,71,81,69,70};
        int[] bad = {70,71,71,81,90,95};

        list.add(new Animal("q001w","Nuvola","Bovino","9/9/2018","Femmina",12,3,70, bad, makeCordiHashMap(40.690140, 14.714848),"Via Antonio Orilia","Nuvola ha subito una operazione da poco. Potrebbe avere battiti alti"));
        list.add(new Animal("q002w","Pistacchio","Bovino","6/9/2017","Maschio",0,0,69,good, makeCordiHashMap(40.693781, 14.757769),"Via del Risorgimento","Nessuna nota"));
        list.add(new Animal("q003w","Mandorla","Bovino","6/9/2019","Femmina",9,1,71,good, makeCordiHashMap(40.695697, 14.744302),"Strada provinciale Croce","Nessuna nota"));
        list.add(new Animal("q004w","Nocciola","Caprino","2/6/2018","Femmina",8,1,71,good,makeCordiHashMap(40.695730, 14.744270),"Strada provinciale Croce","Nessuna nota"));
        list.add(new Animal("q005w","Noce","Caprino","9/2/2017","Femmina",14,3,70,good,makeCordiHashMap(40.695728, 14.744249),"Strada provinciale Croce","Nessuna nota"));
        list.add(new Animal("q006w","Neve","Caprino","4/6/2020","Femmina",0,0,69,good,makeCordiHashMap(40.695759, 14.744236),"Strada provinciale Croce","Nessuna nota"));
        list.add(new Animal("q007w","Biancaneve","Caprino","9/1/2020","Femmina",0,0,70,good,makeCordiHashMap(40.695787, 14.744223),"Strada provinciale Croce","Nessuna nota"));
        list.add(new Animal("q008w","Brontolo","Caprino","2/1/2020","Maschio",0,0,70,good,makeCordiHashMap(40.695788, 14.744195),"Strada provinciale Croce","Nessuna nota"));
        list.add(new Animal("q009w","Mammolo","Caprino","9/6/2017","Maschio",0,0,72,good, makeCordiHashMap( 40.695803, 14.744192),"Strada provinciale Croce","Nessuna nota"));
        list.add(new Animal("q010w","Cenerentola","Ovino","7/9/2017","Femmina",13,3,70,good,makeCordiHashMap( 40.695766, 14.744184),"Strada provinciale Croce","Nessuna nota"));
        list.add(new Animal("q011w","Alice","Ovino","6/9/2016","Femmina",19,4,73,good,makeCordiHashMap( 40.696517, 14.744356),"Strada provinciale Croce","Nessuna nota"));
        list.add(new Animal("q012w","Dolly","Ovino","8/10/2017","Femmina",23,3,68,good,makeCordiHashMap( 40.696459, 14.744342),"Strada provinciale Croce","Nessuna nota"));
        list.add(new Animal("q013w","Aladino","Ovino","5/1/2016","Maschio",0,0,0,good,makeCordiHashMap( 40.696491, 14.744370),"Strada provinciale Croce","Nessuna nota"));
        list.add(new Animal("q014w","Jasmine","Ovino","9/6/2020","Femmina",0,0,70,good,makeCordiHashMap( 40.696808, 14.744145),"Strada provinciale Croce","Nessuna nota"));
        list.add(new Animal("q015w","Bianchina","Ovino","1/6/2020","Femmina",0,0,70,good,makeCordiHashMap( 40.696774, 14.744154),"Strada provinciale Croce","Nessuna nota"));

    }

    public void remove (String gps) {
        list.remove(new Animal(gps));
    }

    private HashMap<String, Double> makeCordiHashMap (Double lat, Double lng) {
        HashMap <String, Double> map = new HashMap <String, Double> ();

        map.put ("lat", lat);
        map.put("lng", lng);

        return map;
     }

    public void addAnimal (Animal e) {
        list.add(e);
    }

    public Animal getAnimal (String gps) {
        return list.get(list.indexOf(new Animal(gps)));
    }

    public java.util.List<Animal> getList () {
        return list;
    }

    private static java.util.List<Animal> list;
}