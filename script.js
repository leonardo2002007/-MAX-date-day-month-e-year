function setData(){
    var hoje = new Date();
    var dia = hoje.getDate();
    var mes = hoje.getMonth() + 1;
    var ano = hoje.getFullYear();
    if (dia < 10) {
       dia = '0' + dia;
    }
    if (mes < 10) {
       mes = '0' + mes;
    }
    hoje = ano + '-' + mes + '-' + dia;
    document.getElementById("Nasc").setAttribute("max", hoje);
}
