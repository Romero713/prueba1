let process = require("process");
let archivo = require("./prueba1");

let accion = process.argv[2];

switch (accion) {
    case 'listar':
        console.log('-------------------');
        console.log("LISTADO DE TAREAS");
        console.log('-------------------');
        archivo.listarFor();
        //Hola Jeanne! En esta parte me devuelve un undefined pero no entiendo donde se origina. Espero el feedback para poder entender más sobre esto, y saber donde se originaba el error. Muchas gracias (:
        break;
    case 'agregar':
        let titulo = process.argv[3]
        let estado = process.argv[4]
        archivo.agregar(titulo, estado);
        break;
    case undefined:
        console.log('-------------------');
        console.log('Atención - Tienes que pasar una acción.');
        console.log('Las acciones disponibles son: listar o agregar');
        console.log('-------------------');
        break;
    default:
        console.log('-------------------');
        console.log('No entiendo que quieres hacer.');
        console.log('Las acciones disponibles son: listar o agregar');
        console.log('-------------------');
        break;
}