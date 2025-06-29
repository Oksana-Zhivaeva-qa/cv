import requests

URL = 'https://api.pokemonbattle.ru/v2'
TOKEN = '9df48277eeeb6e253be5a890ac772941'
HEADER = {'Content-Type' : 'application/json', 'trainer_token' : TOKEN}
body_create = {
    "name": "Poki",
    "photo_id": "https://pokemonbattle.ru/pokemons/photos/003.png"
}

body = {
    "pokemon_id": "305966",
    "name": "New Name",
    }

body_confirmation = {
    "pokemon_id": "9"
}

pokemon_id = response_create.json[id]
print(pokemon_id)


'''response_create = requests.post(url = f'{URL}/pokemons', headers = HEADER, json = body_create)
print(response_create.text)'''


'''response = requests.put(url = f'{URL}/pokemons', headers = HEADER, json = body)
print(response.text)'''

response_confirmation = requests.Path(url = f'{URL}/trainers/add_pokeball', headers = HEADER, json = body_confirmation)
print(response_confirmation.text)
