function registerData(list){
    var l = [];
    list.forEach(e => {

        var infoIcon ='<button type="button" class="btn" data-toggle="modal" data-target="#infoModal" data-whatever="'+e.gps+'"><i class="fas fa-search-plus basesimbol" ></i></button>';
        var modifyIcon ='<button type="button" class="btn" data-toggle="modal" data-target="#modificaModal" data-whatever="'+e.gps+'"><i class="fas fa-pencil-alt basesimbol"></i></button>';
        var deleteIcon ='<button type="button" class="btn" data-toggle="modal" data-target="#eliminaModal" data-whatever="'+e.gps+'"><i class="fas fa-times basesimbol"></i></button>';

        //il json deve contenere i dati che ti servono e ricorda che i th devono avere l'attributo name uguale al nome della prop
        //es. <th name= "type">Tipo</th> il json deve avere l'attr "type"
        if(e.sex =="Femmina")
        {
        var item = {gps: e.gps, name: e.name, type:e.type, info: infoIcon, modify:modifyIcon, delete:deleteIcon };
        }
        else
        {
        var item = {gps: e.gps, name: e.name, type:e.type, info: infoIcon, modify:"", delete:deleteIcon };
        }
        l.push(item);
    });

    return l;
}

function heartBeatLog(list){
    let l = []
    list.forEach(e => {
        var btn = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="'+e.gps+'">Dettagli</button>';
        var item = {gps: e.gps, name: e.name, type: e.type, beat: e.hrtbt, details: btn};
        l.push(item);
    });

    return l;
}