$(document).ready(function() {
    // Mostrar/ocultar text2 al pasar el mouse por text1
    $("#text1").hover(
        function() {
            $("#text2").show(); // Mostrar text2
        },
        function() {
            $("#text2").hide(); // Ocultar text2
        }
    );

    // Agrandar la imagen al hacer clic en caja2 y volver al tamaño inicial al salir
    $("#caja2").click(function() {
        $("#img").css("width", "40%"); // Agrandar imagen al 100% (el doble de 20%)
    }).mouseleave(function() {
        $("#img").css("width", "20%"); // Volver al tamaño original
    });

    // Agrandar el texto al hacer doble clic en caja3
    $("#caja3").dblclick(function() {
        $(this).find("p").css("font-size", "2em"); // Agrandar el texto
    });
});
