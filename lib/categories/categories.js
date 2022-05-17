$(document).ready(function() {
    $('#tabela').empty();
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: '/desafio/readcat',
        success: function(dados) {
            for (var i = 0; dados.length > i; i++) {
                $('#tabela').append('<tr><td>' + dados[i].name + '</td><td>' + dados[i].code + 
                '</td><td id ="delete"><button type="button" class="teste" id='+dados[i].id +' value='+dados[i].id +'>Apagar</button></td></tr>');
            }
        }
    });

    $(document).on('click', "#delete", function(event) {
        event.preventDefault();
        var dados = $(".teste").val();

        console.log(dados);

        $.ajax({
            url: '/desafio/catdelete',
            type: 'POST',
            dataType: 'json',
            data: {id: dados},
            success: function(data) {
                location.reload();
            }
        });
        location.reload();
    });

});