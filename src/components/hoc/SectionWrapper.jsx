import { motion } from "framer-motion";

import { styles } from "../../styles";
import { staggerContainer } from "../../utils/motion";

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
