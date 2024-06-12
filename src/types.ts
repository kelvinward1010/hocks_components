export interface ItemProps {
    id: string;
    task: string;
    completed: boolean;
}

export interface IBaseList {
    isLoading: boolean;
    data: ItemProps[];
}