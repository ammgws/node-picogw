// PicoGW = Minimalist's Home Gateway
const controller = require('./lib/controller');
const PubSub = require('./lib/PubSub').PubSub;
const log = console.log;

// Support for termux
if( process.platform == 'android' )
	Object.defineProperty(process, "platform", { get: function () { return 'linux'; } });

// Parse command line
var cmd_opts = require('opts');
cmd_opts.parse([
    {
        'short': 'p',
        'long': 'port',
        'description': 'Web API port number',
        'value': true,
        'required': false
    },
    {
        'long': 'pipe',
        'description': 'path of named pipes without postfix (_r or _w). The server is blocked until the pipe client is connected.',
        'value': true,
        'required': false
    },
],true);


controller.init({PubSub:PubSub,cmd_opts:cmd_opts}).then(re=>{
    log('Plugins have been initialized.') ;
}).catch(e => {
    console.error(e);
})

log('PicoGW started.') ;
