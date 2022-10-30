import {ActionType} from "../action-type";
import {Action} from "../action";

interface RepositoryState {
    loading: boolean;
    data: string[];
    error: string | null;
}

const initialState = {
    loading: false,
    data: [],
    error: null
}

const repositoriesReducer = (state: RepositoryState, action: Action): RepositoryState => {
    switch (action.type) {
        case ActionType.SearchRepositories:
            return {loading: true, data: [], error: null}
        case ActionType.SearchRepositoriesSuccess:
            return {loading: false, data: action.payload, error: null}
        case ActionType.SearchRepositoriesFailed:
            return {loading: false, data: [], error: action.payload}
        default:
            return state;
    }
}

export default repositoriesReducer;
