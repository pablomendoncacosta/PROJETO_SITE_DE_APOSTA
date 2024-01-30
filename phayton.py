import requests

def obter_calendario_futuro(esporte, equipe, chave_api):
    url = f'https://api.api-futebol.com.br/v1/campeonatos/20'
    
    try:
        resposta = requests.get(url)
        resposta.raise_for_status()
        dados = resposta.json()

        # Processar os dados conforme necessário
        for jogo in dados['schedule']:
            print(f"Data: {jogo['scheduled']}, Equipe Casa: {jogo['home']['name']}, Equipe Visitante: {jogo['away']['name']}")

    except requests.exceptions.RequestException as e:
        print(f"Erro ao obter dados: {e}")

# Substitua 'sua_chave_api', 'futebol', 'equipe_id' pelos valores apropriados
obter_calendario_futuro('sua_chave_api', 'futebol', 'equipe_id')

