$(document).ready(function() {

    /*** блоки товаров одинаковой высоты ***/
    function setEqualHeight(columns)
    {
        var tallestcolumn = 0;
        columns.each(
        function()
        {
        currentHeight = $(this).height();
        if(currentHeight > tallestcolumn)
        {
        tallestcolumn = currentHeight;
        }
        }
        );
        columns.height(tallestcolumn);
    }


//setEqualHeight($(".cont > div"));


/*** плавная прокрутка якорей ***/
$('a[href^="#"]').click(function(){ // #1
let anchor = $(this).attr('href');  // #2
$('html, body').animate({           // #3
scrollTop:  $(anchor).offset().top  // #4
}, 600);                            // #5
});


});