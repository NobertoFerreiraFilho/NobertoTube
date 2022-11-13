import React, { useState } from "react";
//Styles
import { StyledRegisterVideo } from "./RegisterVideo-styles";
//Hooks
import useForm from "./Hooks/useForm";

const RegisterVideo = () => {
  const formCadastro = useForm({
    initialValues: { titulo: "Frost punk", url: "https://youtube.." },
  });
  const [formVisivel, setFormVisivel] = useState(false);

  /*
    ## O que precisamos para o form funcionar?
    - pegar os dados, que precisam vir do state
        - titulo
        - url do vídeo 
    - precisamos ter um onSubmit do nosso form
    - Limpar o formulário após o Submit
    */

  return (
    <StyledRegisterVideo>
      <button
        type="button"
        className="add-video"
        onClick={() => setFormVisivel(true)}
      >
        +
      </button>
      {/* Ternário */}
      {/* Operadores de Curto-circuito */}
      {formVisivel ? (
        <form
          onSubmit={(evento) => {
            evento.preventDefault();
            console.log(formCadastro.values);

            setFormVisivel(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>
            <input
              placeholder="Titulo do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
};

export default RegisterVideo;

// [X] Falta o botão para adicionar
// [X] Modal
// -> [X] Precisamos controlar o state
// -> Formulário em si
