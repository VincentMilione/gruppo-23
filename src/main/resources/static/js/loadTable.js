function registerData(list){
    var l = [];
    list.forEach(e => {

        var infoIcon ='<button type="button" class="btn" data-toggle="modal" data-target="#infoModal" data-whatever="'+e.gps+'"><i class="fas fa-search-plus"  ></i></button>';
        var modifyIcon ='<button type="button" class="btn" data-toggle="modal" data-target="#modificaModal" data-whatever="'+e.gps+'"><i class="fas fa-pencil-alt"></i></button>';
        var deleteIcon ='<button type="button" class="btn" data-toggle="modal" data-target="#eliminaModal" data-whatever="'+e.gps+'"><i class="fas fa-times"></i></button>';

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
    //prendo dal registro le info da inserire nella tabella
    function pager (tbid, length) {
        //resettare il coso della paginazione
        $('.page-item').not('.disabled').remove()
      
        let nPg = (length/10)
        for (var i = 0; i < nPg; i++)  {
          var btn = i==0 ? '<li class="page-item active"><a class="page-link" href="#">'+(i+1)+'</a></li>' : '<li class="page-item"><a class="page-link" href="#">'+(i+1)+'</a></li>'
          $('.pagination').append(btn)
          
        }
      
        $('.page-item').not('.disabled').click(function(){
            let num = parseInt($(this).find("a").html())
        
            $('.page-item').removeClass('active')
            $(this).addClass('active')
            $('#'+tbid+' tbody tr:visible').hide()
            $('#'+tbid+' tbody tr').slice((num-1)*10,(num*10)-1).show()
          })
      }
    
    function loader(tbId, list) {
        //per ogni elemento
        let cols = $('#'+tbId +' thead th')
        pager(tbId, list.length)

        list.forEach((el, index) => {
            //crea una nuova riga per la tabella
            let tr = $('<tr>')            
            //se questo elemento è dopo il decimo della lista... non va visto
            if (index >= 10) tr.css("display", "none")

            //appendi tutti i dati
            cols.each(function () {
                var attr = $(this).attr("name")
             
                tr.append('<td name ="'+attr+'">'+el[attr]+'</td>')
            });
            
            //inserisci la riga nella tabella
            $("#"+tbId).find('tbody').append(tr);
        });

        

       
    }


    