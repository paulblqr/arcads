import React from "react";
import style from "./Header.module.scss";
import Chevron from "@/icons/Chevron";
import Image from "next/image";
export default function Header({ email }) {
  return (
    <div className={style.Header}>
      <div className={style.Logo}>
        <Image src="/arcads.png" alt="Logo" fill />
      </div>

      <div className={style.Email}>
        {email} <Chevron className={style.SVG} />
      </div>
    </div>
  );
}
