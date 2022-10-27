import {RepositoriesActionEnum} from "./actionsTypes";

interface RepositoriesState {
    loading: boolean;
    data: string[];
    error: string | null;
}

interface SearchRepositoriesAction {
    type: RepositoriesActionEnum.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: RepositoriesActionEnum.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesFailedAction {
    type: RepositoriesActionEnum.SEARCH_REPOSITORIES_FAILED;
    payload: string;
}

const repositoriesReducer = (
    state: RepositoriesState,
    action: SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesFailedAction
): RepositoriesState => {
    switch (action.type) {
        case RepositoriesActionEnum.SEARCH_REPOSITORIES:
            return {loading: true, data: [], error: null};
        case RepositoriesActionEnum.SEARCH_REPOSITORIES_SUCCESS:
            return {loading: false, data: action.payload, error: null};
        case RepositoriesActionEnum.SEARCH_REPOSITORIES_FAILED:
            return {loading: false, data: [], error: action.payload};
        default:
            return state;
    }

}

export default repositoriesReducer;