function factura(){
    var fecha_emision = document.getElementById("fecha_emision").value;
    var tipo_pago = document.getElementById("Forma_pago").value;

    var nombres = document.getElementById("Nombres").value;
    var apellidos = document.getElementById("Apellidos").value;
    var documento = document.getElementById("Documento").value;
    var depto = document.getElementById("Dpto").value;
    var municipio = document.getElementById("Pais").value;
    var tel = document.getElementById("Telefono").value;
    var direcc = document.getElementById("Direccion").value;
    var contribu = document.getElementById("Contribuyente").value;
    var correo = document.getElementById("Correo").value;

    var embalaje = document.getElementById("Embalaje").value;
    var cantidad_emp = document.getElementById("Cantidad_emp").value;
    var peso = document.getElementById("Peso").value;
    var origen = document.getElementById("Origen").value;
    var destino = document.getElementById("Destino").value;
    var delivery = document.getElementById("Entrega").value;
    var fech_entrega = document.getElementById("F_Entrega").value;

    var num_prod = document.getElementById("Num_prod").value;
    var num_guia = document.getElementById("Guia").value;
    var cantidad_pro = document.getElementById("Cantidad").value;
    var precio_unit = document.getElementById("Vr_unit").value;
    var Vr_asegurado = document.getElementById("Vr_asegurado").value;
    var Vr_segu = document.getElementById("Vr_seguro").value;


    console.log(fecha_emision+" "+tipo_pago+" "+ nombres);
}