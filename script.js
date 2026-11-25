const inputConsole = document.getElementById('input-console');
const saidaConsole = document.getElementById('saida-console');

function escrever(texto) {
  const linha = document.createElement('div');
  linha.className = 'linha-saida';
  linha.textContent = texto;
  saidaConsole.appendChild(linha);
  saidaConsole.scrollTop = saidaConsole.scrollHeight;
}

function ecoar(textoDigitado) {
  const linha = document.createElement('div');
  linha.className = 'linha-comando';
  linha.innerHTML = `<span class="prompt-echo">⟩</span>${textoDigitado}`;
  saidaConsole.appendChild(linha);
}

// o "cardápio": cada chave é um comando aceito, cada valor é o que fazer quando ele for digitado
const comandos = {
  ajuda() {
    escrever('Comandos: ajuda, sobre, projetos, abrir lista-de-tarefas, abrir previsao-tempo, contato, limpar');
  },
  sobre() {
    escrever('João Takkeda — Desenvolvedor Full-stack em formação, aprendendo construindo projetos reais.');
  },
  projetos() {
    escrever('lista-de-tarefas, previsao-tempo');
  },
  'abrir lista-de-tarefas'() {
    escrever('Abrindo lista-de-tarefas...');
    window.open('https://takkedaz.github.io/lista-de-tarefas/', '_blank', 'noopener');
  },
  'abrir previsao-tempo'() {
    escrever('Abrindo previsao-tempo...');
    window.open('https://takkedaz.github.io/previsao-tempo/', '_blank', 'noopener');
  },
  contato() {
    escrever('Abrindo seu e-mail...');
    window.location.href = 'mailto:takkedazcorp@gmail.com';
  },
  limpar() {
    saidaConsole.innerHTML = '';
  },
};

inputConsole.addEventListener('keydown', (evento) => {
  if (evento.key !== 'Enter') return;

  const textoDigitado = inputConsole.value.trim();
  if (textoDigitado === '') return;

  ecoar(textoDigitado);

  // olha se o que foi digitado bate com alguma chave do cardápio
  const comando = comandos[textoDigitado.toLowerCase()];
  if (comando) {
    comando();
  } else {
    escrever(`Comando não encontrado: ${textoDigitado}. Digite "ajuda" pra ver as opções.`);
  }

  inputConsole.value = '';
});

escrever('Digite "ajuda" pra começar.');

function iniciarReveal() {
  const alvos = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  alvos.forEach(alvo => observer.observe(alvo));
}

iniciarReveal();
