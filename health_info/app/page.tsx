"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true); 
  const router = useRouter();

  //  check if the page is loaded
  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    const handleVisibilityChange = () => {
      if (document.readyState === "complete") {
        setIsLoading(false);
        router.push("./pages/landing");
      } else {
        setIsLoading(true);
      } 
    };

    window.addEventListener("load", handleLoad);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("load", handleLoad);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {isLoading ? <p>Loading...</p> : <p>Welcome!</p>}
    </div>
  );
}
