import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ColorPalette from "./ColorPalette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page";
import SeedColors from "./SeedColors";

function App() {
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  const savedPalettes = JSON.parse(window.localStorage.getItem("Palettes"));

  const [palettes, setPalettes] = useState(savedPalettes || SeedColors);

  useEffect(() => {
    window.localStorage.setItem("Palettes", JSON.stringify(palettes));
  }, [palettes]);

  const removePalette = (id) => {
    setPalettes(palettes.filter((palette) => palette.id !== id));
  };

  const location = useLocation();

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={500}>
          <Routes location={location}>
            <Route
              path="/palette/new"
              element={
                <Page>
                  <NewPaletteForm
                    savePalette={savePalette}
                    palettes={palettes}
                  />
                </Page>
              }
            />
            {/* THE ORDER OF THE ROUTES MATTER!!! */}
            <Route
              path="/"
              element={
                <Page>
                  <PaletteList
                    palettes={palettes}
                    removePalette={removePalette}
                  />
                </Page>
              }
            />
            <Route
              path="/palette/:id"
              element={
                <Page>
                  <ColorPalette palettes={palettes} />
                </Page>
              }
            />
            <Route
              path="/palette/:paletteId/:colorId"
              element={
                <Page>
                  <SingleColorPalette palettes={palettes} />
                </Page>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
