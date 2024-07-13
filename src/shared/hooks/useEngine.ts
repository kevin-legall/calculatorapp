import {createContext, useContext} from "react";
import {CEngineFacade} from "../../CEngine/Infrastructure/Facade/CEngineFacade";

// const EngineContext = createContext<CEngineFacade | null>(null);

// export const useEngine = () => {
//     const context = useContext(EngineContext);
//     if (context === null) {
//         throw new Error('useEngine doit être utilisé dans un EngineProvider');
//     }
//     return context;
// };