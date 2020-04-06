$(document).ready(function() {
    alert("PLease wait while your order is being processed...");
});   /*making the alert so whenever the page loads it will display that specific message*/


$('document').ready(function() {


        var empty = $('ul li.empty');

        $('.btn-add').on('click', function(e) {
            e.preventDefault();
            var carinho = $('#shopping-cart ul');
            var name = $(this).siblings('h3').text();
            var price = parseInt($(this).siblings('.price').text());
            var thumb = $(this).siblings('img').attr('src');



            carinho.prepend("<li class='iten'>" + "<span class='name'>" + name + "</span> <span class='price'>" + price + "</span> <a href='' class='btn-close'></a></li>");
            /*displaying the info in the shopping cart */

            if (empty) {
                empty.hide();
            }


            if ($('#shopping-cart ul li.iten').length == 2) {
                $('#shopping-cart #info').append("<a href='' class='btn-limpar-car'>x</a>");
            }


            var itenAdd = $('ul li.iten').length;
            $('#itens strong').text(itenAdd);



            var cakeTOT = parseInt($('#cakeTOT strong').text());
            $('#cakeTOT strong').text(cakeTOT + price);
        });
        /*the cakeTOT of the cakes and the prices gets added*/


        $(this).on("click", ".btn-close", function(e) {
            e.preventDefault();
            /*so the buttons you click only that specific button you click will add the name and the price*/



            var itenAdd = $('ul li.iten').length - 1;
            $('#itens strong').text(itenAdd--);


            var cakeTOT = parseInt($('#cakeTOT strong').text());
            var priceRemove = parseInt($(this).siblings('.price').text());
            $('#cakeTOT strong').text(cakeTOT - priceRemove);


            $(this).parent().remove();
            if ($('#shopping-cart ul li').length == 1) {
                empty.show();
            }


            if ($('#shopping-cart ul li').length == 2) {
                $('.btn-limpar-car').remove();
            }     /*removing whatever you have inside the cart */

        });

        $(this).on("click", ".btn-limpar-car", function(e) {
            e.preventDefault();
            $('#cakeTOT strong').text('0');
            $('#itens strong').text('0');
            $('ul li.iten').remove();
            $(this).remove();
            empty.show();
        });
    });         /*this is making the remove button so you can remove whatever you want*/
