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
                ['#9c1057', '#7209b7'],
                ['#4e5291', '#2a4891'],
                ['#081a44', '#0d1530']
            ]
        }
    }
});


