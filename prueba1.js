let fs = require("fs");
let archivoTareas = require("./prueba2.json");
let guardarJson = (dato) => fs.writeFileSync("./prueba2.json", JSON.stringify(dato, null,4),"utf-8");

module.exports = {
    listarFor : () => {
        for (let i = 0; i < archivoTareas.length; i++) {
            console.log(`${i+1}. ${archivoTareas[i].titulo} - ${archivoTareas[i].estado}`)
        }
    },
    listarForEach: function() {
        archivoTareas.forEach((tarea,i)=> {
            console.log(`${i+1}. ${archivoTareas[i].titulo} - ${archivoTareas[i].estado}`)
        });
    },
    agregar: (titulo, estado) => {
        let tarea = {
            titulo,
            estado
        }
        archivoTareas.push(tarea);
        guardarJson(archivoTareas);
        return console.log(`- ${tarea.titulo} - ${tarea.estado}`);
    },
    filtrarPorEstado: (accion) => {
        let tareasFiltradas = archivoTareas.filter((tarea) => tarea.estado.toLowerCase() === accion.toLowerCase());
        
        tareasFiltradas.forEach((tarea,i) => {
        return console.log(`${i+1}. ${tarea.titulo} - ${tarea.estado}`);
        });
    }
}