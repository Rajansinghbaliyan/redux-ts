import React, {ReactElement} from "react";
import { Provider } from "react-redux";
import {store} from "../state";

const App:React.FC = (): ReactElement => {
    return <Provider store={store}>
        <div>
            <h1>Search npm Repositories</h1>
        </div>
    </Provider>
}

export default App;