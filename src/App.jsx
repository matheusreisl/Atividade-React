import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

import './App.css'

export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">

    <Card titulo=" #1 Primeiro Componente" color="#92B06A">
       <Primeiro />
    </Card>
    <Card titulo=" #2 Componentes com Parametros" color="#FF85CB">
        <ComParametro titulo="Esse é o título"
                      subtitulo="Esse é o subtitulo"/>
        <ComParametro titulo="Opa"
                      subtitulo="Epa"/>
    </Card>
    <Card titulo=" #3 Com Filhos" color="#D96459">
      <ComFilhos> 
      <ul>
        <li>Ana </li>
        <li>Bia </li>
        <li>Carlos </li>
        <li>Daniel </li>
      </ul>
    </ComFilhos>
    </Card>
    <Card titulo=" #4 Repeticao" color="#008BBA">
      <Repeticao>
      </Repeticao>
    </Card>
     <Card titulo=" #5 Condicional v1" color="#E94C6F">
      <Condicional numero={11}>
      </Condicional>
    </Card>
    <Card titulo=" #6 Condicional v2" color="#FA6900">
      <CondicionalComIf numero={10}>
      </CondicionalComIf>
    </Card>
    <Card titulo="#7 Comunicação Direta" color="#588C73">
      <Pai sobrenome="Freitas">
      </Pai>
    </Card>
    <Card titulo=" #8 Comunicação Indireta" color="#E1D041">
      <Super>
      </Super>
    </Card>
    <Card titulo=" #9 Input" color="#59323C">
      <Input>
      </Input>
    </Card>
    <Card titulo=" #10 Contador" color="#293E6A">
      <Contador passo = {10} valor ={100}>
      </Contador>
    </Card>
    <Card titulo=" #11 Mega" color="#CC0063">
      <Mega qtdeNumero={8}>
      </Mega>
    </Card>
    <Card titulo=" #X taltal">
      Conteudo
    </Card>

    </div>
  </div>
);