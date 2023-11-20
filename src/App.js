import React from "react";
import Router from "./components/Router";
import Toastr from "./components/Toastr";
import AuthProvider from './components/AuthProvider';
import LanguageProvider from "./components/LanguageProvider";
import CityProvider from "./components/CityProvider";
import CityModal from "./components/CityModal";

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <CityProvider>
          <CityModal />
          <Router />
          <Toastr />
        </CityProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
