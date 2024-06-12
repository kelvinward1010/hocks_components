import { TODOS } from "../data";
import { withDataEmptyFeedBack, withLoadingFeedBack, withNodataFeedBack } from "../high-in-high/HigherOder";
import { withConditionalFeedbackHigh } from "../high-in-high/HighHoc";
import { withHigherOrderComponent } from "../hoc_cpnt";
import { composeComponents } from "../utils";
import { BaseTodoList, BaseTodoList2} from "./TodoList";


const fetchData = () => {
    return { data: TODOS, isLoading: false };
};

// I
const TodoList = withHigherOrderComponent('Data is empty!')(BaseTodoList);
// II

const TodoList2 = withConditionalFeedbackHigh(
    'Loading Todos.',
    'No Todos loaded yet.',
    'Todos are empty.',
)(BaseTodoList2);

// III
const TodoList3 = withLoadingFeedBack('Loading data...')(
    withNodataFeedBack(
      withDataEmptyFeedBack(BaseTodoList2)
    )
);

const TodoList3plus = composeComponents(
    withLoadingFeedBack('Loading data...'),
    withNodataFeedBack,
    withDataEmptyFeedBack
)(BaseTodoList2)

export function DataFetch() {
    const { data, isLoading } = fetchData();

    const draft = {
        isLoading: isLoading,
        data: data,
    }

    if (isLoading) return <div>Loading data.</div>;

    return (
        <TodoList3plus data={draft}/>
    )
}