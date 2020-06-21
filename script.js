var form = document.getElementById('formulario');
var input = document.getElementById('input');
const remote = require('electron').remote;

form.addEventListener('submit', function(e) {
    const window = remote.getCurrentWindow();

    window.loadURL(input.value)

    e.preventDefault();
});