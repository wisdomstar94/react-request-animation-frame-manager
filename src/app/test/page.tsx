"use client"
import { useRequestAnimationFrameManager } from "@/hooks/use-request-animation-frame-manager/use-request-animation-frame-manager.hook";
import { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState<number>(0);

  useRequestAnimationFrameManager({
    isAutoStart: true,
    callback(startedTimestamp, currentTimestamp, step) {
      console.log('@step', step);
      console.log('@count', count);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
    
  return (
    <>
      console 창을 확인해보세요.
    </>
  );
}
