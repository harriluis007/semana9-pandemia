jQuery(document).ready(function(){

    jQuery(".btn-enviar").click(function(){
        jQuery.ajax({
            type: 'POST',
            url: 'prueba.php',
            data: {
                'numero1': 10,
                'numero2': 15,
            },
            beforeSend : function () {
         
            },
            success: function (data) {
                jQuery(".respuesta").html(data);
            },
            error : function (jqXHR, textStatus, errorThrown) {
                jQuery(".respuesta").html(jqXHR.responseText + ' :: ' + textStatus + ' :: ' + errorThrown);
                console.log(jqXHR);
            },
        });
    });

});