$(document).ready(function() {
    $('form').on('submit' , function(e) {
        e.preventDefault();

        const nomeDaTarefa = $('#tarefa-nome').val();

        const novoitem = $('<li></li>').text(nomeDaTarefa);
        $('#lista-tarefas').append(novoitem);

        $('#tarefa-nome').val('');
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('tarefa-concluida');
    });
});