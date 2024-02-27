import { useQuery } from "graphql-hooks";
import { useEffect, useState } from "react";
import ComplementaryEdu from "../../assets/icons/puzzle.png";
import PrimaryEdu from "../../assets/icons/scholarship.png";
import { COMPLEMENTARY_EDUCATION } from "../../services/datoCMS/querys";
import CompEdu from "../CompEdu/CompEdu";
import "./Education.sass";
import {
  ComplementaryEducation,
  ComplementaryEducationQuery,
} from "../../@types/types";

export default function Education() {
  const [complementaryEducation, setComplementaryEducation] = useState<
    ComplementaryEducation[]
  >([]);

  const { data } = useQuery<ComplementaryEducationQuery>(
    COMPLEMENTARY_EDUCATION
  );

  useEffect(() => {
    if (data) {
      const educationData = data.allComplementaryEducations;
      setComplementaryEducation(educationData);
    }
  }, [data]);

  return (
    <div className="Education">
      <section className="primary-education">
        <div className="title-icon">
          <img className="icon education-icon" src={PrimaryEdu} />
          <h2 className="main-title medium-title">Educação</h2>
        </div>
        <article className="course">
          <p className="text-description course-name">
            Redes de Computadores - IFRJ
          </p>
          <p className="text-description course-date">02/2024 - 02/2027</p>
          <p className="text-description course-description">
            O Curso Superior de Tecnologia em Redes de Computadores busca uma
            formação de cidadãos e profissionais capacitados em planejar,
            administrar, analisar, desenvolver, testar e implantar redes de
            computadores e os demais recursos computacionais relacionados à
            área. Além disso, esse profissional será capacitado para avaliar,
            selecionar, especificar e utilizar metodologias e ferramentas de
            Engenharia de Software, linguagens de programação e banco de dados.
          </p>
        </article>
        <article className="course">
          <p className="text-description course-name">
            Desenvolvimento Full Stack - Cubos Academy
          </p>
          <p className="text-description course-date">10/2022 - 08/2023</p>
          <p className="text-description course-description">
            JavaScript/TypeScript para web development
          </p>
        </article>
      </section>
      <section className="complementary education">
        <div className="title-icon">
          <img className="icon education-icon" src={ComplementaryEdu} />
          <h2 className="main-title smaller-title">Certificados</h2>
        </div>
        <div className="CompEdu">
          {complementaryEducation &&
            complementaryEducation.map((compEdu) => {
              return <CompEdu key={compEdu.id} compEdu={compEdu} />;
            })}
        </div>
      </section>
    </div>
  );
}
