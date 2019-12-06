import React from 'react';

export default (props) =>
{
  const { route } = props;
  return <>
    {route.path === '/' && <div className="loader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
      <div>
        <div>Booting, please wait...</div>
        <div className='loader-app-details'>
          {route._title}
        </div>
      </div>
    </div>}
  </>;
};
