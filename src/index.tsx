import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/styles/index.scss';
import {App} from "./App";
import {Provider} from "react-redux";
import {store} from "./shared/store/store";
import {EngineProvider} from "./shared/providers/EngineProvider";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
        <Provider store={store}>
        <EngineProvider>
              <React.StrictMode>
                <App />
              </React.StrictMode>
        </EngineProvider>
    </Provider>
);
