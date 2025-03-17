"use client";

import {
  Code,
  DataObject,
  Layers,
  Light,
  TrendingUp,
  X,
} from "@mui/icons-material";

// import {
//   Lightbulb,
//   TrendingUp,
//   Code,
//   Database,
//   Server,
//   Cpu,
//   Layers,
//   X,
// } from "lucide-react";
import classes from "../../app/(main)/my-journey/my-journey.module.scss";

export default function SuggestionPanel({ isOpen, setIsOpen }) {
  // Mock data for suggestions
  const quickSuggestions = [
    "How to learn React in 3 months?",
    "What's the best path to become a full-stack developer?",
    "How to transition from frontend to backend?",
    "What skills do I need for AI development?",
    "Create a roadmap for DevOps learning",
  ];

  const trendingTopics = [
    "Next.js 14 learning path",
    "AI and Machine Learning fundamentals",
    "Cloud certification roadmap",
    "Mobile app development with React Native",
    "Cybersecurity career path",
  ];

  const categories = [
    { name: "Frontend", icon: Code },
    { name: "Backend", icon: Layers },
    { name: "Database", icon: DataObject },
    { name: "DevOps", icon: Layers },
    { name: "AI/ML", icon: Layers },
  ];

  return (
    <aside
      className={
        classes[
          `sidebar sidebar--right ${
            isOpen ? "sidebar--open" : "sidebar--closed"
          }`
        ]
      }
    >
      <div className={classes["sidebar__header"]}>
        <div className={classes["sidebar__title-container"]}>
          <h2 className={classes["sidebar__title"]}>Suggestions</h2>
          <button
            className={classes["sidebar__close-button"]}
            onClick={() => setIsOpen(false)}
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className={classes["sidebar__content"]}>
        <div className={classes["sidebar__group"]}>
          <div className={classes["sidebar__group-header"]}>
            <Light size={16} className={classes["sidebar__group-icon"]} />
            <h3 className={classes["sidebar__group-title"]}>
              Quick Suggestions
            </h3>
          </div>
          <ul className={classes["sidebar-menu"]}>
            {quickSuggestions.map((suggestion, index) => (
              <li key={index} className={classes["sidebar-menu__item"]}>
                <button className={classes["sidebar-menu__button"]}>
                  <span className={classes["sidebar-menu__text"]}>
                    {suggestion}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes["sidebar__group"]}>
          <div className={classes["sidebar__group-header"]}>
            <TrendingUp size={16} className={classes["sidebar__group-icon"]} />
            <h3 className={classes["sidebar__group-title"]}>Trending Topics</h3>
          </div>
          <ul className={classes["sidebar-menu"]}>
            {trendingTopics.map((topic, index) => (
              <li key={index} className={classes["sidebar-menu__item"]}>
                <button className={classes["sidebar-menu__button"]}>
                  <span className={classes["sidebar-menu__text"]}>{topic}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes["sidebar__group"]}>
          <div className={classes["sidebar__group-header"]}>
            <h3 className={classes["sidebar__group-title"]}>
              Learning Categories
            </h3>
          </div>
          <ul className={classes["sidebar-menu"]}>
            {categories.map((category) => (
              <li key={category.name} className={classes["sidebar-menu__item"]}>
                <button className={classes["sidebar-menu__button"]}>
                  <category.icon
                    size={16}
                    className={classes["sidebar-menu__icon"]}
                  />
                  <span className={classes["sidebar-menu__text"]}>
                    {category.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
