"use client";

import { Badge } from "@/components/ui/badge";
import { getSkillInfo } from "@/lib/skill-mappings";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

interface SkillBadgeProps {
  skill: string;
  className?: string;
}

export function SkillBadge({ skill, className }: SkillBadgeProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);
  const skillInfo = getSkillInfo(skill);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the actual theme (accounting for system theme)
  const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "light";
  // Use a neutral color that works in both light and dark modes
  // For dark mode, use white/light color, for light mode use a darker color
  const iconColor = currentTheme === "dark" ? "ffffff" : "000000";
  const iconUrl = `https://cdn.simpleicons.org/${skillInfo.iconName}/${iconColor}`;

  // Only show image if it's not a fallback icon (code) and hasn't errored
  const shouldShowImage = skillInfo.iconName !== "code" && !imageError;

  return (
    <Link
      href={skillInfo.docUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Badge
        variant="secondary"
        className={cn(
          "group flex items-center px-2.5 py-1 hover:bg-secondary/80 transition-all duration-200 cursor-pointer hover:scale-105",
          shouldShowImage ? "gap-1.5" : "gap-0",
          className
        )}
      >
        {mounted && shouldShowImage && (
          <img
            src={iconUrl}
            alt=""
            className="w-3.5 h-3.5 object-contain flex-shrink-0"
            style={{ minWidth: "14px", minHeight: "14px" }}
            onError={() => {
              setImageError(true);
            }}
          />
        )}
        <span className="text-xs font-semibold leading-tight">{skillInfo.displayName}</span>
      </Badge>
    </Link>
  );
}
