var contador = 0;
var ultimo = 0;
var nome;
var remove;
var senhaC = []; 
var senhaR = [];
var senhaP = [];
var audio = new Audio('audio/chamada.wav');

$(document).ready(function(){
    $('#comum').on('click', function(){
        contador++
        senhaC.push('C' + '-' + contador);
        ultimo = $(senhaC).get(-1);
        document.getElementById('SuaSenha').innerHTML= ultimo;
    });

    $('#rapido').on('click', function(){
        contador++
        senhaR.push('R' + '-' + contador);
        ultimo = $(senhaR).get(-1);
        document.getElementById('SuaSenha').innerHTML= ultimo;    
    });

    $('#prioritario').on('click', function(){
        contador++
        senhaP.push('P' + '-' + contador);
        ultimo = $(senhaP).get(-1);
        document.getElementById('SuaSenha').innerHTML= ultimo;   
    });

    $('#caixa1').on('click', function(){
        nome = 'Caixa 1';
        if(contador> 0 && senhaP.length){
            P();
            id();
        }
        else if(senhaR.length){
            R();
            id();  
        }
        else if(senhaC.length){
            C();
            id();
        }
    });

    $('#caixa2').on('click', function(){
        nome = 'Caixa 2';
        if(contador> 0 && senhaR.length){
            R();
            id();
        }
        else if(senhaP.length){
            P();
            id();
        }
        else if(senhaC.length){
            C();
            id();
        }
    });

    $('#caixa3').on('click', function(){
        nome = 'Caixa 3';
        if(contador> 0 && senhaR.length){
            R();
            id();
        }
        else if(senhaP.length){ 
            P();
            id();  
        }
        else if(senhaC.length){
            C();
            id();
        }
    });

    $('#caixa4').on('click', function(){
        nome = 'Caixa 4';
        if(contador> 0 && senhaC.length){
            C();
            id();
        }
        else if(senhaP.length){
            P();
            id();   
        }
        else if(senhaR.length){
            R();
            id();
        }
    });
});
function C(){
    audio.currentTime = 0
    audio.play();
    remove = senhaC.shift();
}
function R(){
    audio.currentTime = 0
    audio.play();
    remove = senhaR.shift();
}
function P(){
    audio.currentTime = 0
    audio.play(); 
    remove = senhaP.shift();
}
function id(){
    document.getElementById('senha').innerHTML= remove;
    document.getElementById('caixa').innerHTML= nome;
}