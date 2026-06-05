import styles from "./Stats.module.css";

export default function Stats({ cards = [] }) {
  return (
    <div className={styles.dashboardStats}>
      {cards.map((card, index) => (
        <div key={index} className={styles.dashboardCard}>
          <h3>{card.title}</h3>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}