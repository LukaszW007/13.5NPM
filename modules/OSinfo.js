var os = require('os');
var time = require('./timeFormatter.js');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();

    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }

    console.log(colors.green('System:'), type);
    console.log('Release:'.red, release);
    console.log('CPU model: '.blue, cpu);
    console.log('Uptime: ~',time.formattedTime(uptime) );
    console.log('User name:'.rainbow, userInfo.username);
    console.log('Home dir:'.underline.red, userInfo.homedir);
}

exports.print = getOSinfo;