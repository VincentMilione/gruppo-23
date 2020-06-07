$( document ).ready(function() {
    //prendo dal registro le info da inserire nella tabella
    let list = new Register().heartBeatLog();
    
    //per ogni elemento
    list.forEach((el, index) => {
        //crea una nuova riga per la tabella
        let tr = $('<tr>');
        
        //se questo elemento è dopo il decimo della lista... non va visto
        if (index >= 10) tr.css("display", "none");

        //appendi tutti i dati
        tr.append('<td>'+el.gps+'</td>')
        .append('<td>'+el.name+'</td>')
        .append('<td>'+el.type+'</td>')
        .append('<td>'+el.beat+' bps</td>')
        .append('<td>'+el.details+'</td>');
        
        //inseriscila riga nella tabella
        $("#heart").find('tbody').append(tr);
    });

    //pager
    let nPg = (list.length/10)
    for (var i = 0; i < nPg; i++)  {
        
        var btn = i==0 ? '<li class="page-item active"><a class="page-link" href="#">'+(i+1)+'</a></li>' : '<li class="page-item"><a class="page-link" href="#">'+(i+1)+'</a></li>'
            
        $('.pagination').append(btn)
    }
});