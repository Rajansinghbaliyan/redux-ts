import {ActionType} from "../action-type";
import {AnyAction} from "redux";

interface SearchRepositories extends AnyAction{
    type: ActionType.SearchRepositories;
}

interface SearchRepositoriesSuccess extends AnyAction{
    type: ActionType.SearchRepositoriesSuccess;
    payload: string[]
}

interface SearchRepositoriesFailed extends AnyAction{
    type: ActionType.SearchRepositoriesFailed;
    payload: string | null;
}

export type Action = SearchRepositories | SearchRepositoriesFailed | SearchRepositoriesSuccess;