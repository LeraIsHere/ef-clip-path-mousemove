var clip = document.querySelector('.clip');

    clip.addEventListener('mousemove', function(e){
        var x = e.pageX;
        var y = e.pageY;
        clip.style.clipPath = 'circle(200px at ' + x + 'px ' + y + 'px)';
    });