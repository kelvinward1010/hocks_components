import { DataFetch } from "./data/DataFetch";
import { EnhancedListComponent } from "./Hoc_cpnt2";


const multiply = (multiplier: number) => (multiplicand: number) =>
  multiplicand * multiplier;

const subtract = (minuend: number) => (subtrahend: number) =>
  subtrahend - minuend;

const compose = (...functions: { (subtrahend: number): number; (multiplicand: number): number; }[]) => 
  (initialValue: any) => functions.reduceRight((acc, fn) => fn(acc), initialValue);

const test = [1,2,3,4,5]
const total = test.reduceRight((acc, currentValue) => acc + currentValue, 0);

const App = () => {

  const product = multiply(3)(4);
  const result = compose(subtract(2), multiply(3))(4)

  return (
    <div>
      <DataFetch />
    </div>
  );
};

export default App

