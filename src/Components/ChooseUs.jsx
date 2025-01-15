import React from 'react';
import CountUp from 'react-countup'; // Importar la librería
import '../Styles/ChoseUs.css';
import ImgChoose from '../Images/choose-img.png';

const ChooseUs = () => {
  return (
    <section className="choose section" id="choose">
      <div className="choose_overflow">
        <div className="choose_container container grid">
          <div className="choose_content">
            <div className="section_data">
              <h2 className="section_subtitle text-blue-400">
                {' '}
                La Mejor Elección
              </h2>
              <div className="section_titles">
                <h1 className="section_title-border font-bold">POR QUÉ</h1>
                <h1 className="section_title font-bold">ELEGIRNOS?</h1>
              </div>
            </div>
            <p className="choose_description text-gray-600 animate__animated animate__fadeIn">
              Al unirte a <b className="text-blue-400">TURU FITNESS</b>,
              descubrirás un espacio donde tu bienestar y objetivos son nuestra
              prioridad. Contamos con un equipo altamente capacitado y
              tecnología de punta para que puedas alcanzar tus metas de manera
              efectiva y divertida. ¡Transforma tu vida con nosotros!
            </p>
            <div className="choose_data">
              <div className="choose_group">
                <h3 className="choose_number">
                  +
                  <CountUp
                    start={0}
                    end={300}
                    duration={2}
                    separator=","
                  />{' '}
                  {/* Animación para el número */}
                </h3>
                <p className="choose_subtitle">Miembros Activos</p>
              </div>
              <div className="choose_group">
                <h3 className="choose_number">
                  +
                  <CountUp start={0} end={5} duration={2} separator="," />{' '}
                  {/* Animación para el número */}
                </h3>
                <p className="choose_subtitle">Entrenadores Profesionales</p>
              </div>
              <div className="choose_group">
                <h3 className="choose_number">Más de 100</h3>
                <p className="choose_subtitle">
                  Planes de Entrenamiento Personalizados
                </p>
              </div>
              <div className="choose_group">
                <h3 className="choose_number">+
                  <CountUp start={0} end={30} duration={2} separator="," />{' '}
                  {/* Animación para el número */}
                </h3>
                <p className="choose_subtitle">Equipos de Última Tecnología</p>
              </div>
            </div>
          </div>

          <div className="choose_images">
            <img src={ImgChoose} alt="gym image" className="choose_img" />
            {/* <div className="choose_triangle choose_triangle-1"></div> */}
            {/* <div className="choose_triangle choose_triangle-2"></div> */}
            {/* <div className="choose_triangle choose_triangle-3"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
