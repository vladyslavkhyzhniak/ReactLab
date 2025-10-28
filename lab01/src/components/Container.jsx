import React, { useContext, useReducer } from 'react';
import AppContext from "../data/AppContext";
import AppReducer from "../data/AppReducer";

function Container({ element: Element, data }) {
  const context = useContext(AppContext);
  const [items, dispatch] = context
    ? [context.items, context.dispatch]
    : useReducer(AppReducer, data);

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

export default Container;
