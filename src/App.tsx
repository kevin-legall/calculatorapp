import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {CalculatorLayout} from "./shared/layouts/CalculatorLayout";
import {HistoryLayout} from "./shared/layouts/HistoryLayout";
import {ConvertisseurLayout} from "./shared/layouts/ConvertisseurLayout";
import {NavbarComponent} from "./features/navbar/components/NavbarComponent";

// dependencies
import {NavigationManager} from "./features/navbar/managers/NavigationManager";
import {useAppSelector} from "./shared/hooks/useAppSelector";

export const App:React.FC = () => {
    const lightTheme = useAppSelector((state)=> state.settings.isLightMode);

  return (
      <div className={lightTheme ? "light-mode" : "dark-mode"}>
          <BrowserRouter>
            <NavbarComponent navigationManager={new NavigationManager()}/>
            <Routes>
                <Route path={"/calculatrice"} element={<CalculatorLayout />}></Route>
                <Route path={"/historique"} element={<HistoryLayout />}></Route>
                <Route path={"/convertisseur"} element={<ConvertisseurLayout />}></Route>
                <Route path={"*"} element={<Navigate to={"/calculatrice"} replace />}></Route>
            </Routes>
          </BrowserRouter>
      </div>
  )
};