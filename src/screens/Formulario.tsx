import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import React, {useState} from 'react';

import { useForm, Controller} from 'react-hook-form';

export default function Formulario() {
  const {control, handleSubmit, formState: {errors}} = useForm({ })

  function handleForm(data){
      console.log(data.setorOcorrencia);
      console.log(data.descricaoOcorrencia);
      console.log(data.tipoDeRisco);
    }

    return (
    <View style={styles.container}>

      <Text style={styles.title}>Formulário de Ocorrências</Text>

    <Controller
        control={control}
        name="setorOcorrencia"
        render={({field: { onChange, onBlur, value}}) =>(
          <TextInput
          style={styles.input}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="Setor da Ocorrência"
        />
      )}
      />


      <Controller
        control={control}
        name="descricaoOcorrencia"
        render={({field: { onChange, onBlur, value}}) =>(
          <TextInput
          style={styles.inputDescricao}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="Descrição da Ocorrência"
        />
      )}
      />
      <Controller
        control={control}
        name="tipoDeRisco"
        render={({field: { onChange, onBlur, value}}) =>(
          <TextInput
          style={styles.inputRisco}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="Nível de Risco"
        />
      )}
      />

    <Button 
        title="Enviar Formulário"
        color="#FFA500"
        onPress={() => Alert.alert('Formulário de ocorrência enviado com sucesso!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight:'bold',
    marginBottom: 40
  },
  input:{
    borderStyle: 'solid',
    backgroundColor: 'white',
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 5,
    height: 40,
    margin: 12,
    padding:10,
    width: '80%',
    textAlign: 'center'
  },
  inputDescricao:{
    borderStyle: 'solid',
    backgroundColor: 'white',
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 5,
    height: 80,
    margin: 12,
    padding:10,
    width: '80%',
    textAlign: 'center'
  },
  inputRisco:{
    borderStyle: 'solid',
    backgroundColor: 'white',
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 20,
    height: 40,
    margin: 12,
    padding:10,
    width: '80%',
    textAlign: 'center'
  },
});
