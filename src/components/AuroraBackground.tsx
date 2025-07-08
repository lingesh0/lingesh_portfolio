"use client";
import React, { ReactNode } from "react";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full flex flex-col items-center justify-start bg-zinc-50 text-slate-950 dark:bg-zinc-900 overflow-x-hidden",
        className
      )}
      {...props}
    >
      {/* Aurora animated background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{
          "--aurora":
            "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
          "--dark-gradient":
            "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
          "--white-gradient":
            "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
          "--blue-300": "#7dd3fc",
          "--blue-400": "#38bdf8",
          "--blue-500": "#0ea5e9",
          "--indigo-300": "#c4b5fd",
          "--violet-200": "#e9d5ff",
          "--green-300": "#6ee7b7",
          "--pink-300": "#f9a8d4",
          "--gray-300": "#d1d5db",
          "--black": "#000000",
          "--white": "#ffffff",
          "--transparent": "transparent",
        } as React.CSSProperties}
      >
        <div
          className={cn(
            "after:animate-aurora absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-30 blur-[4px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[''] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]",
            showRadialGradient
              ? "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]"
              : ""
          )}
        ></div>
      </div>
      {/* Content above aurora background */}
      <div className="relative z-10 w-full flex flex-col items-center justify-start">
        {children}
      </div>
    </div>
  );
}; 