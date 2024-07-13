import React from 'react';

export const SwitchButtonComponent = () => {

    const handleSwitchButtonChanged = (isChecked: boolean)=> {
        if (isChecked) {
            //localStorage.setItem("mode", "light");
            //body.classList.add("light-mode");
        } else {
            //localStorage.setItem("mode", "dark");
            //body.classList.remove("light-mode");
        }
    };

    // function switchMode() {
    //     let value = localStorage.getItem("mode");
    //     // Si une valeur est déja enregistré alors je la récupère
    //     if (localStorage.getItem("mode") !== null) {
    //         if (value == "light") {
    //             switchButton.checked = true;
    //             localStorage.setItem("mode", "light");
    //             body.classList.add("light-mode");
    //         } else if (value == "dark") {
    //             switchButton.checked = false;
    //             localStorage.setItem("mode", "dark");
    //             body.classList.remove("light-mode");
    //         } else {
    //             console.log("erreur switch mode");
    //         }
    //         // sinon je vérifie une entrée
    //     } else {
    //         switchButton.checked = false;
    //         value = "";
    //         return;
    //     }
    // }

    return (
        <button id="mode" className="function switch-mode mode">
            <div className="power-switch">
                <input id="switch" type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> handleSwitchButtonChanged(e.target.checked)} />
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