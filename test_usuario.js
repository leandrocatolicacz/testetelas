

function assertMoreThan(esperado, recebido) {
  if (recebido === undefined) {
      console.error(`Esperado: ${esperado}`);        
      console.error(`Recebido: ${recebido}`);
      console.log("\n")
      return false;
  }
  else if (recebido > esperado) {
      console.info(true);
      return true;
  }
  else{
      console.error(`Esperado: ${esperado}`);        
      console.error(`Recebido: ${recebido}`);
      console.log("\n")
      return false;
  }
}


function assertMoreOrEquals(esperado, recebido) {
  if (recebido === undefined) {
      console.error(`Esperado: ${esperado}`);        
      console.error(`Recebido: ${recebido}`);
      console.log("\n")
      return false;
  }
  else if (recebido >= esperado) {
      console.info(true);
      return true;
  }
  else{
      console.error(`Esperado: ${esperado}`);
      console.error(`Recebido: ${recebido}`);
      console.log("\n")
      return false;
  }
}


function capturar() {
  
  var nome = document.getElementById("nome").value;
  var cpf = document.getElementById("cpf").value;
  var telefone = document.getElementById("telefone").value;

  assertMoreThan(0, nome.length);
  assertMoreOrEquals(2, nome.length);
  assertMoreThan(0, cpf.length);
  assertMoreThan(0, telefone.length);

  var usuario = {
      nome, cpf,telefone
  }

  console.log(usuario);

}