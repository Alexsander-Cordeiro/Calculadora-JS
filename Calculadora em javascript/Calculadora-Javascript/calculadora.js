//variaveis GLOBAIS

var resultado = document.getElementById("resultado");
var num1= 0,num2=0,operacao ="";

function numeroClick(botaonumero){
    
    if(resultado.innerHTML == "0"){
        resultado.innerHTML = botaonumero.innerHTML;
    }
    else{
        resultado.innerHTML += botaonumero.innerHTML;
    }
}

function resetar(){
    resultado.innerHTML = "0";
    num1 =0;
    num2 =0;
}

function igual(){
    num2 = parseInt(resultado.innerHTML); //atribuição e conversão para número
   
    if(operacao == "+"){
        resultado.innerHTML = num1 + num2;
    }
    if(operacao == "-"){
        resultado.innerHTML = num1-num2;
    }
    if(operacao == "*"){
        resultado.innerHTML = num1*num2;
    }
    if(operacao == "/" ){
        if(n2 > 0){
        resultado.innerHTML = num1/num2;    
        }else{
         resultado.innerHTML = "Impossível a divisão por ZERO!"
        } 
        
    }
   
        
}

function clickDividir(){
    num1 = parseInt(resultado.innerHTML);
    operacao = "/";
    resultado.innerHTML="0";
}

function clickSoma(){
    
num1 = resultado.innerHTML
num1 = parseInt(num1)
operacao ="+";
resultado.innerHTML="0";
   

  
}

function clickSubtracao(){
    num1 = parseInt(resultado.innerHTML);
    operacao = "-";
    resultado.innerHTML="0";
   
}

function clickMultiplicacao(){
    num1 = parseInt(resultado.innerHTML);
    operacao = "*";
    resultado.innerHTML="0";
}

