import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Taksh</span>
          Hii how are you?
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__receiver chat__message">
          <span className="chat__name">Tushya</span>
         I'm Fine Wbu?
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Taksh</span>
          I'm fine. So how is College Going on?
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p><p className="chat__message chat__receiver " >
          <span className="chat__name">Tushya</span>
          so far It's going pretty good 
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Taksh</span>
          Nice
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver " >
          <span className="chat__name">Tushya</span>
          I'll Talk to you later
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Type a Message" type="text" />
          <button type="submit">Send a Message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
