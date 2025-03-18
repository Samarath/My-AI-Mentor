"use client";

import { useState } from "react";
import {
  Drawer,
  IconButton,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Close as CloseIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Message as MessageIcon,
  MoreVert as MoreVertIcon,
  Star as StarIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import classes from "@/app/(main)/my-journey/my-journey.module.scss";
import ClearChatModel from "../model/clear-chat-model/ClearChatModel";

export default function ChatHistory({
  currentChat,
  setCurrentChat,
  open,
  setOpen,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [isModelOpen, setModelOpen] = useState(false);

  const chatHistory = [
    { id: "1", title: "Learning React Fundamentals", date: "2 days ago" },
    { id: "2", title: "Full-Stack Development Path", date: "1 week ago" },
    { id: "3", title: "Machine Learning Roadmap", date: "2 weeks ago" },
    { id: "4", title: "DevOps Career Path", date: "1 month ago" },
  ];

  const filteredChats = chatHistory.filter((chat) =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMenuOpen = (event, id) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedChatId(id);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const ClearHistory = () => {
    console.log("running");
    setModelOpen(true);
  };

  return (
    <>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6" className={classes.drawerTitle}>
            Chat History
          </Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className={classes.searchContainer}>
          <TextField
            placeholder="Search chats..."
            variant="outlined"
            size="small"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon className={classes.searchIcon} />,
            }}
            className={classes.searchInput}
          />
        </div>

        <List className={classes.chatList}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setCurrentChat(null)}
              className={classes.newChatButton}
            >
              <ListItemIcon>
                <AddIcon className={classes.addIcon} />
              </ListItemIcon>
              <ListItemText primary="New Chat" />
            </ListItemButton>
          </ListItem>

          <Divider className={classes.divider} />

          {filteredChats.map((chat) => (
            <ListItem
              key={chat.id}
              disablePadding
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={(e) => handleMenuOpen(e, chat.id)}
                >
                  <MoreVertIcon />
                </IconButton>
              }
            >
              <ListItemButton
                selected={currentChat === chat.id}
                onClick={() => setCurrentChat(chat.id)}
                className={classes.chatItem}
              >
                <ListItemIcon>
                  <MessageIcon />
                </ListItemIcon>
                <ListItemText
                  primary={chat.title}
                  secondary={chat.date}
                  className={classes.chatItemText}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <DeleteIcon color="error" />
            </ListItemIcon>
            <ListItemText>Delete chat</ListItemText>
          </MenuItem>
        </Menu>

        <div className={classes.drawerFooter} onClick={ClearHistory}>
          <button className={classes.clearButton}>
            <DeleteIcon className={classes.buttonIcon} />
            Clear History
          </button>
        </div>
      </Drawer>
      <ClearChatModel setModelOpen={setModelOpen} isModelOpen={isModelOpen} />
    </>
  );
}
