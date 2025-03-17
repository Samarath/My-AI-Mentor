"use client";

import { useState, useEffect } from "react";
import classes from "./my-journey.module.scss";
import ChatHistory from "@/components/chat-history/ChatHistory";
import ChatInterface from "@/components/chat-interface/ChatInterface";
import SuggestionPanel from "@/components/suggestion-pannel/SuggestionPannel";

export default function Home() {
  const [currentChat, setCurrentChat] = useState(null);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    if (window.innerWidth < 768) {
      setLeftSidebarOpen(false);
      setRightSidebarOpen(false);
    }
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <div className={classes["app"]}>
      <ChatHistory
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
        isOpen={leftSidebarOpen}
        setIsOpen={setLeftSidebarOpen}
      />
      <ChatInterface
        currentChat={currentChat}
        toggleLeftSidebar={() => setLeftSidebarOpen(!leftSidebarOpen)}
        toggleRightSidebar={() => setRightSidebarOpen(!rightSidebarOpen)}
      />
      <SuggestionPanel
        isOpen={rightSidebarOpen}
        setIsOpen={setRightSidebarOpen}
      />

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && (leftSidebarOpen || rightSidebarOpen) && (
        <div
          className={classes["sidebar-overlay"]}
          onClick={() => {
            setLeftSidebarOpen(false);
            setRightSidebarOpen(false);
          }}
        />
      )}
    </div>
  );
}
