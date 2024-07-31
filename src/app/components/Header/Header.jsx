import React from "react";
import style from "./Header.module.scss";
import Chevron from "@/icons/Chevron";
export default function Header({ email }) {
  return (
    <div className={style.Header}>
      <img src="/arcads.png" alt="Logo" className={style.Logo} />
      <div className={style.Email}>
        {email} <Chevron className={style.SVG} />
      </div>
    </div>
  );
}
