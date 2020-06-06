$( document ).ready(function() {
    let list = new Register().heartBeatLog();
    
    list.forEach(el => {
        let tr = $('<tr>');
        
        tr.append('<td>'+el.gps+'</td>');
        tr.append('<td>'+el.name+'</td>');
        tr.append('<td>'+el.type+'</td>');
        tr.append('<td>'+el.beat+' bps</td>');
        tr.append('<td>blabla</td>');
        tr.css("visibility", "hidden");

        $("#heart").find('tbody').append(tr);
    });

    $('#heart tr').each(function(){
        $(this).css("visibility", "visible");
    });
    
});