import {Dispatch} from "react";
import {Action} from "../action";
import {ActionType} from "../action-type";

const searchRepositories = (term: string, size: number) => async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.SearchRepositories});


}