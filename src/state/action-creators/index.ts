import {ActionType} from "../action-types";
import axios from "axios";
import {RepositoriesResponse} from "../../types";
import {SEARCH_API} from "../../constants";
import {Dispatch} from "react";
import {Action} from "../action";


const searchRepositories = (term: string, size: number) => async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
        const {data}: { data: RepositoriesResponse } = await axios.get(SEARCH_API, {
            params: {
                text: term,
                size: size,
            }
        });

        const names = data.objects.map(d => d.package.name);

        dispatch({
            type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
            payload: names,
        });

    } catch (err: any) {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES_FAILED,
            payload: err.message,
        })
    }
}

export default searchRepositories;