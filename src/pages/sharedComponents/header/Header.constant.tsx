import { IoJournalOutline } from "react-icons/io5";
import { LuSendHorizonal } from "react-icons/lu";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { BiHomeSmile } from "react-icons/bi";

type MenuItem = {
  title: string;
  icon: JSX.Element;
  id: string;
};

export const menus: MenuItem[] = [
  {
    title: "Home",
    icon: <BiHomeSmile className={"text-lg"} />,
    id: "home",
  },
  {
    title: "About",
    icon: <GoPerson className={" text-lg"} />,
    id: "about",
  },
  {
    title: "Skills",
    icon: <BsFileEarmarkBarGraph className={"text-lg "} />,
    id: "skills",
  },
  {
    title: "Contact",
    icon: <LuSendHorizonal className={"text-lg"} />,
    id: "contact",
  },
  {
    title: "Journal",
    icon: <IoJournalOutline className="text-lg " />,
    id: "journal",
  },
];
