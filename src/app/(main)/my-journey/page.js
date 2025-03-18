"use client";

import { useState, useEffect } from "react";
import classes from "@/app/(main)/my-journey/my-journey.module.scss";
import ChatHistory from "@/components/chat-history/ChatHistory";
import ChatInterface from "@/components/chat-interface/ChatInterface";

export default function Home() {
  const [currentChat, setCurrentChat] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <div className={classes.app}>
      <ChatHistory
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
        open={drawerOpen}
        setOpen={setDrawerOpen}
      />
      <ChatInterface
        currentChat={currentChat}
        toggleDrawer={() => setDrawerOpen(!drawerOpen)}
      />
    </div>
  );
}
