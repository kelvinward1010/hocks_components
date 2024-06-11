import { ItemProps } from "../hoc_cpnt";

export const TODOS = [
    { id: '1', task: 'Do this', completed: true },
    { id: '2', task: 'Do that', completed: false },
];


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

const TodoItem = (item: any) => {
    return (
        <li>
            {item?.item?.task}
        </li>
    );
};