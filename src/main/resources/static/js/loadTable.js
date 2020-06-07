
    //prendo dal registro le info da inserire nella tabella
    
    function loader(tbId, list) {
        //per ogni elemento
        let cols = $('#'+tbId +' thead th')

        list.forEach((el, index) => {
            //crea una nuova riga per la tabella
            let tr = $('<tr>')            
            //se questo elemento è dopo il decimo della lista... non va visto
            if (index >= 10) tr.css("display", "none")

            //appendi tutti i dati
            cols.each(function () {
                var attr = $(this).attr("name")
                tr.append('<td>'+el[attr]+'</td>')
            });
            
            //inserisci la riga nella tabella
            $("#heart").find('tbody').append(tr);
            $("#register").find('tbody').append(tr);
        });

        //pager
        let nPg = (list.length/10)
        for (var i = 0; i < nPg; i++)  {
            
            var btn = i==0 ? '<li class="page-item active"><a class="page-link" href="#">'+(i+1)+'</a></li>' : '<li class="page-item"><a class="page-link" href="#">'+(i+1)+'</a></li>'
                
            $('.pagination').append(btn)
        }
    }
