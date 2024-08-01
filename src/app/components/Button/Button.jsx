import { useState } from "react";
import style from "./Button.module.scss";
import Arrow from "@/icons/Arrow";
export default function Button({ children, onClick, isDisabled, withIcon }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={isDisabled ? style.Disabled : style.Button}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type="submit"
    >
      <div className={style.Content}>
        {children}
        {!isDisabled && withIcon && (
          <div className={style.Icon}>
            <Arrow className={isHovered ? style.SVGHovered : style.SVG} />
          </div>
        )}
      </div>
    </button>
  );
}
