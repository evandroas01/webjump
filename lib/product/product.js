$(document).ready(function() {
    $('#tabelaprod').empty(); //Limpando a tabela
    $.ajax({
        type: 'post', //Definimos o método HTTP usado
        dataType: 'json', //Definimos o tipo de retorno
        url: '/desafio/readprod', //Definindo o arquivo onde serão buscados os dados
        success: function(dados) {
            console.log(dados);
            for (var i = 0; dados.length > i; i++) {
                //Adicionando registros retornados na tabela
                $('#tabelaprod').append('<tr><td>' + dados[i].name + '</td><td>' + dados[i].sku + '</td><td>' + dados[i].price + '</td><td>' + dados[i].amount + '</td><td>' + dados[i].categories + 
                '</td><td id ="delete"><button type="button" class="teste" id='+dados[i].id +' value='+dados[i].id +'>Apagar</button></td></tr>');
            }
        }
    });


    $(document).on('click', "#delete", function(event) {
        event.preventDefault();
        var dados = $(".teste").val();

        console.log(dados);

        $.ajax({
            url: '/desafio/proddelete',
            type: 'POST',
            dataType: 'json',
            data: {id: dados},
            success: function(data) {
                location.reload();
            }
        });
        // location.reload();
    });

});