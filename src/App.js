import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Components/Layout';
import GalleryHome from './Components/GalleryHome';
import GalleryPage from './Components/GalleryPage';

import TDIB01 from './Processing/thedotisblack01';
import TDIB02 from './Processing/thedotisblack02';
import TDIB03 from './Processing/thedotisblack03';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GalleryHome />} />
          <Route path="01" element={
            <GalleryPage
              header="GENERATIVE CIRCLE"
              process={TDIB01}
              hyperlink="https://www.youtube.com/watch?v=UZoVBMgzULk&list=PLbLdd1fdNg5zPBMYYZLO2JVqMrBkK5Lux&index=5"
              description="Ep.1 Processing tutorial | GENERATIVE CIRCLE with line and loop"
            />
          } />
          <Route path="02" element={
            <GalleryPage
              header="GRID"
              process={TDIB02}
              hyperlink="https://www.youtube.com/watch?v=1dPFgWT2Aio&list=PLbLdd1fdNg5zPBMYYZLO2JVqMrBkK5Lux&index=6"
              description="Ep.2 Processing tutorial | GRID"
            />
          } />
          <Route path="03" element={
            <GalleryPage
              header="VERA MOLNAR ALGORITHM"
              process={TDIB03}
              hyperlink="https://www.youtube.com/watch?v=O5G4SoWBoao&list=PLbLdd1fdNg5zPBMYYZLO2JVqMrBkK5Lux&index=7"
              description="Ep.3 Processing tutorial | VERA MOLNAR ALGORITHM"
            />
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

