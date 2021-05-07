import React from 'react'
import PresentationOfMenu from '../components/Carousel';
import SectionsOfMenu from '../components/SectionsOfMenu';
import SubMenuList from '../components/SubMenuList';
import TitleOfMenu from '../components/TitleOfMenu';

function Stars(){
    return (
        <div>
            <div>
                <TitleOfMenu title="STARS" />
                <PresentationOfMenu />
                <SubMenuList />
                <SectionsOfMenu />
            </div>
        </div>
    )
}

export default Stars;