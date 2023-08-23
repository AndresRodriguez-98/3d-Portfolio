import { motion } from "framer-motion";

import { styles } from "../../styles";
import { staggerContainer } from "../../utils/motion";


// SectionWrapper es un envoltorio de secciones
// Es una constante que tiene una funcion adentro como cualquier componente de React, pero en este caso la funcion flecha devuelve una un function llamada HOC().
// Cuando llamamos a sectionWrapper cada vez que vamos a un componente, no devuelve todo de una sino que ejecuta la funcion HOC, la cual renderiza al componente dentro de un motion.section que tiene ciertas animaciones.

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()} // animamos cada section
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }} // arreglamos el puerto de vista para que se vea una sola vez y con cierta cantidad de animacion
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* con este span hacemos que el boton de scroll debajo de la computadora 3D logre scrollear hacia el about. Enrealidad hace el scroll a este span invisible */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
