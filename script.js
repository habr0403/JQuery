(document).ready(function() {
    $('box').hover(
        function() {
            
            $(this).animate({
                width: '200px',
                height: '200px',
                opacity: 45
            }, 800, 'easeOutBounce'); 
        },
        function() {
            
            $(async (params) => {
                
            }).animate({
                width: '100px',
                height: '100px',
                opacity: 0.8
            }, 800, 'easeInElastic'); 
        }
    );
});
