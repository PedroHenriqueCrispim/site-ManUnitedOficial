form.addEventListener('submit', (event) => {
    event.preventDefault();
    const respostas = {
      q1: document.querySelector('input[name="q1"]:checked'),
      q2: document.querySelector('input[name="q2"]:checked'),
      q3: document.querySelector('input[name="q3"]:checked'),
      q4: document.querySelector('input[name="q4"]:checked'),
      q5: document.querySelector('input[name="q5"]:checked')
    };
  
    // Verificar se todas as perguntas foram respondidas
    if (!respostas.q1 || !respostas.q2 || !respostas.q3 || !respostas.q4 || !respostas.q5) {
      alert('Por favor, responda todas as perguntas antes de enviar.');
      return;
    }
   });

 