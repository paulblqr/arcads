import { useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import style from "./Login.module.scss";
import Header from "@/app/components/Header/Header";
import Countdown from "@/app/components/Countdown/Countdown";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  const existParam = searchParams.get("isExisting");

  if (!email) {
    router.push("/");
  }

  const isExisting = useMemo(() => {
    return existParam === "true";
  }, [existParam]);

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
          <div className={style.Image}>
            <Image src="/verify.jpg" alt="" fill />
          </div>
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
