import React from 'react'
import MenuTitle from './MenuTitle'
import SubMenuList from './SubMenuList'
import Carousel from './Carousel'

function HeadOhAMenu({menuTitle}) {
    return (
        <div className="page-presentation">
            <MenuTitle className="" menuTitle = {menuTitle}/>
            <SubMenuList />
            <Carousel />
        </div>
    )
}

export default HeadOhAMenu
