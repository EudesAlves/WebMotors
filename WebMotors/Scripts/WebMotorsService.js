$(document).ready(function () {
    // Chamada ao WebService WebMotors - Make
    $.ajax({
        url: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(response);

            var ddlMake = $("#ddlMake");
            PopularDropDown(response, ddlMake);
        }
    });

    // Evento Change para DropDownMake
    $("#ddlMake").change(function () {
        var valor = this.value;
        var texto = this.options[this.selectedIndex].text;

        console.log(valor + ' ' + texto);
        if (valor > 0) {
            ObterModel(valor);
            $("#Marca").val(texto);
        }
        else {
            $("#Marca").value("");
        }
        $("#ddlVersion").children().remove().end().append('<option value="0">Selecione</option>');
        $("#Modelo").value("");
        $("#Versao").value("");
    });

    function PopularDropDown(response, dropDown) {
        dropDown.children().remove().end().append('<option value="0">Selecione</option>');

        $(response).each(function () {
            var option = $("<option />");
            option.html(this.Name);
            option.val(this.ID);

            dropDown.append(option);
        });
        dropDown.selectedIndex = 0;
    }

    // Chamada ao WebService WebMotors - Model
    function ObterModel(valor) {
        $.ajax({
            url: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=' + valor,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                console.log(response);

                var ddlModel = $("#ddlModel");
                PopularDropDown(response, ddlModel);
            }
        });
    }

    // Evento Change para DropDownModel
    $("#ddlModel").change(function () {
        var valor = this.value;
        var texto = this.options[this.selectedIndex].text;

        console.log(valor + ' ' + texto);
        if (valor > 0) {
            ObterVersion(valor);
            $("#Modelo").val(texto);
        }
        else {
            $("#Modelo").value("");
        }
        $("#ddlVersion").children().remove().end().append('<option value="0">Selecione</option>');
        $("#Versao").value("");
    });

    // Chamada ao WebService WebMotors - Version
    function ObterVersion(valor) {
        $.ajax({
            url: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=' + valor,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                console.log(response);

                var ddlVersion = $("#ddlVersion");
                PopularDropDown(response, ddlVersion);
            }
        });
    }

    // Evento Change para DropDownVersion
    $("#ddlVersion").change(function () {
        var valor = this.value;
        var texto = this.options[this.selectedIndex].text;

        console.log(valor + ' ' + texto);
        if (valor > 0) {
            $("#Versao").val(texto);
        }
        else {
            $("#Versao").value("");
        }
    });
    
    //var textoM = $("#Marca").value();
    //$("#ddlMake option:contains(" + textoM + ")").attr('selected', 'selected');
});
