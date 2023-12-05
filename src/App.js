import React from "react";
import Router from "./components/Router";
import Toastr from "./components/Toastr";
import AuthProvider from './components/AuthProvider';
import LanguageProvider from "./components/LanguageProvider";
import CityProvider from "./components/CityProvider";
import CityModal from "./components/CityModal";
import BurgerProvider from "./components/BurgerMenuProvider";

function App() {
  return (
    <AuthProvider>
      <BurgerProvider>
        <LanguageProvider>
          <CityProvider>
            <CityModal />
            <Router />
            <Toastr />
          </CityProvider>
        </LanguageProvider>
      </BurgerProvider>
    </AuthProvider>
  );
}

export default App;
