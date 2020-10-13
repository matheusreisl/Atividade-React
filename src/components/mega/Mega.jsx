import React, {useState} from 'react'

export default (props) => {

    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0))

    function gerarNumerosNaoContido(array){
        const max = 60
        const min = 1
        const novoNumero = parseInt(Math.random()* (max - min)) + min
        return array.includes(novoNumero) 
               ? gerarNumerosNaoContido (array) : novoNumero
    }

    function gerarNumeros(){
        const novoArray = Array(props.qtdeNumero)
                        .fill(0)
                        .reduce(a => [...a, gerarNumerosNaoContido(a)], [])
                        .sort((a,b) => a - b)
        setNumeros([novoArray])
    }

  return(
  <>
    <h3>Mega</h3>
    <h4>{numeros.join(' ')}</h4>

    <button onClick={gerarNumeros}>Gerar Números</button>
  </>
  );

};