
  const apiKey = '7377fecd10cf4d1180198e2545017960';
  const today = new Date().toISOString().split('T')[0];
  const apiUrl = `https://api.football-data.org/v2/matches?dateFrom=${today}&dateTo=${today}`;
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-Auth-Token': apiKey,
    },
  })
    .then(response => response.json())
    .then(data => {
      const matches = data.matches;
  
      if (matches.length > 1) {
  
        console.log('Jogos de hoje:');
        matches.forEach(match => {
          const homeTeam = match.homeTeam.name;
          const awayTeam = match.awayTeam.name;

          console.log(`${homeTeam} vs ${awayTeam}`);
        });
      } else {
        console.log('Nenhum jogo encontrado para hoje.');
      }
    })
    .catch(error => console.error('Erro ao obter dados:', error));