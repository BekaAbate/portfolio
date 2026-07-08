"use client";
import { SiGithub, SiGmail, SiTelegram } from "react-icons/si";
import Dock from "./react-bits/Dock";
import { FaLinkedin } from "react-icons/fa6";
export const DockLinks = () => {
  const items = [
    {
      icon: <SiGithub size={28} />,
      label: "GitHub",
      onClick: () => {
        window.open("https://github.com/BekaAbate", "_blank");
      },
    },
    {
      icon: <FaLinkedin size={28} />,
      label: "Linkedin",
      onClick: () => {
        window.open("https://www.linkedin.com/in/bekaabate", "_blank");
      },
    },
    {
      icon: <SiTelegram size={28} />,
      label: "Telegram",
      onClick: () => {
        window.open("https://t.me/bekzival", "_blank");
      },
    },
    {
      icon: <SiGmail size={28} />,
      label: "Copy Email",
      onClick: () => {
        navigator.clipboard.writeText("bekaabate@gmail.com");
      },
    },
  ];
  return (
    <div>
      <Dock
        items={items}
        panelHeight={50}
        baseItemSize={40}
        magnification={50}
        dockHeight={20}
      />
    </div>
  );
};
