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
                ['#2a2b47', '#9c1057'],
                ['#cc095d', '#3b1d4a'],
                ['#6b1650', '#0a2344']
            ]
        }
    }
});


