import React from 'react';

// HOC component
const withData = (WrappedComponent: React.ComponentType<{ data: { id: number; name: string }[] }>) => {
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ];

  return (props: any) => <WrappedComponent data={data} {...props} />;
};

// Base component
const ListComponent: React.FC<{ data: { id: number; name: string }[] }> = ({ data }) => (
  <ul>
    {data.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

// Usage
export const EnhancedListComponent = withData(ListComponent);