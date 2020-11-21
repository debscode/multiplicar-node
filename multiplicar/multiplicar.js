//requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('======================='.green);
    console.log(`Tabla del ${base} al ${limite}`.green);
    console.log('======================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }    
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base enviada ${base} no es un número`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/taba-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
