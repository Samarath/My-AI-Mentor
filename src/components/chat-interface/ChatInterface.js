"use client";
import { useState, useRef, useEffect } from "react";
// import {
//   Bookmark,
//   Share2,
//   Edit,
//   Send,
//   User,
//   Bot,
//   Menu,
//   PanelRight,
// } from "lucide-react";

import LearningPathTimeline from "../learning-path-timeline/LearningPathTimeline";
import {
  AdminPanelSettingsSharp,
  Bookmark,
  Edit,
  Menu,
  Send,
  Share,
} from "@mui/icons-material";
import classes from "../../app/(main)/my-journey/my-journey.module.scss";

export default function ChatInterface({
  currentChat,
  toggleLeftSidebar,
  toggleRightSidebar,
}) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef < HTMLDivElement > null;

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load chat history when currentChat changes
  useEffect(() => {
    if (currentChat) {
      // In a real app, you would fetch the chat history from an API
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

    // Simulate AI response (in a real app, you would call an API)
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
    <main className={classes["chat"]}>
      <header className={classes["chat__header"]}>
        <button
          className={classes["chat__sidebar-toggle"]}
          onClick={toggleLeftSidebar}
        >
          <Menu size={20} />
        </button>
        <h1 className={classes["chat__title"]}>Learning Path AI</h1>
        <button
          className={classes["chat__sidebar-toggle"]}
          onClick={toggleRightSidebar}
        >
          <AdminPanelSettingsSharp size={20} />
        </button>
      </header>

      <div className={classes["chat__messages"]}>
        {messages.length === 0 ? (
          <div className={classes["chat__empty"]}>
            <div className={classes["chat__empty-content"]}>
              <h2 className={classes["chat__empty-title"]}>
                Welcome to Learning Path AI
              </h2>
              <p className={classes["chat__empty-text"]}>
                Ask me anything about learning paths, career development, or
                skill acquisition.
              </p>
            </div>
          </div>
        ) : (
          <div className={classes["chat__message-list"]}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  classes[
                    `chat__message-container ${
                      message.role === "user"
                        ? "chat__message-container--user"
                        : "chat__message-container--assistant"
                    }`
                  ]
                }
              >
                <div
                  className={
                    classes[
                      `chat__message-wrapper ${
                        message.role === "user"
                          ? "chat__message-wrapper--user"
                          : ""
                      }`
                    ]
                  }
                >
                  <div
                    className={
                      classes[
                        `chat__avatar ${
                          message.role === "user"
                            ? "chat__avatar--user"
                            : "chat__avatar--assistant"
                        }`
                      ]
                    }
                  >
                    {/* {message.role === "user" ? (
                      <User size={16} />
                    ) : (
                      <Bot size={16} />
                    )} */}
                  </div>

                  <div className={classes["chat__message-content"]}>
                    {message.role === "user" ? (
                      <div
                        className={classes["chat__message chat__message--user"]}
                      >
                        <p>{message.content}</p>
                      </div>
                    ) : (
                      <div
                        className={classes["chat__message-assistant-content"]}
                      >
                        <div
                          className={
                            classes["chat__message chat__message--assistant"]
                          }
                        >
                          <p>{message.content}</p>
                        </div>

                        {message.learningPath && (
                          <div className={classes["learning-path-card"]}>
                            <div
                              className={classes["learning-path-card__header"]}
                            >
                              <h3
                                className={classes["learning-path-card__title"]}
                              >
                                {message.learningPath.title}
                              </h3>
                              <p className="learning-path-card__description">
                                A personalized learning path to help you achieve
                                your goals
                              </p>
                            </div>

                            <div
                              className={classes["learning-path-card__content"]}
                            >
                              <LearningPathTimeline
                                steps={message.learningPath.steps}
                              />
                            </div>

                            <div
                              className={classes["learning-path-card__footer"]}
                            >
                              <button
                                className={
                                  classes["button button--outline button--sm"]
                                }
                              >
                                <Bookmark
                                  size={16}
                                  className={classes["button__icon"]}
                                />
                                Save
                              </button>
                              <button
                                className={
                                  classes["button button--outline button--sm"]
                                }
                              >
                                <Share
                                  size={16}
                                  className={classes["button__icon"]}
                                />
                                Share
                              </button>
                              <button
                                className={
                                  classes["button button--outline button--sm"]
                                }
                              >
                                <Edit
                                  size={16}
                                  className={classes["button__icon"]}
                                />
                                Modify
                              </button>
                            </div>
                          </div>
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

      <div className={classes["chat__input-container"]}>
        <form onSubmit={handleSubmit} className={classes["chat__form"]}>
          <div className={classes["chat__input-wrapper"]}>
            <textarea
              placeholder="Ask about a learning path (e.g., 'How to learn React in 3 months?')"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={classes["chat__input"]}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <button
              type="submit"
              className={classes["chat__submit-button"]}
              disabled={!input.trim()}
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
