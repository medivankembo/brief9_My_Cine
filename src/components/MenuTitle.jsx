import React from 'react'

function MenuTitle({menuTitle}) {
    return (
        <div className="container">
          <div className="row">
            <div className="col-12 text-center"><h2>{menuTitle}</h2></div>
          </div>
        </div>
      );
}

export default MenuTitle
