import React, {createContext, useContext, useEffect, useState} from "react";
import {CalculatorMediator} from "../../CEngine/Infrastructure/CalculatorMediator";
import {CEngineFacade} from "../../CEngine/Infrastructure/Facade/CEngineFacade";
import {DigitHandler} from "../../CEngine/Infrastructure/Handlers/DigitHandler";
import {OperatorHandler} from "../../CEngine/Infrastructure/Handlers/OperatorHandler";
import {CalculatorActionFactory} from "../../CEngine/Infrastructure/Factories/CalculatorActionFactory";
import CalculatorSpinner from "../components/CalculatorSpinner";
import {EqualHandler} from "../../CEngine/Infrastructure/Handlers/EqualHandler";
import {ClearHandler} from "../../CEngine/Infrastructure/Handlers/ClearHandler";
import {PercentageHandler} from "../../CEngine/Infrastructure/Handlers/PercentageHandler";
import {VirguleHandler} from "../../CEngine/Infrastructure/Handlers/VirguleHandler";
import {PuissanceHandler} from "../../CEngine/Infrastructure/Handlers/PuissanceHandler";
import {ParentheseHandler} from "../../CEngine/Infrastructure/Handlers/ParentheseHandler";

const EngineContext = createContext<CEngineFacade | null>(null);

export const EngineProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [engine, setEngine] = useState<CEngineFacade | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            // instanciation des parties du moteur
            console.log("Démarrage du moteur...");
            const mediator = new CalculatorMediator();
            const factory = new CalculatorActionFactory();
            const digitHandler = new DigitHandler();
            const operatorHandler = new OperatorHandler();
            const equalHandler = new EqualHandler();
            const clearHandler = new ClearHandler();
            const percentageHandler = new PercentageHandler();
            const virguleHandler = new VirguleHandler();
            const puissanceHandler = new PuissanceHandler();
            const parentheseHandler = new ParentheseHandler();

            // inscription des handlers au mediator
            mediator.registerHandler(digitHandler);
            mediator.registerHandler(operatorHandler);
            mediator.registerHandler(virguleHandler);
            mediator.registerHandler(percentageHandler);
            mediator.registerHandler(puissanceHandler);
            mediator.registerHandler(parentheseHandler);
            mediator.registerHandler(clearHandler);
            mediator.registerHandler(equalHandler);

            console.log('handlers trouvés :', mediator.getHandlers());

            // montage de la chaine de responsabilité
            digitHandler.setNext(operatorHandler);
            operatorHandler.setNext(virguleHandler);
            virguleHandler.setNext(percentageHandler);
            percentageHandler.setNext(puissanceHandler);
            puissanceHandler.setNext(parentheseHandler);
            parentheseHandler.setNext(clearHandler);
            clearHandler.setNext(equalHandler);
            setEngine(new CEngineFacade(mediator, factory));
        }
        catch (e) {
            console.error('Une erreur est survenue lors du démarrage du moteur', e);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <>
            { isLoading ? (
                    <CalculatorSpinner />
                        ) : (
                    <EngineContext.Provider value={engine}>
                        {children}
                    </EngineContext.Provider>
                )
            }
        </>
    );
};

export const useEngine = () => {
    const context = useContext(EngineContext);
    if (context === null) {
        throw new Error('useEngine doit être utilisé dans un EngineProvider');
    }
    return context;
};
