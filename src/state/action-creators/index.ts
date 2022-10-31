import {ActionType} from "../action-type";
import axios from "axios";
import {RepositoriesResponse} from "../../types";
import {SEARCH_API} from "../../constants";
import {AppDispatch} from "../store";
import {Action, Dispatch} from "redux";

export const searchRepositories = (term: string, size: number) => async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.SearchRepositories});
    try {
        const response = await axios.get<RepositoriesResponse>(SEARCH_API, {
            params: {
                text: term,
                size: size
            }
        })
        const packages = response.data.objects;
        const names = packages.map(p => p.package.name);
        dispatch({type: ActionType.SearchRepositoriesSuccess, payload: names})
    } catch (err: any) {
        dispatch({type: ActionType.SearchRepositoriesFailed, payload: err.message})
    }
}

