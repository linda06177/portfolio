const dropdownButton = document.querySelector('.dropbtn');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevents event from bubbling up to the document
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
});
document.addEventListener('click', function(e) {
    if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
    }
});


HTMLCanvasElement.prototype.getContext = function(origFn){
    return function(type,attribs) {
        attribs = attribs || {};
        attribs.preserveDrawingBuffer = true;
        return origFn.call(this, type, attribs);
    };
}(HTMLCanvasElement.prototype.getContext);


var granimInstance = new Granim({
    element: '#background',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#355C7D', '#6C5B7B'],
                ['#C06C84', '#355C7D'],
                ['#6C5B7B', '#C06C84']
            ]
        }
    }
});


