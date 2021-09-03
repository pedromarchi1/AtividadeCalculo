function juros() {
    // Declaração de variáveis
     var valor, tempo, nome, calculo;

    // Entrada de dados
    nome = $("#nome").val();
    valor = Number($("#valor").val());
    tempo = Number($("#tempo").val());

    // Processamento de Dados
    calculo = (valor*((1+0*0,3)^(tempo*12)-1))/0.03   
    arredondado = parseFloat(calculo.toFixed(2))   
    // Saída de Dados
    $(".pedro").addClass("d-none")
    $(".col-8").removeClass("d-none");
    $(".tobias").html(`Olá ${nome},juntanto ${valor} todo mês, você terá ${arredondado} em ${tempo} anos`)

  

    console.log("Valor total final é igual a "+calculo);

 
}
function voltar() {
    $("input").val("");

    $(".pedro").removeClass("d-none");
    $(".col-8").addClass("d-none");
    $(".tobias").html("...");

}