$(document).ready(function () {
    // Chamada ao WebService WebMotors - Make
    $.ajax({
        url: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(response);

            var ddlMake = $("#ddlMake");
            PopularDropDownMarca(response, ddlMake);
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
            $("#Marca").val("");
        }
        $("#ddlVersion").children().remove().end().append('<option value="0">Selecione</option>');
        $("#Modelo").val("");
        $("#Versao").val("");
    });

    

    // Chamada ao WebService WebMotors - Model
    function ObterModel(valor) {
        $.ajax({
            url: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=' + valor,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                console.log(response);

                var ddlModel = $("#ddlModel");
                PopularDropDownModel(response, ddlModel);
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
            $("#Modelo").val("");
        }
        $("#ddlVersion").children().remove().end().append('<option value="0">Selecione</option>');
        $("#Versao").val("");
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
                PopularDropDownVersion(response, ddlVersion);
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
            $("#Versao").val("");
        }
    });

    function PopularDropDownMarca(response, dropDown) {
        dropDown.children().remove().end().append('<option value="0">Selecione</option>');
        $(response).each(function () {
            var option = $("<option />");
            option.html(this.Name);
            option.val(this.ID);
            dropDown.append(option);
        });

        // Selecionar DropDown
        var textoMarca = $("#Marca").val();
        console.log(textoMarca);
        if (textoMarca) {
            $("#ddlMake option:contains(" + textoMarca + ")").attr('selected', 'selected');
            ObterModel($("#ddlMake").val());
        }
    }

    function PopularDropDownModel(response, dropDown) {
        dropDown.children().remove().end().append('<option value="0">Selecione</option>');
        $(response).each(function () {
            var option = $("<option />");
            option.html(this.Name);
            option.val(this.ID);
            dropDown.append(option);
        });

        // Selecionar DropDown
        var textoModel = $("#Modelo").val();
        console.log(textoModel);
        if (textoModel) {
            $("#ddlModel option:contains(" + textoModel + ")").attr('selected', 'selected');
            ObterVersion($("#ddlModel").val());
        }
    }

    function PopularDropDownVersion(response, dropDown) {
        dropDown.children().remove().end().append('<option value="0">Selecione</option>');
        $(response).each(function () {
            var option = $("<option />");
            option.html(this.Name);
            option.val(this.ID);
            dropDown.append(option);
        });

        // Selecionar DropDown
        var textoVersion = $("#Versao").val();
        console.log(textoVersion);
        if (textoVersion) {
            $("#ddlVersion option:contains(" + textoVersion + ")").attr('selected', 'selected');
            
        }
    }
 
});
