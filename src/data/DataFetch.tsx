import { withHigherOrderComponent } from "../hoc_cpnt";
import { BaseTodoList, TODOS } from "./TodoList";


const fetchData = () => {
    return { data: TODOS, isLoading: false };
};

const TodoList = withHigherOrderComponent(BaseTodoList);

export function DataFetch() {
    const { data, isLoading } = fetchData();

    if (isLoading) return <div>Loading data.</div>;

    return (
        <TodoList data={data}  />
    )
}