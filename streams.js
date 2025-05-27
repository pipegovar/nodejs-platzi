const fs = require('fs') ;

const readableStream = fs.createReadStream('js.txt', { encoding: 'utf8' });
const writableStrem = fs.createWriteStream('output-js.txt');

readableStream.on('data', (chunk) => {
    console.log('Chunk', chunk);
    writableStrem.write(chunk);
});

readableStream.on('end', () => {
    console.log('Termino la lectura del archivo');
    writableStrem.end();
});

readableStream.on('error', (err) => {
    console.log('Error de lectura del archivo', err); 
});

writableStrem.on('error', (err) => {
    console.log('Error en escritura del archivo', err);
});