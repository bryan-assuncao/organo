import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {


  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>

        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          aoAlterar={value => setNome(value)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          aoAlterar={value => setCargo(value)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={imagem}
          aoAlterar={value => setImagem(value)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time" itens={props.nomeDosTimes}
          value={time}
          aoAlterar={value => setTime(value)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
