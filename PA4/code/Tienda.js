$(document).ready(function(){
    $(".buttoncomprar").click(function(){
        var juego=$(this).data("juego");
        var precio=$(this).data("precio");
        $("#nombreJuego").text(juego);
        $("#precioJuego").text(precio);
        $("#confirmacionCompra").fadeIn();
    });
    $("#cancelarCompra").click(function(){
        $("#confirmacionCompra").fadeOut();
    });
    $("#aceptarCompra").click(function(){
        alert("¡Compra realizada con éxito!");
        $("#confirmacionCompra").fadeOut();
    });
});

$(document).ready(function(){
    $("#ofertas").hide();
    $("#btnOfertas").click(function(){
        $("#ofertas").fadeToggle(500);
        if($(this).text()=="VER OFERTAS"){
            $(this).text("OCULTAR OFERTAS");
        }
        else{
            $(this).text("VER OFERTAS");
        }
    });
});

$(document).ready(function(){
    $(".btnDeseados").click(function(){
        $("#mensajeDeseados")
            .stop(true,true)
            .fadeIn(300)
            .delay(1800)
            .fadeOut(300);
    });
});