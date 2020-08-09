import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

import './styles.css';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;    
  name: string;
  subject: string;    
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections',{
      user_id: teacher.id
    })
  }

  const message = `Olá ${teacher.name}, estou entrando em contato pois gostaria de ter aulas de ${teacher.subject} com o valor de ${Intl.NumberFormat('pt-BR', 
  {style: 'currency', currency: 'BRL'}).format(teacher.cost)}`;

  return (
    <div>
      <article className="teacher-item">
          <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
              <strong>{teacher.name}</strong>
              <span>{teacher.subject}</span>
            </div>
          </header>

          <p>
            {teacher.bio}
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ {teacher.cost}</strong>
            </p>

            <a 
            target="_blank"
            onClick={createNewConnection}href={`https://wa.me/${teacher.whatsapp}?text=${message}`}>
              <img src={whatsappIcon} alt="whatsapp"/>
              Entrar em contato
            </a>
          </footer>
        </article>
    </div>
  )
}

export default TeacherItem