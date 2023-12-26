import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { darkmode, lightmode } from '../../redux/DarkmodeReducer';

const Darkmode = () => {

    const dispatch = useDispatch();

    const isDarkMode = useSelector((state) => state.darkmode.isDarkmode);


    const darkmodeHandle = () => {
        if (isDarkMode) {
            dispatch(lightmode());
        } else {
            dispatch(darkmode());
        }
    }

    return (
        <div>
            <DarkModeComponent>
                <div class="form-check form-switch">
                    <label htmlFor="flexSwitchCheckChecked">{isDarkMode ? 'LightMode' : 'DarkMode'}</label>
                    <input onClick={darkmodeHandle} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isDarkMode} />
                </div>
            </DarkModeComponent>
        </div>
    )
}

const DarkModeComponent = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 2px 20px 2px 0;
    
`

export default Darkmode
