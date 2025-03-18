"use client";

import { useState, useRef, useEffect } from "react";
import {
  IconButton,
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Paper,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Send as SendIcon,
  Bookmark as BookmarkIcon,
  Share as ShareIcon,
  Edit as EditIcon,
  Person as PersonIcon,
  SmartToy as BotIcon,
} from "@mui/icons-material";
import classes from "@/app/(main)/my-journey/my-journey.module.scss";
import LearningPathTimeline from "../learning-path-timeline/LearningPathTimeline";

export default function ChatInterface({ currentChat, toggleDrawer }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  useEffect(() => {
    if (currentChat) {
      const mockMessages = [
        {
          id: "1",
          role: "user",
          content: "How can I learn React in 3 months?",
        },
        {
          id: "2",
          role: "assistant",
          content:
            "Here's a comprehensive learning path to master React in 3 months:",
          learningPath: {
            title: "React in 3 Months: From Beginner to Advanced",
            steps: [
              {
                title: "Month 1: JavaScript & React Fundamentals",
                description:
                  "Start with JavaScript basics, then move to React core concepts like components, props, and state.",
                resources: [
                  { type: "Course", title: "Modern JavaScript", url: "#" },
                  {
                    type: "Documentation",
                    title: "React Official Docs",
                    url: "#",
                  },
                  { type: "Video", title: "React Crash Course", url: "#" },
                ],
              },
              {
                title: "Month 2: State Management & Routing",
                description:
                  "Learn about React hooks, context API, Redux, and implement routing with React Router.",
                resources: [
                  {
                    type: "Tutorial",
                    title: "React Hooks Deep Dive",
                    url: "#",
                  },
                  { type: "Course", title: "Redux Fundamentals", url: "#" },
                  {
                    type: "Documentation",
                    title: "React Router Guide",
                    url: "#",
                  },
                ],
              },
              {
                title: "Month 3: Advanced Patterns & Real Projects",
                description:
                  "Master advanced patterns, performance optimization, and build complete projects.",
                resources: [
                  { type: "Book", title: "Advanced React Patterns", url: "#" },
                  {
                    type: "Project",
                    title: "E-commerce App Tutorial",
                    url: "#",
                  },
                  { type: "Course", title: "React Performance", url: "#" },
                ],
              },
            ],
          },
        },
      ];

      setMessages(mockMessages);
    } else {
      setMessages([]);
    }
  }, [currentChat]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages([...messages, userMessage]);
    setInput("");

    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Here's a learning path based on your request:",
        learningPath: {
          title: "Custom Learning Path",
          steps: [
            {
              title: "Step 1: Foundation",
              description: "Build a strong foundation in the core concepts.",
              resources: [
                { type: "Course", title: "Beginner's Guide", url: "#" },
                {
                  type: "Documentation",
                  title: "Official Documentation",
                  url: "#",
                },
              ],
            },
            {
              title: "Step 2: Intermediate Skills",
              description: "Develop more advanced skills and techniques.",
              resources: [
                {
                  type: "Tutorial",
                  title: "Intermediate Techniques",
                  url: "#",
                },
                { type: "Video", title: "In-depth Walkthrough", url: "#" },
              ],
            },
            {
              title: "Step 3: Advanced Mastery",
              description:
                "Master advanced concepts and real-world applications.",
              resources: [
                { type: "Project", title: "Capstone Project", url: "#" },
                { type: "Book", title: "Advanced Guide", url: "#" },
              ],
            },
          ],
        },
      };

      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <main className={classes.chat}>
      <header className={classes.chatHeader}>
        <IconButton onClick={toggleDrawer} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.chatTitle}>
          AI Mentor
        </Typography>
      </header>

      <div className={classes.chatMessages}>
        {messages.length === 0 ? (
          <div className={classes.chatEmpty}>
            <div className={classes.chatEmptyContent}>
              <Typography variant="h4" className={classes.chatEmptyTitle}>
                Welcome to AI Mentor
              </Typography>
              <Typography variant="body1" className={classes.chatEmptyText}>
                Ask me anything about learning paths, career development, or
                skill acquisition.
              </Typography>
            </div>
          </div>
        ) : (
          <div className={classes.messageList}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${classes.messageContainer} ${
                  message.role === "user"
                    ? classes.userMessageContainer
                    : classes.assistantMessageContainer
                }`}
              >
                <div
                  className={`${classes.messageWrapper} ${
                    message.role === "user" ? classes.userMessageWrapper : ""
                  }`}
                >
                  <Avatar
                    className={`${classes.avatar} ${
                      message.role === "user"
                        ? classes.userAvatar
                        : classes.assistantAvatar
                    }`}
                  >
                    {message.role === "user" ? <PersonIcon /> : <BotIcon />}
                  </Avatar>

                  <div
                    className={
                      message.role === "user"
                        ? classes.messageContent
                        : classes.messageContentBot
                    }
                  >
                    {message.role === "user" ? (
                      <Paper
                        className={`${classes.message} ${classes.userMessage}`}
                      >
                        <Typography variant="body1">
                          {message.content}
                        </Typography>
                      </Paper>
                    ) : (
                      <div className={classes.assistantContent}>
                        <Paper
                          className={`${classes.message} ${classes.assistantMessage}`}
                        >
                          <Typography variant="body1">
                            {message.content}
                          </Typography>
                        </Paper>

                        {message.learningPath && (
                          <Card className={classes.learningPathCard}>
                            <CardContent className={classes.learningPathHeader}>
                              <Typography
                                variant="h6"
                                className={classes.learningPathTitle}
                              >
                                {message.learningPath.title}
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                A personalized learning path to help you achieve
                                your goals
                              </Typography>
                            </CardContent>

                            <CardContent
                              className={classes.learningPathContent}
                            >
                              <LearningPathTimeline
                                steps={message.learningPath.steps}
                              />
                            </CardContent>

                            <div className={classes.learningPathFooter}>
                              <Button
                                variant="outlined"
                                size="small"
                                startIcon={<ShareIcon />}
                                className={classes.actionButton}
                              >
                                Share
                              </Button>
                            </div>
                          </Card>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className={classes.inputContainer}>
        <form onSubmit={handleSubmit} className={classes.inputForm}>
          <TextField
            placeholder="Ask about a learning path (e.g., 'How to learn React in 3 months?')"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            multiline
            minRows={2}
            maxRows={4}
            fullWidth
            variant="outlined"
            className={classes.textField}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <IconButton
            type="submit"
            disabled={!input.trim()}
            className={classes.sendButton}
            color="primary"
          >
            <SendIcon />
          </IconButton>
        </form>
      </div>
    </main>
  );
}
