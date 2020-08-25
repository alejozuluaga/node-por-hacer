const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];
let comando2 = argv._[1];
switch (comando) {
    case 'crear':

        let tarea = porHacer.crear('hola3');
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('---por hacer---'.green);

            console.log(tarea.descripcion);
            console.log(tarea.completado);

        }
        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar("hola3", true);
        console.log(actualizado);



        break;
    case 'borrar':

        let _borrar = porHacer.borrar("hola3");
        console.log(_borrar);

        break;
    default:
        console.log('Comando no es reconocido');

}

console.log(argv);