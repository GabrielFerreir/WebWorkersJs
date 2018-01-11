var btn = document.querySelector('button'); // Pegando o botão da DOM
if (window.Worker) { // Verificando se o Worker esta disponivel
	var myWorker = new Worker("worker.js"); // Criando uma instacia do Worker apontando para o arquivo worker.js

  btn.addEventListener('click', () => { // Pegando o evento de click no botão
    console.log('Enviando dados para o Web Worker');
    myWorker.postMessage({numero: 5000000}); // Enviando mensagem para o trabalhador
  })

  myWorker.onmessage = function(e) { // Recendo uma mensagem do worker.js
    console.log('Main recebendo dados')
    console.log(e.data)
  }

}
