import React, { useState } from 'react';
import {
    SvgIcon,
    makeStyles,
    Switch
} from '@material-ui/core';
import useSettings from '../../hooks/useSettings';
import { THEMES } from '../../constants';
import Brightness3Icon from '@material-ui/icons/Brightness3';
const useStyles = makeStyles((theme) => ({
    root: {
        width: "75px",
        height: "48px",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    track: {
        width: "40px",
        height: "20px",
        borderRadius: "10px",
        borderStyle: 'solid',
        borderWidth: '4px',
        borderColor: 'grey',
        backgroundColor: 'white'
    },
    switchBase: {
        color: 'black',
        "&$checked": {
            color: "#6e40c9",
            transform: "translateX(30px)",

        },
        "&$checked + $track": {
            backgroundColor: "black",
            borderRadius: "10px",
            borderStyle: 'solid',
            borderWidth: '4px',
            borderColor: '#6e40c9',
        },
    },
    checked: {},
    thumb: {
        width: "25px",
        height: "25px",
        transform: "translateX(15px)",
    },
}));


function Settings() {
    const classes = useStyles();
    const { settings, saveSettings } = useSettings();
    const [state, setState] = useState({
        checkedA: settings.theme === THEMES.ONE_DARK,
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        theme: settings.theme
    });

    const handleTheme = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        if (state.checkedA) {
            state.theme = THEMES.LIGHT
        }
        else {
            state.theme = THEMES.ONE_DARK
        }
        saveSettings(state);
    };

    return (

        <Switch
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                checked: classes.checked,
                track: classes.track,
                thumb: classes.thumb,
            }}
            checked={state.checkedA}
            onChange={handleTheme}
            name="checkedA"
            size="medium"
            checkedIcon={<SvgIcon
                style={{
                    color: '#ffdf5d', backgroundColor: '#6e40c9',
                    borderRadius: '50%',
                    borderStyle: 'solid',
                    borderWidth: '6px',
                    borderColor: '#6e40c9',
                    width: 30,
                    height: 30,
                    transform: "rotate(125deg)"
                }} >

                <Brightness3Icon />
            </SvgIcon>}
            icon={
                <SvgIcon
                    style={{
                        color: '#ffdf5d', backgroundColor: '#263238',
                        borderRadius: '50%',
                        borderStyle: 'solid',
                        borderWidth: '6px',
                        borderColor: '#263238',
                        width: 30,
                        height: 30,
                        transform: "rotate(125deg)"
                    }} >
                    <Brightness3Icon />
                </SvgIcon>}
        >

        </Switch >
    );
}

export default Settings;
