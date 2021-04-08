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


setEqualHeight($(".block-step--div > .block-step"));


/*** плавная прокрутка якорей ***/
$('a[href^="#"]').click(function(){ // #1
let anchor = $(this).attr('href');  // #2
$('html, body').animate({           // #3
scrollTop:  $(anchor).offset().top  // #4
}, 600);                            // #5
});


/*** валидация формы ***/
$("#btn_callback").click(function() { 
    let name = $("#name-callback");
    let phone =$("#phone-callback");

    if (name.val() == '') {
        name.css('border', '2px solid #F38585');
    } 

    name.on('blur', function() {
        name.css('border', 'none');
    });

    if (phone.val() == '') {
        phone.css('border', '2px solid #F38585');
    } 

    phone.on('blur', function() {
        phone.css('border', 'none');
    });
    
    if (name.val() != '' && phone.val() != '') {
        $("#btn_callback").prop("disabled", true);
        $("#form_callback").fadeOut(200);
        $(".block-success").fadeIn(600);
        // $.ajax({
        //     type: 'POST',
        //     url: 'ajax/validate.php',
        //     data: $("#form_callback").serialize(),
        //     success: function(data) {
        //         console.log(data);
        //         if (data == 'success') {
        //             $("#form_callback").fadeOut(200);
        //             $(".block-success").fadeIn(600);
        //         }
        //     }        
        // });
    }

});

// let btn = document.querySelector("#btn_callback");
// let name = document.querySelector("#name-callback").value;
// let phone = document.querySelector("#phone-callback").value;

//  /*** функция Запроса на сервер ***/
// async function Validate(url = '', data) {
//     const response = await fetch(url, {
//         method: 'POST',
//         body: data
//     });

//     return await response.json();
// }


// btn.onclick = function() {
//     let arrData = [];
//     Validate('ajax/validate.php', )
// };

/*** Маска для поля phone-callback ***/
$(function(){
     $("#phone-callback").mask("+999 (99) 999-99-99");
});

});