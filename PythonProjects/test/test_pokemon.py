import requests
import pytest

URL = 'https://api.pokemonbattle.ru/v2'
TOKEN = '9df48277eeeb6e253be5a890ac772941'
HEADER = {'Content-Type' : 'application/json', 'trainer_token' : TOKEN}
TRAINER_ID ='37381'

def test_status_code():
    response = requests.get(url = f'{URL}/pokemons',params = {'trainer_id': TRAINER_ID})
    assert response.status_code == 200

def test_part_of_response():
    response_get = requests.get(url = f'{URL}/pokemons',params = {'trainer_id': TRAINER_ID})
    assert response_get.json()['data'][0]['name']=='Бульбазвар' 


@pytest.mark.parametrize('key, value,[('name', 'Бульбазавр'),('trainer_id', TRAINER_ID), ('pokemon_id', '26789')])
def test_parametrize(key,value):   
    response_parametrize = requests.get(url = f'{URL}/pokemons',params = {'trainer_id': TRAINER_ID})                    
    assert_response_parametrize.json()['data'][0][key] == valye