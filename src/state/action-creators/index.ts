import {Dispatch} from "react";
import {Action} from "../action";
import {ActionType} from "../action-type";
import axios from "axios";

const searchRepositories = (term: string, size: number) => async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.SearchRepositories});

    try {
        const {} = axios.get<>()
    } catch (err: any){
        dispatch({type: ActionType.SearchRepositoriesFailed, payload: err.message})
    }

}