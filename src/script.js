
  // Função para gerar uma cor aleatória em formato RGB nos tons de roxo, azul 
function getRandomColor() {
    var colors = ['#000000','#222327', '#010054',];
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  // Função para atualizar a cor de fundo do body com efeito neon
  function updateBackgroundColor() {
    var body = document.querySelector('body');
    var color = getRandomColor();
    body.style.transition = 'background-color 2s'; // Define a duração da transição para 2 segundos
    body.style.backgroundColor = color;
  }
  
  // Intervalo de tempo para atualizar a cor de fundo (2000ms = 2 segundos)
  setInterval(updateBackgroundColor, 2000);
 
  