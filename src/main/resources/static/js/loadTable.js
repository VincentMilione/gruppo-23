
    //prendo dal registro le info da inserire nella tabella
    function pager (tbid, list) {
        //resettare il coso della paginazione
        $('.page-item').not('.disabled').remove()
      
        let nPg = (list.length/10)
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
        pager(tbId, list)

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
