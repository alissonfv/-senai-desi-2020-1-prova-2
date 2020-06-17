$(document).ready(function() {	
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000', {reverse: true});
    $('#data_nascimento').mask('00/00/0000', {reverse: true});
    $('#salario').mask('R$#.##0,00');
});