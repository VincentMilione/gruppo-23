
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

    function loadAnimal(animal, register) {
        //per ogni elemento
        pager("register", register)

        //crea una nuova riga per la tabella
        let tr = $('<tr>') 
        tr.css("display", "none")
        //appendi tutti i dati
        tr.append('<td name ="gps">'+animal.tracker+'</td>')
        tr.append('<td name ="name">'+animal.name+'</td>')
        tr.append('<td name ="type">'+animal.type+'</td>')
        tr.append('<td name ="info"><button type="button" class="btn" data-toggle="modal" data-target="#infoModal" data-whatever="'+animal.tracker+'"><i class="fas fa-search-plus"  ></i></button></td>')
        //controllo sul sesso: se "Femmina", viene data la possibilità di modifica
        if(animal.sex=="Femmina")
        tr.append('<td name ="modify"><button type="button" class="btn" data-toggle="modal" data-target="#modificaModal" data-whatever="'+animal.tracker+'"><i class="fas fa-pencil-alt"></i></button></td>')
        else
        tr.append('<td name ="modify"></td>')
        tr.append('<td name ="delete"><button type="button" class="btn" data-toggle="modal" data-target="#eliminaModal" data-whatever="'+animal.tracker+'"><i class="fas fa-times"></i></button></td>')
    
        //inserisci la riga nella tabella
        $("#register").find('tbody').append(tr);
        

        

       
    }

    