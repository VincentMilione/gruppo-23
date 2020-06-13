//coordinates da aggiungere

//classe animale contiene tutte le info (non c'è bisogno di getters and setters js è un po come python)
class Animal {
    constructor(tracker, name, type, bday, sex, lmilk, children, hrtbt, hrtbtH, cordinate,note) {
        this.type = type;
        this.tracker= tracker;
        this.name= name;
        this.bday= bday;
        this.sex= sex;
        this.lmilk= lmilk;
        this.children= children;
        this.hrtbt= hrtbt;
        this.hrtbtH= hrtbtH;
        this.cordinate=cordinate;
        this.note= note;
    }
}

//class register contiene 15 animali e alcuni metodi di supporto...
class Register {
    constructor () {
        this.list =  [
            new Animal("q001w","Nuvola","Bovino",new Date(2018,9,9).toDateString(),"Femmina",12,3,70,[70,71,71,81,69,70], {lat: 40.690140, lng: 14.714848},"Nuvola ha subito una operazione da poco. Potrebbe avere battiti alti"),
            new Animal("q002w","Pistacchio","Bovino",new Date(2017,9,6).toDateString(),"Maschio",0,0,69,[70,71,71,81,69,70],{lat: 40.693781, lng: 14.757769},"Nessuna nota"),
            new Animal("q003w","Mandorla","Bovino",new Date(2019,9,6).toDateString(),"Femmina",9,1,71,[70,71,71,81,69,70],{lat: 40.695697, lng: 14.744302},"Nessuna nota"),
            new Animal("q004w","Nocciola","Caprino",new Date(2018,2,6).toDateString(),"Femmina",8,1,71,[70,71,72,71,69,70],{lat: 40.695730, lng: 14.744270},"Nessuna nota"),
            new Animal("q005w","Noce","Caprino",new Date(2017,9,2).toDateString(),"Femmina",14,3,70,[70,71,71,81,69,70],{lat: 40.695728, lng: 14.744249},"Nessuna nota"),
            new Animal("q006w","Neve","Caprino",new Date(2020,4,6).toDateString(),"Femmina",0,0,69,[70,71,71,81,69,70],{lat: 40.695759, lng: 14.744236},"Nessuna nota"),
            new Animal("q007w","Biancaneve","Caprino",new Date(2020,9,1).toDateString(),"Femmina",0,0,70,[70,71,71,81,69,70],{lat: 40.695787, lng: 14.744223},"Nessuna nota"),
            new Animal("q008w","Brontolo","Caprino",new Date(2020,9,6).toDateString(),"Maschio",0,0,70,[70,71,71,81,69,70],{lat: 40.695788, lng: 14.744195},"Nessuna nota"),
            new Animal("q009w","Mammolo","Caprino",new Date(2017,9,6).toDateString(),"Maschio",0,0,72,[70,71,71,81,69,70], {lat: 40.695803, lng: 14.744192},"Nessuna nota"),
            new Animal("q010w","Cenerentola","Ovino",new Date(2017,9,7).toDateString(),"Femmina",13,3,70,[70,71,71,81,69,70],{lat: 40.695766, lng: 14.744184},"Nessuna nota"),
            new Animal("q011w","Alice","Ovino",new Date(2016,9,6).toDateString(),"Femmina",19,4,73,[70,71,71,81,69,70],{lat: 40.696517, lng: 14.744356},"Nessuna nota"),
            new Animal("q012w","Dolly","Ovino",new Date(2017,10,8).toDateString(),"Femmina",23,3,68,[70,71,71,81,69,70],{lat: 40.696459, lng: 14.744342},"Nessuna nota"),
            new Animal("q013w","Aladino","Ovino",new Date(2016,5,1).toDateString(),"Maschio",0,0,0,[70,71,71,81,59,41],{lat: 40.696491, lng: 14.744370},"Nessuna nota"),
            new Animal("q014w","Jasmine","Ovino",new Date(2020,9,6).toDateString(),"Femmina",0,0,70,[70,71,71,81,69,70],{lat: 40.696808, lng: 14.744145},"Nessuna nota"),
            new Animal("q015w","Bianchina","Ovino",new Date(2020,1,6).toDateString(),"Femmina",0,0,70,[70,71,71,81,69,70],{lat: 40.696774, lng: 14.744154},"Nessuna nota")
        ];   
    }
//, 
    //crea una lista con tutti i dati da caricare nel registro animali ({gps, name, type})
    registerData(){
        var list = [];
        this.list.forEach(e => {

            var infoIcon ='<button type="button" class="btn" data-toggle="modal" data-target="#infoModal" data-whatever="'+e.tracker+'"><i class="fas fa-search-plus"  ></i></button>';
            var modifyIcon ='<button type="button" class="btn" data-toggle="modal" data-target="#modificaModal" data-whatever="'+e.tracker+'"><i class="fas fa-pencil-alt"></i></button>';
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

    update(gps, milkLitres, newChildren) {
        for (var i = 0; i < this.list.length; i++) {
            if(this.list[i].tracker == gps)
            {
                this.list[i].lmilk=milkLitres
                this.list[i].children=newChildren;
            }
        }
    }
}