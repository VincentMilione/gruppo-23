//coordinates da aggiungere

//classe animale contiene tutte le info (non c'è bisogno di getters and setters js è un po come python)
class Animal {
    constructor(tracker, name, type, bday, sex, lmilk, children, hrtbt, hrtbtH,note) {
        this.type = type;
        this.tracker= tracker;
        this.name= name;
        this.bday= bday;
        this.sex= sex;
        this.lmilk= lmilk;
        this.children= children;
        this.hrtbt= hrtbt;
        this.hrtbtH= hrtbtH;
        this.note= note;
    }
}

//class register contiene 15 animali e alcuni metodi di supporto...
class Register {
    constructor () {
        this.list =  [
            new Animal("q001w","Nuvola","Bovino",new Date(2018,9,9,0,0,0),"Femmina",12,3,70,[70,71,71,81,69,70], "Nuvola ha subito una operazione da poco. Potrebbe avere battiti alti"),
            new Animal("q002w","Pistacchio","Bovino",new Date(2017,9,6,0,0,0),"Maschio",0,0,69,[70,71,71,81,69,70],"Nessuna nota"),
            new Animal("q003w","Mandorla","Bovino",new Date(2019,9,6,0,0,0),"Femmina",9,1,71,[70,71,71,81,69,70],"Nessuna nota"),
            new Animal("q004w","Nocciola","Caprino",new Date(2018,2,6,0,0,0),"Femmina",8,1,71,[70,71,72,71,69,70],"Nessuna nota"),
            new Animal("q005w","Noce","Caprino",new Date(2017,9,2,0,0,0),"Femmina",14,3,70,[70,71,71,81,69,70],"Nessuna nota"),
            new Animal("q006w","Neve","Caprino",new Date(2020,4,6,0,0,0),"Femmina",0,0,69,[70,71,71,81,69,70],"Nessuna nota"),
            new Animal("q007w","Biancaneve","Caprino",new Date(2020,9,1,0,0,0),"Femmina",0,0,70,[70,71,71,81,69,70],"Nessuna nota"),
            new Animal("q008w","Brontolo","Caprino",new Date(2020,9,6,0,0,0),"Maschio",0,0,70,[70,71,71,81,69,70],"Nessuna nota"),
            new Animal("q009w","Mammolo","Caprino",new Date(2017,9,6,0,0,0),"Maschio",0,0,72,[70,71,71,81,69,70],"Nessuna nota"),
            new Animal("q010w","Cenerentola","Ovino",new Date(2017,9,6,0,0,0),"Femmina",13,3,70,[70,71,71,81,69,70],"Nessuna nota"),
            new Animal("q011w","Alice","Ovino",new Date(2016,9,6,0,0,0),"Femmina",19,4,73,[70,71,71,81,69,70],"Nessuna nota"),
            new Animal("q012w","Dolly","Ovino",new Date(2017,10,6,0,0,0),"Femmina",23,3,68,[70,71,71,81,69,70],"Nessuna nota"),
            new Animal("q013w","Aladino","Ovino",new Date(2016,5,1,0,0,0),"Maschio",0,0,0,[70,71,71,81,59,41],"Nessuna nota"),
            new Animal("q014w","Jasmine","Ovino",new Date(2020,9,6,0,0,0),"Femmina",0,0,70,[70,71,71,81,69,70],"Nessuna nota"),
            new Animal("q015w","Bianchina","Ovino",new Date(2020,1,6,0,0,0),"Femmina",0,0,70,[70,71,71,81,69,70],"Nessuna nota")
        ];   
    }

    //crea una lista con tutti i dati da caricare nel registro animali ({gps, name, type})
    registerData(){
        var list = [];
        this.list.forEach(e => {

            var infoIcon ='<i class="fas fa-search-plus"></i>';
            var modifyIcon ='<i class="fas fa-pencil-alt"></i>';
            var deleteIcon ='<i class="fas fa-times"></i>';
  
            //il json deve contenere i dati che ti servono e ricorda che i th devono avere l'attributo name uguale al nome della prop
            //es. <th name= "type">Tipo</th> il json deve avere l'attr "type"
            var item = {gps: e.tracker, name: e.name, type:e.type, info: infoIcon, modify:modifyIcon, delete:deleteIcon };
            list.push(item);
        });

        return list;
    }
    
    //crea una lista con tutti i dati da caricare nel registro animali ({gps, name, type, batttiti})
    heartBeatLog(){
        var list = [];
        
        this.list.forEach(e => {
            var btn = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="'+e.tracker+'">Dettagli</button>';
            var item = {gps: e.tracker, name: e.name, type: e.type, beat: e.hrtbt, details: btn};
            list.push(item);
        });

        return list;
    }

    getAnimal(gps) {
        for (var i = 0; i < this.list.length; i++) {
            if(this.list[i].tracker == gps)
                return this.list[i];
        }
        
        return undefined;
    }
}