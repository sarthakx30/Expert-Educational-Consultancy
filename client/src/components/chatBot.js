import React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import ChatBot from 'react-simple-chatbot';
import ChatBotImage from '../images/chatbot.png';


const ChatBotComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const steps = [
        {
            id: '0',
            message: 'Welcome to react chatbot!',
            trigger: '1',
        },
        {
            id: '1',
            message: 'Bye!',
            end: true,
        },
    ];

    return (
        <>
            <Button
                style={{
                    position: "fixed",
                    bottom: 20,
                    right: 30,
                    background: "orange",
                    borderRadius: "50%",
                    padding: "0px",
                    width: "60px",
                    height: "60px"
                }}
                aria-describedby={id} onClick={handleClick}>
                <img src={ChatBotImage} style={{ width: 100, height: 100 }} />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <ChatBot steps={steps} />
            </Popover>
        </>
    );
}

export default ChatBotComponent;