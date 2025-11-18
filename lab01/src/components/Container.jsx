import React from 'react';
import useData from "../hooks/UseData";
import useDispatch from '../hooks/UseDispatch';

function Container({ element: Element, data }) {
  const items = useData();
  const dispatch = useDispatch();

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