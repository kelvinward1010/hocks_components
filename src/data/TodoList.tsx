import { IBaseList, ItemProps } from "../types";

export const BaseTodoList: React.FC<{data: ItemProps[]}> = ({
    data
}) => {
    return (
        <ul>
            {data.map((item: any) => (
                <TodoItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export const BaseTodoList2: React.FC<{data: IBaseList}> = ({
    data
}) => {
    return (
        <ul>
            {data?.data.map((item: any) => (
                <TodoItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

const TodoItem = (item: any) => {
    return (
        <li>
            {item?.item?.task}
        </li>
    );
};