import React, {useEffect, useState} from 'react';
import {NavbarEnum} from "../models/enums/NavbarEnum";
import {NavLink, useLocation} from "react-router-dom";
import {INavigationManager} from "../managers/INavigationManager";

interface Manager {
    navigationManager: INavigationManager
}

export const NavbarComponent = ({ navigationManager }: Manager) => {

    const location = useLocation();
    const [lineStyle, setLineStyle] = useState<number>(0);

    useEffect(() => {
        let navbarEnum :NavbarEnum = navigationManager.getLocation(location);
        handleNavbarStyle(navbarEnum);
    }, []);

    const handleNavbarStyle = (navbarEnum: NavbarEnum) => {
        switch (navbarEnum) {
            case NavbarEnum.CALCULATRICE : setLineStyle(0) ; break;
            case NavbarEnum.HISTORIQUE : setLineStyle(33); break;
            case NavbarEnum.CONVERTISSEUR : setLineStyle(67); break;
            default : setLineStyle(0);
        }
    }

    return (
        <nav data-test="navigation">
            <ul className="nav-ul">
                <li><NavLink data-test-id="navigation-calculatrice" to={'/calculatrice'} onClick={()=> handleNavbarStyle(NavbarEnum.CALCULATRICE)}
                             className={(nav) => (nav.isActive ? "nav-active" : "nav")}>Calculatrice</NavLink></li>
                <li><NavLink data-test-id="navigation-historique" to={'/historique'}  onClick={()=> handleNavbarStyle(NavbarEnum.HISTORIQUE)}
                             className={(nav) => (nav.isActive ? "nav-active" : "nav")}>Historique</NavLink></li>
                <li><NavLink data-test-id="navigation-convertisseur" to={'/convertisseur'} onClick={()=> handleNavbarStyle(NavbarEnum.CONVERTISSEUR)}
                             className={(nav) => (nav.isActive ? "nav-active" : "nav")}>Convertisseur</NavLink></li>
            </ul>
            <div className="nav-line">
                <div className="colored-line" data-test-id="colored-line" style={{left: `${lineStyle}%`}}></div>
            </div>
        </nav>
    );
};