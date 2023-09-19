import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

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
import TDIB08 from './Processing/thedotisblack/thedotisblack08';
import TDIB09 from './Processing/thedotisblack/thedotisblack09';

import STEP01 from './Processing/vince/step01';
import STEP02 from './Processing/vince/step02';

function App() {
  return (
    <div className={styles.Background}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<GalleryHome />} />
            <Route path="tdib-01" element={
              <GalleryPage
                header="GENERATIVE CIRCLE"
                process={TDIB01}
                hyperlink="https://www.youtube.com/watch?v=UZoVBMgzULk"
                description="Ep.1 Processing art tutorial | GENERATIVE CIRCLE with line and loop"
              />
            } />
            <Route path="tdib-02" element={
              <GalleryPage
                header="GRID"
                process={TDIB02}
                hyperlink="https://www.youtube.com/watch?v=1dPFgWT2Aio"
                description="Ep.2 Processing art tutorial | GRID"
              />
            } />
            <Route path="tdib-03" element={
              <GalleryPage
                header="VERA MOLNAR ALGORITHM"
                process={TDIB03}
                hyperlink="https://www.youtube.com/watch?v=O5G4SoWBoao"
                description="Ep.3 Processing art tutorial | VERA MOLNAR ALGORITHM"
              />
            } />
            <Route path="tdib-04" element={
              <GalleryPage
                header="GRID WITH WHILE LOOP AND COLOR"
                process={TDIB04}
                hyperlink="https://www.youtube.com/watch?v=nYI5TOWXJEM"
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
          <Route path="vince-02" element={
            <GalleryPage
              header="STEP 02 | EYE + NERVOUS CIRCLE"
              process={STEP02}
              description="Step 2"
            />
          } />
          <Route path="tdib-08" element={
            <GalleryPage
              header="RANDOM WALKER"
              process={TDIB08}
              hyperlink="https://www.youtube.com/watch?v=9ZL9qSag7CY"
              description="Ep.8 Processing art tutorial | Random Walker (Class) | Object-Oriented Programming"
            />
          } />
          <Route path="tdib-09" element={
            <GalleryPage
              header="GRID + ROTATE/SCALE"
              process={TDIB09}
              hyperlink="https://www.youtube.com/watch?v=Y1D-0whVBac"
              description="Ep.9 Processing 3D tutorial | Grid with rotateX, rotateY and scale"
            />
          } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

