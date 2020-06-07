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
        .append('<td>blabla</td>');
        
        //inseriscila riga nella tabella
        $("#heart").find('tbody').append(tr);
    });
});