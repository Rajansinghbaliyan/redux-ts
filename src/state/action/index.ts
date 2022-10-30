import {ActionType} from "../action-type";

interface SearchRepositories{
    type: ActionType.SearchRepositories;
}

interface SearchRepositoriesSuccess{
    type: ActionType.SearchRepositoriesSuccess;
    payload: string[]
}

interface SearchRepositoriesFailed{
    type: ActionType.SearchRepositoriesFailed;
    payload: string | null;
}

export type Action = SearchRepositories | SearchRepositoriesFailed | SearchRepositoriesSuccess;