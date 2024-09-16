function imc(){
  var peso = parseFloat(document.getElementById('numero1').value)
  var altura = parseFloat(document.getElementById('numero2').value)
  var resultado = document.getElementById('paragrafo')
  var tabela = document.getElementById('para')

  const imc = parseFloat(peso /(altura**2))

  if(imc >=18.5 && imc <=25){
    resultado.innerHTML = imc.toFixed(2)
    tabela.textContent = 'Seu IMC está ideal'
    } 
    
    else if(imc >=17 && imc <=18.49){
      resultado.innerHTML = imc.toFixed(2)
      tabela.textContent = 'abaixo do peso'
    }

 else if(imc < 17){
      resultado.innerHTML = imc.toFixed(2)
      tabela.textContent = 'Muito abaixo do peso'
    }

    else if(imc >=25 && imc <=29.99){
      resultado.innerHTML = imc.toFixed(2)
      tabela.textContent = 'Acima do peso'
    }

    else if(imc >=30 && imc <=34.99){
      resultado.innerHTML = imc.toFixed(2)
      tabela.textContent = 'Obesidade I'
    }

    else if(imc >=35 && imc <=39.99){
      resultado.innerHTML = imc.toFixed(2)
      tabela.textContent = 'Obesidade II'
    }

     else if(imc > 40){
      resultado.innerHTML = imc.toFixed(2)
      tabela.textContent = 'Obesidade III'
    }
}