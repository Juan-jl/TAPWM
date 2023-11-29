/*Atividade 20*/

//Questão 1
var ObjLivro1 = {
    Titulo : "Dom Casmurro",
    Autor: "Machado de Assis"
}
 
alert(ObjLivro1.Titulo+" "+ObjLivro1.Autor)
alert(JSON.stringify(ObjLivro1))
 
 
var ObjLivro2 = {};
ObjLivro2.Titulo = "Dom Casmurro";
ObjLivro2.Autor = "Machado de Assis";
alert(JSON.stringify(ObjLivro2))
 
var ObjLivro3 = new Object();
ObjLivro3.Titulo = "Dom Casmurro";
ObjLivro3.Autor = "Machado de Assis";

alert(JSON.stringify(ObjLivro3))
 
function Livro (_Titulo, _AUtor)
{
    This.Titulo = "Dom Casmurro";
    This.Autor = "Machado de Assis";
}
 
var ObjLivro4 = new Livro ('Dom Casmurro', 'Machado de Assis');
 
class Livro1 {
    constructor(titulo, autor){
    This.Titulo = titulo;
    This.Autor = autor;
    }
}
    const ObjLivro5 = new Livro1 ("Titulo do Livro", "Autor do Livro" );
 
//Questão 2 /**//**//**//**//**//**//**//**/

var i = 1 + "2" + 3;
for (j = 0; j < 10; j++)
{
    alert(`${i}${j}`);
    if (j === 5)
    {
        break;
    }
}
//Impresso na tela: |1230|1231||1232||1233||1234||1235|

//Questão 3 /**//**//**//**//**//**//**//**/

//32, 3, 24, 2, 15, 10, 1

//Questão 4 /**//**//**//**//**//**//**//**/

// 1

//Questão 5 /**//**//**//**//**//**//**//**/

//forma 1
function ordena (n1, n2, n3)
{
    var matriz = [n1, n2, n3];
    matriz.sort(function(a,b){b-a});
    return matriz;
}


//Forma 3
function ordena3 (n1, n2, n3)
{
    let maior = Math.max (n1, n2, n3);
    let menor = Math.min (n1, n2, n3);
    let meio;
        let meio;
        if (n1 !== maior && n1 !== menor)
        {
            meio = n1;
        }
        else if (n2 !== maior && n2 !== menor)
        {
            maio = n2;
        }
        else
        {
            maio = n3;
        }
    return `${maior}${meio}${menor}`
}


//Questão 6 /**//**//**//**//**//**//**//**/

alert(objeto.descricao + " | " + objeto.codigo);

//Questão 7

console.log(j); //undefined
console.log(y); //NaN
console.log(z); //infinity
console.log(w); //null

//Questão 8

 // e) nenhuma das anteriores

//Questão 9

// 3340 3341 3342 3343 3344

//Questão 10

// c) somente 1, 2, 3, 5, 6

//Questão 11

//Body tem 1 child(s). <script> é nextSimbling de <title>.
//<h1> é child de <form>. <title> tem 1 child(s). <form> tem 4 child(s).

//Questão 12
//Window -> history, navegation, location, document -> link, image, anchor, body -> Button, input, textarea...