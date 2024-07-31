"use client";
import { useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import style from "./login.module.scss";
import Header from "@/app/components/Header/Header";
import Countdown from "@/app/components/Countdown/Countdown";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  const existParam = searchParams.get("isExisting");

  const isExisting = useMemo(() => {
    return existParam === "true";
  }, [existParam]);

  if (!email) {
    router.push("/");
  }
  return (
    <div className={style.Container}>
      <Header email={email} />
      {isExisting ? (
        <div className={style.FlexCol}>
          <div className={style.Title}>Check your email</div>
          <div className={style.Infos}>
            Log in using the magic link sent to
            <span>{email}</span>
          </div>
        </div>
      ) : (
        <div className={style.FlexCol}>
          <div className={style.Title}>Verify your email</div>
          <img src="verify.jpg" className={style.Image} />
          <div className={style.Column}>
            We&apos;ve sent a magic link to
            <span>{email}</span>
            <br />
            Follow the link in your inbox to get started
          </div>

          <Countdown />
        </div>
      )}
    </div>
  );
}
