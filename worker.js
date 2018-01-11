onmessage = function(e) { // Recebendo uma mensagem do main.js
  console.log('Dados recebidos no Web Worker');
  let result = 0;
  for(let i = 0; i < e.data.numero; i++) {
    result += i;
  }
  result = result;
  console.log('Web Worker devolvendo messagem')
  postMessage(result); // Enviando uma mensagem para o main.js
}
