import React from 'react'
import PresentationOfMenu from '../components/PresentationOfMenu';
import SubMenuList from '../components/SubMenuList';
import TitleOfMenu from '../components/TitleOfMenu';

function Star(){
    return (
        <div>
            <div>
                <TitleOfMenu title="STARS" />
                <PresentationOfMenu />
                <SubMenuList />
            </div>
        </div>
    )
}

export default Star;