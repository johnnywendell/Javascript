function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>OBRIGADO POR CLICAR<b>";
    //console.log(document.getElementById("agradecimento"))
}
function redirecionar(){
    //window.open("https://lichess.org")
    window.location.href = "https://lichess.org"
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passar";
    elemento.innerHTML = "obrigado por passar";
    //alert("trocar texto")
};
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
    //alert("trocar texto")
};
function funcaoChange(elemento){
    console.log(elemento.value);
}
//function soma(n1, n2){
//    return n1 + n2;
//}
//alert(soma(5, 10));

//var count;
//for (count = 0; count < 5; count + 1){
//    alert(count);
//}

//var count = 0;
//while (count < 5){
//    alert(count);
//    count = count + 1
//}

//var idade = prompt("Qual sua idade");
//if (idade > 18){
//    alert("maior de idade")
//}else{
//    alert("menor de idade")
//}

//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta.cor);

//var lista = ["maça", "pera", "uva"];
//lista.push("laranja");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "johnny";
//var idade = 29;
//alert (nome + " tem " + idade + " anos");