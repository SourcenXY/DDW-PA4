$(document).ready(function(){
    $(".grupoItem").hover(
        function(){
            $(this).find(".btnUnirse").stop(true,true).fadeIn(200);
        },
        function(){
            if(!$(this).find(".btnUnirse").hasClass("unido")){
                $(this).find(".btnUnirse").stop(true,true).fadeOut(200);
            }
        }
    );
    $(".btnUnirse").click(function(){
        if($(this).hasClass("unido")){
            return;
        }
        $(this).text("✓ Miembro").css("background","#28a745").addClass("unido");
        var texto = $(this).siblings(".infoGrupo").find(".miembros").text();
        var numero = parseInt(texto.replace(/,/g,""));
        numero++;
        $(this).siblings(".infoGrupo").find(".miembros").text(numero.toLocaleString() + " miembros");
    });
});