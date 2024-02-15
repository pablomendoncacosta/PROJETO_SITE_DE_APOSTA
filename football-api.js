
  document.addEventListener('DOMContentLoaded', async function () {
    const apiKey = '7377fecd10cf4d1180198e2545017960'; // Substitua pelo seu próprio API Key
    const today = new Date().toISOString().split('T')[0];
    const apiUrl = `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${today}`;
  
    try {
     fetch(apiUrl, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
          'X-RapidAPI-Key': apiKey,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro na requisição à API: ${response.statusText}`);
      }
  
      const data = await response.json();
      const matches = data.response;
  
      if (matches.length > 0) {
        const listaJogos = document.getElementById('lista-jogos');
        matches.forEach(match => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <strong>${match.teams.home.name}</strong> vs <strong>${match.teams.away.name}</strong>
            <p><em>${match.league.name}</em></p>
            <p>${formatDate(match.fixture.date)}</p>
          `;
          listaJogos.appendChild(listItem);
        });
      } else {
        console.log('Nenhum jogo encontrado para hoje.');
      }
    } catch (error) {
    }
  });
  
  function formatDate(dateString) {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC' };
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', options);
  }
  