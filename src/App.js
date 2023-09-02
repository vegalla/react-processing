import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './App.module.css';

import Layout from './Components/Layout';
import GalleryHome from './Components/GalleryHome';
import GalleryPage from './Components/GalleryPage';

import TDIB01 from './Processing/thedotisblack/thedotisblack01';
import TDIB02 from './Processing/thedotisblack/thedotisblack02';
import TDIB03 from './Processing/thedotisblack/thedotisblack03';
import TDIB04 from './Processing/thedotisblack/thedotisblack04';
import TDIB05 from './Processing/thedotisblack/thedotisblack05';
import TDIB06 from './Processing/thedotisblack/thedotisblack06';
import TDIB07 from './Processing/thedotisblack/thedotisblack07';

import STEP01 from './Processing/vince/step01';

function App() {
  return (
    <div className={styles.Background}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<GalleryHome />} />
            <Route path="tdib-01" element={
              <GalleryPage
                header="GENERATIVE CIRCLE"
                process={TDIB01}
                hyperlink="https://www.youtube.com/watch?v=UZoVBMgzULk&list=PLbLdd1fdNg5zPBMYYZLO2JVqMrBkK5Lux&index=5"
                description="Ep.1 Processing art tutorial | GENERATIVE CIRCLE with line and loop"
              />
            } />
            <Route path="tdib-02" element={
              <GalleryPage
                header="GRID"
                process={TDIB02}
                hyperlink="https://www.youtube.com/watch?v=1dPFgWT2Aio&list=PLbLdd1fdNg5zPBMYYZLO2JVqMrBkK5Lux&index=6"
                description="Ep.2 Processing art tutorial | GRID"
              />
            } />
            <Route path="tdib-03" element={
              <GalleryPage
                header="VERA MOLNAR ALGORITHM"
                process={TDIB03}
                hyperlink="https://www.youtube.com/watch?v=O5G4SoWBoao&list=PLbLdd1fdNg5zPBMYYZLO2JVqMrBkK5Lux&index=7"
                description="Ep.3 Processing art tutorial | VERA MOLNAR ALGORITHM"
              />
            } />
            <Route path="tdib-04" element={
              <GalleryPage
                header="GRID WITH WHILE LOOP AND COLOR"
                process={TDIB04}
                hyperlink="https://www.youtube.com/watch?v=nYI5TOWXJEM&list=RDCMUCX4GSh1gpRuugPpjxu0gLmw&index=1"
                description="Ep.4 Processing art tutorial | GRID with while loop and color"
              />
            } />
            <Route path="tdib-05" element={
              <GalleryPage
                header="ROTATE + SCALE"
                process={TDIB05}
                hyperlink="https://www.youtube.com/watch?v=AUddj9kzyyY"
                description="Ep.5 Processing art tutorial | ROTATE + SCALE"
              />
            } />
            <Route path="tdib-06" element={
              <GalleryPage
                header="OPTICAL ILLUSION | ROTATE + SCALE"
                process={TDIB06}
                hyperlink="https://www.youtube.com/watch?v=zYgfVHKgfpY"
                description="Ep.6 Processing art tutorial | Optical Illusion | ROTATE + SCALE"
              />
            } />
            <Route path="tdib-07" element={
              <GalleryPage
                header="NERVOUS RECTANGLE"
                process={TDIB07}
                hyperlink="https://www.youtube.com/watch?v=ln9bF2QfP14"
                description="Ep.7 Processing art tutorial | NERVOUS RECTANGLE | Random Walker"
              />
            } />
          </Route>
            <Route path="vince-01" element={
              <GalleryPage
                header="STEP 01 | GRID + NERVOUS CIRCLE"
                process={STEP01}
                description="Step 1"
              />
            } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

