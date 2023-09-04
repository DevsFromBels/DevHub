import { FC } from "react";
import { Link as NavTo } from "react-router-dom";
import { ILink } from "../types/components.type";
import "./styles/Link.css";

const Link: FC<ILink> = ({ children, href }) => {
  return (
    <NavTo to={href} className="link">
      {children}
    </NavTo>
  );
};

export { Link };
