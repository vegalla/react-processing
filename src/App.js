import styles from './App.module.css';
import TDIB01 from './Processing/thedotisblack01';

function App() {
  return (
    <div className={styles.App}>
      <div>
        <div className={styles.Header}>
          GENERATIVE CIRCLE
        </div>
        <TDIB01 />
        <div className={styles.Description}>
          adapted from <a href="https://www.youtube.com/@thedotisblack">thedotisblack</a><br />
          <a href="https://www.youtube.com/watch?v=UZoVBMgzULk&list=PLbLdd1fdNg5zPBMYYZLO2JVqMrBkK5Lux&index=5">Ep.1 Processing Tutorial | GENERATIVE CIRCLE with line and loop</a>
        </div>
      </div>
    </div>
  );
}

export default App;
