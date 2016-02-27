/**
 * Created by djonathas. V1.1
 */

$.prototype.validar = function() {
    validado = true;

    this.find(".error-block").remove();

    this.find("input[required], select[required]").each(function(index) {
        if(this.value == "") {
            $(this).after("<p class='error-block'>Campo obrigatório!</p>");
            validado = false;
        }
    });

    this.find("input[type='email']").each(function(index) {
        var patt = /.*@.*\..*/g;
        if(this.value != "" && !patt.test(this.value)) {
            $(this).after("<p class='error-block'>Endereço de e-mail inválido!</p>");
            validado = false;
        }
    });

    var senhas = this.find("input[type='password']");
    if(senhas[0] && senhas[1] && senhas[0].value != "" && senhas[1].value != "") {
        if (senhas[0].value != senhas[1].value) {
            $(senhas[1]).after("<p class='error-block'>As senhas não iguais!</p>");
            validado = false;
        } else if (!senhaSegura) {
            $(senhas[0]).after("<p class='error-block'>Nível de segurança da senha baixo!</p>");
        }
    }

    return validado;
};

Element.prototype.validarComHTML5 = function() {
    var datas = this.querySelectorAll('[datetimepicker][max-date="today"]');
    for (var i = 0; i < datas.length; i++) {
        datas[i].setCustomValidity("");
        var data = new Date().parseDate(datas[i].value, "dd/mm/yyyy");
        if (data > new Date()) {
            datas[i].setCustomValidity("Esta data não pode ser maior que a data de hoje");
            return false;
        }
    }

    return this.checkValidity();
};
