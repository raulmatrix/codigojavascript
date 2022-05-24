var nombres = ["Diana","Jose","Alicia","Osvaldo"];
nombres.push("Carlos");
nombres.push("Rita");

//primera forma
/*
for(var i=0;i<nombres.length;i++){
    console.log("Hola,"+nombres[i]);
    console.log(`Hola, ${nombres[i]}`);
}*/

//segunda forma

function saludar(estudiante){
    console.log(`Hola, ${estudiante}`);
}

//foreach
for(var estudiantes of nombres){
    saludar(estudiantes);
}
