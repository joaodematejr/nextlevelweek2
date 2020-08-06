import React from "react";
import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/17418041?s=460&u=fb6979ee9a474c6514b43ee4200aa2fe123a5f97&v=4"
          alt="João Dematé"
        />
        <div>
          <strong>João Dematé</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        A expressão Lorem ipsum em design gráfico
        <br /> <br />A expressão Lorem ipsum em design gráfico e editoração é um
        texto padrão em latim utilizado na
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
