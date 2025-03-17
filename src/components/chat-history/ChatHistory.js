"use client";

import {
  MessageSharp,
  MoreHorizOutlined,
  PlusOneSharp,
  Search,
  Star,
  TramSharp,
  X,
} from "@mui/icons-material";
import { useState } from "react";
import classes from "../../app/(main)/my-journey/my-journey.module.scss";
// import {
//   MessageSquare,
//   Search,
//   Star,
//   MoreHorizontal,
//   Trash2,
//   Plus,
//   X,
// } from "lucide-react";

export default function ChatHistory({
  currentChat,
  setCurrentChat,
  isOpen,
  setIsOpen,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteChats, setFavoriteChats] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Mock chat history data
  const chatHistory = [
    { id: "1", title: "Learning React Fundamentals", date: "2 days ago" },
    { id: "2", title: "Full-Stack Development Path", date: "1 week ago" },
    { id: "3", title: "Machine Learning Roadmap", date: "2 weeks ago" },
    { id: "4", title: "DevOps Career Path", date: "1 month ago" },
  ];

  const toggleFavorite = (id) => {
    if (favoriteChats.includes(id)) {
      setFavoriteChats(favoriteChats.filter((chatId) => chatId !== id));
    } else {
      setFavoriteChats([...favoriteChats, id]);
    }
  };

  const filteredChats = chatHistory.filter((chat) =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleDropdown = (id) => {
    if (dropdownOpen === id) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(id);
    }
  };

  return (
    <aside
      className={
        classes[
          `sidebar sidebar--left ${
            isOpen ? "sidebar--open" : "sidebar--closed"
          }`
        ]
      }
    >
      <div className={classes["sidebar__header"]}>
        <div className={classes["sidebar__title-container"]}>
          <h2 className={classes["sidebar__title"]}>Chat History</h2>
          <button
            className={classes["sidebar__close-button"]}
            onClick={() => setIsOpen(false)}
          >
            <X size={18} />
          </button>
        </div>
        <div className={classes["sidebar__search"]}>
          <div className={classes["search-input"]}>
            <Search className={classes["search-input__icon"]} />
            <input
              type="text"
              placeholder="Search chats..."
              className={classes["search-input__field"]}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={classes["sidebar__content"]}>
        <ul className={classes["sidebar-menu"]}>
          <li className={classes["sidebar-menu__item"]}>
            <button
              className={
                classes["sidebar-menu__button sidebar-menu__button--new"]
              }
              onClick={() => setCurrentChat(null)}
            >
              <PlusOneSharp size={16} />
              <span>New Chat</span>
            </button>
          </li>

          {filteredChats.map((chat) => (
            <li
              key={chat.id}
              className={
                classes[
                  `sidebar-menu__item ${
                    currentChat === chat.id ? "sidebar-menu__item--active" : ""
                  }`
                ]
              }
            >
              <button
                className={classes["sidebar-menu__button"]}
                onClick={() => setCurrentChat(chat.id)}
              >
                <div className={classes["sidebar-menu__button-content"]}>
                  <div className={classes["sidebar-menu__icon-title"]}>
                    <MessageSharp size={16} className="sidebar-menu__icon" />
                    <span className={classes["sidebar-menu__title"]}>
                      {chat.title}
                    </span>
                  </div>
                  <span className={classes["sidebar-menu__date"]}>
                    {chat.date}
                  </span>
                </div>
              </button>

              <div className={classes["sidebar-menu__actions"]}>
                <button
                  className={classes["sidebar-menu__action-button"]}
                  onClick={() => toggleDropdown(chat.id)}
                >
                  <MoreHorizOutlined size={16} />
                </button>

                {dropdownOpen === chat.id && (
                  <div className={classes["dropdown"]}>
                    <ul className={classes["dropdown__menu"]}>
                      <li className={classes["dropdown__item"]}>
                        <button
                          className={classes["dropdown__button"]}
                          onClick={() => toggleFavorite(chat.id)}
                        >
                          <Star
                            size={16}
                            className={
                              classes[
                                favoriteChats.includes(chat.id)
                                  ? "dropdown__icon dropdown__icon--favorite"
                                  : "dropdown__icon"
                              ]
                            }
                          />
                          <span>
                            {favoriteChats.includes(chat.id)
                              ? "Remove from favorites"
                              : "Add to favorites"}
                          </span>
                        </button>
                      </li>
                      <li className={classes["dropdown__item"]}>
                        <button
                          className={
                            classes["dropdown__button dropdown__button--delete"]
                          }
                        >
                          <TramSharp
                            size={16}
                            className={classes["dropdown__icon"]}
                          />
                          <span>Delete chat</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes["sidebar__footer"]}>
        <button
          className={classes["button button--outline button--full-width"]}
        >
          <TramSharp size={16} className={classes["button__icon"]} />
          Clear History
        </button>
      </div>
    </aside>
  );
}
