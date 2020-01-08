import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';

type Props = {}
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {
      altura:0,
      massa:0,
      resultado:0,
      resultadoText:"",
    }
    this.calcular = this.calcular.bind(this)
  }
  
  calcular(){
    let imc = this.state.massa/ (this.state.altura * this.state.altura)

    let s = this.state
    s.resultado = imc

    if (s.resultado < 16 & s.resultado >0){
      s.resultadoText = "Magreza Grave"
    }else if (s.resultado >= 16 & s.resultado < 17){
      s.resultadoText = "Magreza moderada"
    }else if (s.resultado >= 17 & s.resultado < 18.5){
      s.resultadoText = "Magreza leve"
    }else if (s.resultado >= 18.5 & s.resultado < 25){
      s.resultadoText = "Saudável"
    }else if (s.resultado >= 25 & s.resultado < 30){
      s.resultadoText = "Sobrepeso"
    }else if (s.resultado >= 30 & s.resultado < 35){
      s.resultadoText = "Obesidade Grau I"
    }else if (s.resultado >= 35 & s.resultado < 40){
      s.resultadoText = "Obesidade Grau II"
    }else if (s.resultado >= 40){
      s.resultadoText = "Obesidade Grau III"
    }else{
      s.resultadoText = "Valor inválido"
    }

    this.setState(s)

  }


  render(){
  return (
    <View style={styles.container}>
      <View style={styles.entradas}>
        <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input}  onChangeText={(massa)  => this.setState({massa})}/>
        <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => this.setState({altura})}/>
      </View>
      {/*Pesquisar sobre função anônima*/}
      <TouchableOpacity onPress={() => {this.calcular()}} style={styles.button}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
      <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
      <Text style={[styles.resultado, {fontSize:35}]}>{this.state.resultadoText}</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  entradas:{
    flexDirection: 'row',
  },
  input: {
    color: "white",
    height: 80,
    width: "50%",
    textAlign: "center",
    fontSize: 50,
    marginTop: 24
  },
  button: {
    backgroundColor: "#484878",
  },
  buttonText: {
    alignSelf: "center",
    fontSize:25,
    padding:20,
    fontWeight: "bold"
  },
  resultado: {
    alignSelf: "center",
    color: "lightgray",
    fontSize: 65,
    padding: 15
  }
});
