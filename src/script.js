function enviarWhatsapp(){

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;

  let mensagem = `Olá!
Meu nome é ${nome}
Email: ${email}
Telefone: ${telefone}`;

  let numeroEmpresa = "5511999999999";

  let link = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}