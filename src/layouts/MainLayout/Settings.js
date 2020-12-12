import React, { useState, useRef } from 'react';
import { capitalCase } from 'change-case';
import {
    Badge,
    Box,
    Button,
    IconButton,
    Popover,
    SvgIcon,
    TextField,
    Tooltip,
    Typography,
    makeStyles,
    Switch
} from '@material-ui/core';
import { Settings as SettingsIcon } from 'react-feather';
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
    const ref = useRef(null);
    const { settings, saveSettings } = useSettings();
    const [isOpen, setOpen] = useState(false);
    const [values, setValues] = useState({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        theme: settings.theme
    });
    const [state, setState] = React.useState({
        checkedA: values.theme === THEMES.ONE_DARK,
    });

    const handleTheme = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        if (state.checkedA) {
            values.theme = THEMES.LIGHT
        }
        else {
            values.theme = THEMES.ONE_DARK
        }
        saveSettings(values);
    };

    return (
        <>

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
                size="large"
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
                            color: '#ffdf5d', backgroundColor: 'black',
                            borderRadius: '50%',
                            borderRadius: '50%',
                            borderStyle: 'solid',
                            borderWidth: '6px',
                            borderColor: 'black',
                            width: 30,
                            height: 30,
                            transform: "rotate(125deg)"
                        }} >

                        <Brightness3Icon />
                    </SvgIcon>}
            >

            </Switch >
        </>
    );
}

export default Settings;
