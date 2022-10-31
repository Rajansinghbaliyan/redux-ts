import {bindActionCreators, Dispatch} from "redux";
import {actionCreators} from "../state";

const useActions  = (dispatch:Dispatch) => {
    return  bindActionCreators(actionCreators,dispatch);
}

export default useActions;