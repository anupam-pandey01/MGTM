import styles from "./Services.module.css";
import { Microscope } from "lucide-react";
import ServicesCard from "../../component/ui/ServicesCard";
import Note from "../../component/ui/Note";
import { useEffect, useState } from "react";
import { getAllServices } from "../../../services/publicServices/servicesApi";
import { handleError } from "../../../utils/handler";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    async function services() {
      try {
        const data = await getAllServices();

        setServicesData(data.services);

      } catch (err) {
        handleError(err);
      }
    }

    services();

  }, []);

  return (
    <section className={`${styles.services}`}>
      <div>

        {/* TOP */}
        <div className={`${styles.servicesTop} section container`}>

          <p className={styles.servicesLabel}>
            Services Offered
          </p>

          <h1 className={styles.servicesTitle}>
            Four services.
            One research-driven method.
          </h1>

          <p className={styles.servicesIntro}>
            Every engagement begins with a psychometric assessment.
            The result is not a label — it is the foundation
            for the work we do together.
          </p>

        </div>

        {/* GRID */}
        <div className={`${styles.servicesContainer} `}>

          <ServicesCard servicesData={servicesData} />

          <div className={styles.servicesNoteContainer}>

            <Note
              icon={
                <Microscope className={styles.servicesNoteIcon} />
              }

              boldText={"Psychometric assessment is included"}

              paraText={
                "with every service. It's how research-driven advice actually begins."
              }

              className={`${styles.servicesNote} section container`}
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;