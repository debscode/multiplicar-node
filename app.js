const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.rainbow(archivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;
}