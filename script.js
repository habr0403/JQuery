(document).ready(function() {
    $('box').hover(
        function() {
            
            $(this).animate({
                width: '200px',
                height: '200px',
                opacity: 1
            }, 800, 'easeOutBounce'); 
        },
        function() {
            
            $(this).animate({
                width: '100px',
                height: '100px',
                opacity: 0.8
            }, 800, 'easeInElastic'); 
        }
    );
});
