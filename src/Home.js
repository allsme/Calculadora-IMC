import React, {useState} from "react";
import {Body, Forms, Input, Label, Button, Textinho, Tabela, TR, TH, TD, Titulo01} from './style.js';

function Home() {
  
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [valueImc, setValueImc] = useState('');

  function calculateIMC(e){
    e.preventDefault(); //page reload prevention 
    
    const valuePeso = parseFloat(peso)
    const valueAltura = parseFloat(altura)

    if (!valuePeso || !valueAltura || valueAltura == 0) {
      setValueImc("Valores Inválidos");
      return;
    }

    const imc = valuePeso / (valueAltura * valueAltura);
    setValueImc(imc.toFixed(2)); //limiting to 2 decimal places
  }

  return (
    <div className="App">
      <header className="Header">
      </header>

      <Body>

        <Titulo01>Calcular IMC</Titulo01>

        <Forms onSubmit={calculateIMC}>
          <Label htmlFor="peso">Peso(Kg): </Label>
          <Input type="number" name="peso" 
            onChange={e => setPeso(e.target.value)}
            value={peso} id="peso" 
          />

          <br/>

          <Label htmlFor="altura">Altura(Cm): </Label>
          <Input type="number" name="altura" 
            onChange={e => setAltura(e.target.value)} 
            value={altura} id="altura"
          />

          <br/>

          <Button type="submit">Calcular</Button>

        </Forms>
        
        <br/>

        <Textinho>Seu IMC é: {valueImc}</Textinho>

        <br/>

        <Textinho>Saiba agora se está no seu peso ideal!</Textinho>

        <br/>

        <Tabela>
            <TR>
              <TH>IMC</TH>
              <TH>Classificação</TH>
            </TR>
            
            <TR>
              <TD>Menos de 17</TD>
              <TD>Muito abaixo do peso</TD>
            </TR>
            
            <TR>
              <TD>Entre 17 e 18,49</TD>
              <TD>Abaixo do peso</TD>
            </TR>

            <TR>
              <TD>Entre 18,5 e 24,99</TD>
              <TD>Peso normal</TD>
            </TR>

            <TR>
              <TD>Entre 25 e 29,99</TD>
              <TD>Acima do peso</TD>
            </TR>

            <TR>
              <TD>Entre 30 e 34,99</TD>
              <TD>Obesidade I</TD>
            </TR>

            <TR>
              <TD>Entre 35 e 39,99</TD>
              <TD>Obesidade II (severa)</TD>
            </TR>

            <TR>
              <TD>Acima de 40</TD>
              <TD>Obesidade III (mórbida)</TD>
            </TR>

        </Tabela>
      </Body>

    </div>
  );
}

export default Home;