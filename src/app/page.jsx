"use client";
import style from "./page.module.scss";
import Hero from "@/app/components/Hero/Hero";
import Button from "@/app/components/Button/Button";
import { useState, useCallback, useMemo } from "react";
import { isEmailValid } from "@/utils/utils";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isExisting, setIsExisting] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = useCallback(async () => {
    if (!email || !isEmailValid(email)) return;
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, isExisting }),
      });
      if (!response.ok) {
        setError("Something went wrong.");
        throw new Error(`Something went wrong.`);
      }
      const data = await response.json();
      const params = new URLSearchParams({
        email,
        isExisting: data?.isExisting,
      });
      router.push(`/login?${params.toString()}`);
    } catch (error) {
      console.log(error, "error");
      return;
    }
  }, [router, email, isExisting]);

  const isButtonDisabled = useMemo(() => {
    return !isEmailValid(email);
  }, [email]);

  return (
    <div className={style.Container}>
      <div className={style.HeroContainer}>
        <Hero />
      </div>
      <div className={style.Infos}>
        <div className={style.Wrapper}>
          <div className={style.Text}>
            <h1 className={style.Title}>Ready to use Arcads?</h1>
            <h3 className={style.Subtitle}>
              Enter your email to create an account
            </h3>
            <div className={style.Label}>Email (required)</div>
            {error && <div className={style.Error}>{error}</div>}
            <div className={style.InputContainer}>
              <input
                type="email"
                placeholder="Email"
                className={style.Input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={style.ButtonWrapper}>
              <Button
                onClick={handleSubmit}
                isDisabled={isButtonDisabled}
                withIcon
              >
                Continue
              </Button>
            </div>
          </div>
          <div className={style.CGU}>
            By clicking &quot;Continue&quot; or &quot;Continue with
            Google&quot;, you agree to our
            <a href="#">Terms of Use</a>&<a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div
        className={isExisting ? style.Floating : style.FloatingNew}
        onClick={() => setIsExisting((p) => !p)}
      >
        {isExisting ? (
          <div className={style.Existing}>Existing user</div>
        ) : (
          <div className={style.New}>New user</div>
        )}
      </div>
    </div>
  );
}
