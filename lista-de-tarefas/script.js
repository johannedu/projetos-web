function adicionarTarefa() {
 
  //puxamos do nosso html a tag input que vai ser utilizada
  const inputTarefa = document.getElementById("inputTarefa");
  //puxando o valor digitado no input e aprensentando o valor
  const tarefa = inputTarefa.value.trim();

  const mensagem = document.getElementById("mensagem")

  if (tarefa === "") {
    // se o valor do input or vazio, entao mostre uma mensagem de erro para o usuário
    mensagem.style.color='red';
    mensagem.textContent =
      "Valor vazio, tente novamente";
  } else {
    mensagem.style.color='green';
    mensagem.textContent = "Tarefa adicionada com sucesso!";
    const listaTarefas = document.getElementById("listaTarefas");
    //denominando que cada vez que o onclick for ativado, faça a criação de uma li que armazena um valor
    let novaTarefa = document.createElement("li");

    //li puxando o que o valor digitado no input para armazena-lo
    novaTarefa.textContent = tarefa;
    //denominando o caminho onde essa li tem de ser criada
    listaTarefas.appendChild(novaTarefa);
  }
  //puxando o valor
  inputTarefa.value = "";
}
