export interface ItemProps {
    id: string;
    task: string;
    completed: boolean;
}

export const withHigherOrderComponent = (
    Component: React.ComponentType<{data: ItemProps[]}>
) => (props: any) => <Component {...props} />;
  