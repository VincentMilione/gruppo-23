$( document ).ready(function() {
    let list = new Register().heartBeatLog();
    
    list.forEach((el, index) => {
        let tr = $('<tr>');
        
        if (index >= 10) tr.css("display", "none");

        tr.append('<td>'+el.gps+'</td>')
        .append('<td>'+el.name+'</td>')
        .append('<td>'+el.type+'</td>')
        .append('<td>'+el.beat+' bps</td>')
        .append('<td>blabla</td>');
        
        $("#heart").find('tbody').append(tr);
    });
});