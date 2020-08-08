import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://scontent.fpoa12-1.fna.fbcdn.net/v/t1.0-9/106489131_1298390667033309_854873309038156031_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=olwQwhfR8sYAX8Osu9S&_nc_ht=scontent.fpoa12-1.fna&oh=d9c528ea1dd07f60e4e05f9a0152abb0&oe=5F543773"
          alt="Ingrid Duarte"
        />
        <div>
          <strong>Ingrid Duarte</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias back-end.
        <br />
        <br />
        Apaixonada por compartilhar conhecimento e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/Hora
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
