var OSinfo = require('./modules/OSinfo.js');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        var lang = process.env.lang;
        var ver = process.version;
        switch(instruction) {
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
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});