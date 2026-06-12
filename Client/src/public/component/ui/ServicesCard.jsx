import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { iconMap } from "../../../utils/iconMap";

import styles from "../../pages/Services/Services.module.css";

const ServicesCard = ({ servicesData }) => {
  return (
    <div className={`${styles.servicesGrid} section container`}>

      {servicesData?.map((service, index) => {

        const Icon = iconMap[service.icon];

        return (
          <article
            className={styles.serviceCard}
            key={service._id}
          >

            <div className={styles.serviceIcon}>
              {Icon && <Icon />}
            </div>

            <p className={styles.serviceNumber}>
              Service {index + 1}
            </p>

            <h2 className={styles.serviceCardTitle}>
              {service.title}
            </h2>

            <p className={styles.serviceCardText}>
              {service.body}
            </p>

            <Link
              to={`/services/${service.slug}`}
              className={styles.serviceBtn}
            >
              {service.ctaLabel || "Explore Service"}

              <ArrowRight size={18} />
            </Link>

          </article>
        );
      })}
    </div>
  );
};

export default ServicesCard;