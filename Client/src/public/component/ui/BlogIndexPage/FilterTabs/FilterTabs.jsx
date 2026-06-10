import styles from './FilterTabs.module.css';

const TABS = [
  { id: "all", label: "All Articles" },
  { id: "Education", label: "Education" },
  { id: "Learning", label: "Learning" },
  { id: "Psychology", label: "Psychology" },
  { id: "Language Development", label: "Language Development" },
  { id: "Parenting", label: "Parenting" },
  { id: "Career Guidance", label: "Career Guidance" },
  { id: "Soft Skills", label: "Soft Skills" },
];

const FilterTabs = ({ activeTab, setActiveTab }) => (
  <div className={styles.bar}>
    <div className={`${styles.inner} container`}>
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tab} ${activeTab == tab.id ? styles.active : ''}`}
          onClick={() => {console.log(tab.id); setActiveTab(tab.id)}}
        >
          {tab.label}
        </button>
      ))}
    </div>
  </div>
);

export default FilterTabs;