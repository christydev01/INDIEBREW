var open = document.getElementById ('open');
var close = document.getElementById ('close');
var list = document.getElementById ('list')


open.addEventListener('click', function(){
    close.style.display = 'block';
    open.style.display = 'none';
    list.style.display = 'block'
})

function x() {
    close.style.display = 'none';
    open.style.display = 'block';
    list.style.display = 'none'
}