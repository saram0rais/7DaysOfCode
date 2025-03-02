const area = prompt("Qual área você quer seguir para área de Front-End ou seguir para a área de Back-End?");
let linguagem =  "";

if(area === "Front-End"){
    linguagem = prompt("Você quer aprender React ou aprender Vue?");
}
else if (area === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou aprender Java?");
}
else {
    linguagem = prompt("Insira uma área válida!");
}