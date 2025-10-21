import React, { useReducer } from 'react';
import AppReducer from '../data/AppReducer';

function MyContainer({ element: Element, data }) {
  const [items, dispatch] = useReducer(AppReducer, data);

  return (
    <div className="container d-flex flex-wrap">
      {items.map(item => (
        <Element
          key={item.id}
          {...item}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default MyContainer;
