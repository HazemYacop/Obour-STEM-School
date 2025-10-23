"use client";

import { useEffect, useMemo, useState } from "react";

type MaintenanceNoticeProps = {
  resumeAt: string;
};

type TimeParts = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

function formatTimeParts(durationMs: number): TimeParts {
  const totalSeconds = Math.max(Math.floor(durationMs / 1000), 0);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  const pad = (value: number) => value.toString().padStart(2, "0");

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
}

export function MaintenanceNotice({ resumeAt }: MaintenanceNoticeProps) {
  const resumeTime = useMemo(() => new Date(resumeAt).getTime(), [resumeAt]);
  const [remainingMs, setRemainingMs] = useState(() =>
    Math.max(resumeTime - Date.now(), 0)
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRemainingMs(Math.max(resumeTime - Date.now(), 0));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [resumeTime]);

  const { days, hours, minutes, seconds } = formatTimeParts(remainingMs);
  const hasEnded = remainingMs <= 0;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#020614] px-6 py-12 text-white">
      <div className="flex max-w-[640px] flex-col items-center gap-[28px] rounded-[24px] border border-white/15 bg-white/5 p-[40px] text-center shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <span className="rounded-full border border-[#5cf5ff]/40 px-[18px] py-[8px] font-ibm font-[600] text-[12px] uppercase tracking-[4px] text-[#5cf5ff]">
          Scheduled Maintenance
        </span>
        <h1 className="font-roboto text-[34px] font-bold uppercase tracking-[4px] text-white drop-shadow-[0_0_14px_rgba(92,245,255,0.35)]">
          Welcome To Obour STEM School Official Website
        </h1>
        <p className="font-inter text-[15px] leading-[1.75] text-white/75">
          The website isn&apos;t finished yet.
          {hasEnded
            ? " Refresh the page to resume browsing."
            : " Please check back soon—you will be able to browse the website once the timer finishes."}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[16px] font-roboto text-[18px] uppercase tracking-[5px] text-[#5cf5ff]">
          <div className="flex min-w-[85px] flex-col items-center gap-[6px] rounded-[16px] border border-white/10 bg-white/5 px-[18px] py-[14px]">
            <span className="text-[32px] font-bold text-white">{days}</span>
            <span className="font-inter text-[12px] tracking-[3px] text-white/60">
              Days
            </span>
          </div>
          <div className="flex min-w-[85px] flex-col items-center gap-[6px] rounded-[16px] border border-white/10 bg-white/5 px-[18px] py-[14px]">
            <span className="text-[32px] font-bold text-white">{hours}</span>
            <span className="font-inter text-[12px] tracking-[3px] text-white/60">
              Hours
            </span>
          </div>
          <div className="flex min-w-[85px] flex-col items-center gap-[6px] rounded-[16px] border border-white/10 bg-white/5 px-[18px] py-[14px]">
            <span className="text-[32px] font-bold text-white">{minutes}</span>
            <span className="font-inter text-[12px] tracking-[3px] text-white/60">
              Minutes
            </span>
          </div>
          <div className="flex min-w-[85px] flex-col items-center gap-[6px] rounded-[16px] border border-white/10 bg-white/5 px-[18px] py-[14px]">
            <span className="text-[32px] font-bold text-white">{seconds}</span>
            <span className="font-inter text-[12px] tracking-[3px] text-white/60">
              Seconds
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[12px]">
          <p className="font-inter text-[13px] uppercase tracking-[3px] text-white/50">
            Scheduled Completion
          </p>
          <time
            dateTime={resumeAt}
            className="font-ibm text-[18px] tracking-[4px] text-[#c2f9ff]"
          >
            {new Date(resumeAt).toLocaleString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </div>
      </div>
    </main>
  );
}

export default MaintenanceNotice;
