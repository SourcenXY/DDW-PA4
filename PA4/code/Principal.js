$(document).ready(function(){
    var imagenes = [
        "Css/img/summer.jfif",
        "Css/img/fortnite.jfif",
        "Css/img/rocket.jfif",
        "Css/img/rdr2.jfif"
    ];
     var posiciones = [
        "center center",
        "center center",
        "center 20%",
        "center 10%"
    ];
    var indice = 0;
    $("#bannerPrincipal").css({
        "background-image":"url('" + imagenes[indice] + "')", "background-position": posiciones[indice]
    });
    setInterval(function(){
        indice++;
        if(indice >= imagenes.length){ indice = 0; }
        $("#bannerPrincipal").fadeOut(500,function(){
            $(this).css({
                "background-image":"url('" + imagenes[indice] + "')", "background-position": posiciones[indice]
            });
            $(this).fadeIn(500);
        });
    },4000);
});

$(document).ready(function(){
    $(".juegosC").hover(
        function(){
            $(this).find(".verDetalles").stop(true,true).fadeIn(250);   
        },
        function(){
            $(this).find(".verDetalles").stop(true,true).fadeOut(250);
        }
    );
});

$(document).ready(function(){
    $(".verDetalles").click(function(){
        var juego = $(this).data("juego");
        if(juego == "fortnite"){
            $("#imagenJuego").attr("src","Css/img/fortnite.jfif");
            $("#tituloJuego").text("Fortnite");
            $("#descripcionJuego").text("Compite en partidas Battle Royale, crea experiencias y disfruta de eventos en constante actualización.");
            $("#desarrollador").text("Epic Games");
            $("#genero").text("Battle Royale");
            $("#precio").text("Gratis");
        }
        else if(juego == "rocket"){
            $("#imagenJuego").attr("src","Css/img/rocket.jfif");
            $("#tituloJuego").text("Rocket League");
            $("#descripcionJuego").text("Controla vehículos propulsados por cohetes y compite en emocionantes partidos de fútbol.");
            $("#desarrollador").text("Psyonix");
            $("#genero").text("Deportes");
            $("#precio").text("Gratis");
        }
        else if(juego == "gta5"){
            $("#imagenJuego").attr("src","Css/img/gta5.jfif");
            $("#tituloJuego").text("Grand Theft Auto V");
            $("#descripcionJuego").text("Explora Los Santos, completa misiones y juega GTA Online.");
            $("#desarrollador").text("Rockstar Games");
            $("#genero").text("Acción / Mundo abierto");
            $("#precio").text("USD $19.99");
        }
        else if(juego == "rdr2"){
            $("#imagenJuego").attr("src","Css/img/rdr2.jfif");
            $("#tituloJuego").text("Red Dead Redemption 2");
            $("#descripcionJuego").text("Vive la historia de Arthur Morgan en un enorme mundo abierto ambientado en el viejo oeste.");
            $("#desarrollador").text("Rockstar Games");
            $("#genero").text("Acción / Aventura");
            $("#precio").text("USD $29.99");
        }
        $("#modalJuego").fadeIn();
    });
    $("#cerrarModal").click(function(){
        $("#modalJuego").fadeOut();
    });
    $("#modalJuego").click(function(e){
        if(e.target == this){
            $(this).fadeOut();  
        }
    });
});

$(document).ready(function(){
    $(".favorito").click(function(){
        if($(this).text() == "🤍"){
            $(this).text("❤️");
            $("#mensajeFavorito")
                .text("Juego agregado a favoritos.")
                .fadeIn(300)
                .delay(1500)
                .fadeOut(300);
        }
        else{
            $(this).text("🤍");
            $("#mensajeFavorito")
                .text("Juego eliminado de favoritos.")
                .fadeIn(300)
                .delay(1500)
                .fadeOut(300);
        }
    });
});