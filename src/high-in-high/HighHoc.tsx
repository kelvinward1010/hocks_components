import { IBaseList } from "../types"

// ----II ----

export const withConditionalFeedbackHigh = 
(loadingFeedBack?: string, noDataFeedBack?: string, dataEmptyFeedback?: string) => 
(Component: React.ComponentType<{data: IBaseList}>) => 
(props: any) => {
    console.log(props)
    if (props?.isLoading) return <div>{loadingFeedBack || 'Loading...'}</div>
    if (!props?.data?.data) return <div>{noDataFeedBack || 'No data loaded yet'}</div>
    if (!props?.data?.data.length) return <div>{dataEmptyFeedback || 'Data is empty'}</div>
    return <Component {...props} />
}