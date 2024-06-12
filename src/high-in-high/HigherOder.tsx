import { IBaseList } from "../types";

// ----III ----

export const withLoadingFeedBack = (feedback?: string) => (Component: React.ComponentType<{data: IBaseList}>) => (props: any) => {
    if (props?.data.isLoading) return <div>{feedback || 'Loading...'}</div>
    return <Component {...props} />;
}

export const withNodataFeedBack = (Component: React.ComponentType<{data: IBaseList}>) => (props: any) => {
    if (!props?.data?.data) return <div>Loading...</div>
    return <Component {...props} />;
}

export const withDataEmptyFeedBack = (Component: React.ComponentType<{data: IBaseList}>) => (props: any) => {
    if (!props?.data?.data?.length) return <div>Loading...</div>
    return <Component {...props} />;
}