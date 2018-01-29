var OSinfo = require('./modules/OSinfo.js');
var event = require('events').EventEmitter;
var emitter = new event();

emitter.on('beforeCommand', function (instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command');
});
emitter.on('afterCommand', function () {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();
        var lang = process.env.lang;
        var ver = process.version;
        emitter.emit('beforeCommand', instruction);
        switch (instruction) {
            case 'exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case 'sayhello':
                process.stdout.write('hello!\n');
                break;
            case 'language':
                process.stdout.write(lang + "\n");
                break;
            case 'version':
                process.stdout.write(ver + '\n');
                break;
            case 'OSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
        ;
        emitter.emit('afterCommand');
    }
});