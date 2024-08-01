/* eslint-disable @next/next/no-img-element */
import { memo, useState } from "react";
import style from "./Hero.module.scss";
import Mute from "@/icons/Mute";
import Unmute from "@/icons/Unmute";
import Image from "next/image";

function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className={style.Container}>
      <div className={style.Logo}>
        <Image src="/arcads.png" alt="Logo" fill />
      </div>

      <img
        src="/signupDecoration.png"
        alt="Logo"
        className={style.Decoration}
      />

      <div className={style.VideoContainer}>
        <div className={style.Video}>
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            src="/arcadsVideo.mp4"
          ></video>
          <div className={style.MuteContainer}>
            {isMuted ? (
              <Mute className={style.SVG} onClick={() => setIsMuted(false)} />
            ) : (
              <Unmute className={style.SVG} onClick={() => setIsMuted(true)} />
            )}
          </div>
        </div>
        <div className={style.VideoBackground} />
      </div>
      <div className={style.Description}>
        An UGC platform that helps you create winning ads with AI Actors.
      </div>
      <div className={style.Flex}>
        <div className={style.MocksIMG}>
          <div className={style.MocksIMGContainer}>
            <Image src="/mock1.png" alt="Mocks" fill />
          </div>
          <div className={style.MocksIMGContainer}>
            <Image src="/mock2.png" alt="Mocks" fill />
          </div>
          <div className={style.MocksIMGContainer}>
            <Image src="/mock3.png" alt="Mocks" fill />
          </div>
        </div>
        Trusted by <span>5000+</span> marketers
      </div>
    </div>
  );
}

export default memo(Hero);
