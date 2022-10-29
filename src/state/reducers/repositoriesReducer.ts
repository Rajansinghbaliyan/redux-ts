import {ActionType} from "../action-type";
import {Action} from "../action";

interface RepositoryState{
    loading: boolean;
    data: string[];
    error: string | null;
}

const initialState = {
    loading: false,
    data: [],
    error: null
}

const repositoriesReducer = (action: Action) : RepositoryState => {
    switch (action.type){
        case ActionType.SearchRepositories:
        case ActionType.SearchRepositoriesSuccess:
        case ActionType.SearchRepositoriesFailed:
        default:
    }
}