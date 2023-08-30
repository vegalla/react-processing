import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './App.module.css';

import Layout from './Components/Layout';
import GalleryHome from './Components/GalleryHome';
import GalleryPage from './Components/GalleryPage';

import TDIB01 from './Processing/thedotisblack01';
import TDIB02 from './Processing/thedotisblack02';
import TDIB03 from './Processing/thedotisblack03';
import TDIB04 from './Processing/thedotisblack04';
import TDIB05 from './Processing/thedotisblack05';
import TDIB06 from './Processing/thedotisblack06';

function App() {
  return (
    <div className={styles.Background}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<GalleryHome />} />
            <Route path="01" element={
              <GalleryPage
                header="GENERATIVE CIRCLE"
                process={TDIB01}
                hyperlink="https://www.youtube.com/watch?v=UZoVBMgzULk&list=PLbLdd1fdNg5zPBMYYZLO2JVqMrBkK5Lux&index=5"
                description="Ep.1 Processing art tutorial | GENERATIVE CIRCLE with line and loop"
              />
            } />
            <Route path="02" element={
              <GalleryPage
                header="GRID"
                process={TDIB02}
                hyperlink="https://www.youtube.com/watch?v=1dPFgWT2Aio&list=PLbLdd1fdNg5zPBMYYZLO2JVqMrBkK5Lux&index=6"
                description="Ep.2 Processing art tutorial | GRID"
              />
            } />
            <Route path="03" element={
              <GalleryPage
                header="VERA MOLNAR ALGORITHM"
                process={TDIB03}
                hyperlink="https://www.youtube.com/watch?v=O5G4SoWBoao&list=PLbLdd1fdNg5zPBMYYZLO2JVqMrBkK5Lux&index=7"
                description="Ep.3 Processing art tutorial | VERA MOLNAR ALGORITHM"
              />
            } />
            <Route path="04" element={
              <GalleryPage
                header="GRID WITH WHILE LOOP AND COLOR"
                process={TDIB04}
                hyperlink="https://www.youtube.com/watch?v=nYI5TOWXJEM&list=RDCMUCX4GSh1gpRuugPpjxu0gLmw&index=1"
                description="Ep.4 Processing art tutorial | GRID with while loop and color"
              />
            } />
            <Route path="05" element={
              <GalleryPage
                header="ROTATE + SCALE"
                process={TDIB05}
                hyperlink="https://www.youtube.com/watch?v=AUddj9kzyyY"
                description="Ep.5 Processing art tutorial | ROTATE + SCALE"
              />
            } />
            <Route path="06" element={
              <GalleryPage
                header="OPTICAL ILLUSION | ROTATE + SCALE"
                process={TDIB06}
                hyperlink="https://www.youtube.com/watch?v=zYgfVHKgfpY"
                description="Ep.6 Processing art tutorial | Optical Illusion | ROTATE + SCALE"
              />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

