document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "525581471436";
  
    let cliente = document.querySelector("#cliente").value;
    let fecha = document.querySelector("#fecha").value;
    let hora = document.querySelector("#hora").value;
    let empleado = document.querySelector("#empleado").value;
    let servicio = document.querySelector("#servicio").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_Tecnopostal_*%0A
          *Formato de pedido*%0A%0A
          *Indique el nombre de la persona de encargo*%0A
          ${cliente}%0A
          *Indica la fecha de entrega*%0A
          ${fecha}%0A
          *Indica la hora de entrega de producto*%0A
          ${hora}%0A
          *Indique modelo del producto(Telefonia/Computo)*%0A
          ${empleado}%0A
          *Forma de pago*%0A
          ${servicio}`;
  
    if (cliente === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });
  
  window.alert("El pedido se realizara por via whatsapp");
  
    