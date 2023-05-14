import React, {useState} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity} from 'react-native';

const App = () => {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');
  const calcula = () => {
    const tempGasolina = parseFloat(gasolina);
    const tempAlcool = parseFloat(alcool);
    if (tempGasolina * 0.7 > tempAlcool) {
      setResultado('Alcool');
    } else {
      setResultado('Gasolina');
    }
  };
  return (
    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        opacity: 1,
      }}
      source={{
        uri: 'https://sindsegmd.com.br/wp-content/uploads/2016/05/Abastecer.jpg',
      }}>
      <Text
        style={{
          color: 'blue',
          fontSize: 30,
          fontWeight: 'bold',
          backgroundColor: '#ffffff80',
          textAlign: 'center',
        }}>
        Alcool ou Gasolina
      </Text>
      <Text
        style={{
          fontSize: 16,
          backgroundColor: '#ffffff80',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}>
        Saiba qual a melhor opção de abastecimento para o seu veiculo
      </Text>

      <TextInput
        onChangeText={value => setGasolina(value)}
        placeholder="Digite o valor da gasolina"
        keyboardType="numeric"
        style={{
          backgroundColor: 'white',
          width: '90%',
          marginVertical: 10,
          alignSelf: 'center',
        }}
      />
      <TextInput
        onChangeText={value => setAlcool(value)}
        placeholder="Digite o valor do Alcool"
        keyboardType="numeric"
        style={{
          backgroundColor: 'white',
          width: '90%',
          marginVertical: 10,
          alignSelf: 'center',
        }}
      />

      <TouchableOpacity>
        <Text
          onPress={calcula}
          style={{
            fontSize: 16,
            backgroundColor: '#ffffff80',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
          }}>
          Calcular
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 16,
          backgroundColor: '#ffffff80',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}>
        É melhor você abastecer com:
      </Text>
      <Text
        style={{
          color: 'blue',
          fontSize: 30,
          fontWeight: 'bold',
          backgroundColor: '#ffffff80',
          textAlign: 'center',
        }}>
        {resultado}
      </Text>
    </ImageBackground>
  );
};

export default App;
