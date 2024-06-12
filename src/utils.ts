type ComposableFunction<T> = (...args: T[]) => T;

export const composeComponents = <T>(...fns: ComposableFunction<T>[]) => {
    return fns.reduceRight((prevFn, nextFn) => (...args: T[]) => nextFn(prevFn(...args)),
        (value: T) => value
    );
};
