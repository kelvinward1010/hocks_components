import { ItemProps } from "./types";


// ----I ----

export const withHigherOrderComponent = (dataEmptyFeedback: any) => (
    Component: React.ComponentType<{data: ItemProps[]}>
) => (props: any) => {
    if (!props.data) return <div>No data loaded yet.</div>;
    if(!props?.data?.length) return <div>{dataEmptyFeedback}</div>
    return <Component {...props} />
};
  