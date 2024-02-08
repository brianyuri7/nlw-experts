const perguntas = [
    {
       pergunta: "O que é JavaScript?",
       respostas: [
         "Uma linguagem de marcação",
         "Uma linguagem de programação",
         "Um framework de front-end",
       ],
       correta: 1
     },
     {
       pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
       respostas: [
         "var nomeVariavel = 10;",
         "const nomeVariavel = 10;",
         "let nomeVariavel = 10;",
       ],
       correta: 2
     },
     {
       pergunta: "O que é uma função em JavaScript?",
       respostas: [
         "Um tipo de dado",
         "Um objeto",
         "Um bloco de código reutilizável",
       ],
       correta: 2
     },
     {
       pergunta: "Como você faz um comentário de uma linha em JavaScript?",
       respostas: [
         "// Comentário",
         "# Comentário",
         "/* Comentário */",
       ],
       correta: 0
     },
     {
       pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
       respostas: [
         "==",
         "===",
         "!=",
       ],
       correta: 1
     },
     {
       pergunta: "O que é o DOM em JavaScript?",
       respostas: [
         "Um banco de dados",
         "Uma linguagem de programação",
         "A representação da estrutura do documento HTML",
       ],
       correta: 2
     },
     {
       pergunta: "Como você adiciona um evento a um elemento HTML em JavaScript?",
       respostas: [
         "addEventListener('click', minhaFuncao);",
         "onClick = minhaFuncao;",
         "event('click', minhaFuncao);",
       ],
       correta: 0
     },
     {
       pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
       respostas: [
         "Retorna o valor de uma variável",
         "Verifica se uma variável é indefinida",
         "Retorna o tipo de uma variável",
       ],
       correta: 2
     },
     {
       pergunta: "O que é o AJAX em JavaScript?",
       respostas: [
         "Uma biblioteca de animação",
         "Uma técnica para fazer requisições assíncronas",
         "Um tipo de variável",
       ],
       correta: 1
     },
     {
       pergunta: "Qual é a diferença entre 'let' e 'const' em JavaScript?",
       respostas: [
         "'let' é usado para declarar variáveis constantes, enquanto 'const' é usado para variáveis mutáveis",
         "'let' é usado para variáveis mutáveis, enquanto 'const' é usado para declarar variáveis constantes",
         "Não há diferença entre 'let' e 'const'",
       ],
       correta: 1
     },
   ];
   
   const quiz = document.querySelector(`#quiz`)
   const template = document.querySelector(`template`)
   
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostraTotal = document.querySelector(`#acertos span`)
   mostraTotal.textContent = corretas.size + ` de ` + totalDePerguntas
   
    // loop ou laço de repetição
   for(const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector(`h3`).textContent = item.pergunta
   
     for(let resposta of item.respostas) {
      const dt = quizItem.querySelector(`dl dt`).cloneNode(true)
      dt.querySelector(`span`).textContent = resposta
      dt.querySelector(`input`).setAttribute(`name`, `pergunta-` + perguntas.indexOf(item))
       dt.querySelector(`input`).value = item.respostas.indexOf(resposta)
      dt.querySelector(`input`).onchange = (event) => {
        const estaCorreta = event.target.value == item.correta 
   
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
         mostraTotal.textContent = corretas.size + ` de ` + totalDePerguntas
      }
        
    
      quizItem.querySelector(`dl`).appendChild(dt)
     }
   
   
   quizItem.querySelector(`dl dt`).remove()
   
   
   
   // coloca a pergunta na tela 
   quiz.appendChild(quizItem)
   }
   