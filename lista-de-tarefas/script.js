let tarefas = [];

function adicionarTarefa() {
  const inputTarefa = document.getElementById("inputTarefa");

  const tarefa = inputTarefa.value.trim();

  const mensagem = document.getElementById("mensagem");

  if (tarefa === "") {
    mensagem.style.color = "red";

    mensagem.textContent = "Valor vazio, tente novamente";
  } else {
    mensagem.style.color = "green";

    mensagem.textContent = "Tarefa adicionada com sucesso!";

    tarefas.push(tarefa);

    renderizarTarefas()
  }
  inputTarefa.value = "";
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = ""

  let i = 0;

  for (i; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");

    novaTarefa.textContent = tarefas[i];

    listaTarefas.appendChild(novaTarefa);
  }
}
