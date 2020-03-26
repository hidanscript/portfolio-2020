import React from 'react';
import { Redirect } from 'react-router-dom';
import ChatPanel from '../../Components/ChatPanel';
import ChatScreen from '../../Components/ChatScreen';

import './index.css';

function ChatBoard() {

    const isLogged = sessionStorage.getItem("user_id");

    if(isLogged) {
        return (
            <div className="chat-screen-main">
                <div className="bg-bar"></div>
                <div className="app-chat" >
                    <div className="chat-board">
                        <ChatPanel />
                        <ChatScreen />
                    </div>
                </div>
            </div>
        );
    } else {
        return <Redirect to="/login" />;
    }
}

export default ChatBoard
