import React from 'react';

const ErrorExample = () => {
  let title = 'random title'


  // no rerender and doesn't save new title
  const handleClick = () => {
    title = 'hello people'
    console.log(title)
  }
  return (
    <>
  <button type="button" className="btn" onClick={handleClick}>{title}</button>
  </>
  );
};

export default ErrorExample;
