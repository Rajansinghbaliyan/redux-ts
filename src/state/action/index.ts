import {ActionType} from "../action-type";

interface SearchRepositories{
    type: ActionType.SearchRepositories;
}

interface SearchRepositoriesSuccess{
    type: ActionType.SearchRepositoriesSuccess;
    data: string[]
}

interface SearchRepositoriesFailed{
    type: ActionType.SearchRepositoriesFailed;
    data: string | null;
}

export type Action = SearchRepositories | SearchRepositoriesFailed | SearchRepositoriesSuccess;