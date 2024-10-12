import React, {useState} from 'react';
import {ILocalStorageService} from "../../../../shared/services/ILocalStorageService";

type SwitchButtonComponentProps = {
    localStorageService: ILocalStorageService;
}

export const SwitchButtonComponent = ({localStorageService}: SwitchButtonComponentProps) => {
    const [isLightMode, setIsLightMode] = useState(false);

    return (
        <button id="mode" className="function switch-mode mode">
            <div className="power-switch">
                <input id="switch" type="checkbox" checked={isLightMode} onChange={()=> setIsLightMode(prevState => !prevState)} />
                <div className="button">
                    <svg className="power-off">
                        <use xlinkHref="#line" className="line" />
                        <use xlinkHref="#circle" className="circle" />
                    </svg>
                    <svg className="power-on">
                        <use xlinkHref="#line" className="line" />
                        <use xlinkHref="#circle" className="circle" />
                    </svg>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                <symbol
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    id="line"
                >
                    <line x1="75" y1="34" x2="75" y2="58" />
                </symbol>
                <symbol
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    id="circle"
                >
                    <circle cx="75" cy="80" r="35" />
                </symbol>
            </svg>
        </button>
    );
};