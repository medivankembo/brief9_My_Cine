import React from 'react'

function SubMenuTitle({title, message}) {
    return (
        <div className="note note-primary w-50 align-items-center">
            <div className="h4">{title}</div>
            <div className="h6">{message}</div>
        </div>
    )
}

export default SubMenuTitle
