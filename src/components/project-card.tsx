"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SkillBadge } from "@/components/skill-badge";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState, useRef, useEffect } from "react";
import MediaPreview from "./media-preview";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string;
  tags: readonly string[];
  link?: string;
  hightlight?: string;
  images?: readonly { src: string; alt: string }[];
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  hightlight,
  images,
  video,
  links,
  className,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSeeMore, setShowSeeMore] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the content is truncated by comparing scrollHeight to clientHeight
    const checkIfTruncated = () => {
      if (descriptionRef.current && !isExpanded) {
        // When line-clamp is applied, scrollHeight will be greater than clientHeight if truncated
        const isTruncated =
          descriptionRef.current.scrollHeight >
          descriptionRef.current.clientHeight;
        setShowSeeMore(isTruncated);
      } else if (isExpanded) {
        // When expanded, always show "See less" if we previously showed "See more"
        setShowSeeMore(true);
      }
    };

    // Use multiple checks to account for async rendering
    const timeouts: NodeJS.Timeout[] = [];

    // Immediate check
    checkIfTruncated();

    // Check after animation frame
    requestAnimationFrame(() => {
      checkIfTruncated();
    });

    // Check after delays to account for Markdown rendering
    [50, 100, 200, 500].forEach((delay) => {
      const timeoutId = setTimeout(checkIfTruncated, delay);
      timeouts.push(timeoutId);
    });

    // Use ResizeObserver for dynamic content changes
    let resizeObserver: ResizeObserver | null = null;
    if (descriptionRef.current && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        checkIfTruncated();
      });
      resizeObserver.observe(descriptionRef.current);
    }

    return () => {
      timeouts.forEach(clearTimeout);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [description, isExpanded]);

  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      {/* <MediaPreview video={video} images={images} highlight={hightlight} /> */}
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="relative">
            {/* Visible description */}
            <div
              ref={descriptionRef}
              className={isExpanded ? "" : "line-clamp-4"}
            >
              <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                {description}
              </Markdown>
            </div>
            {showSeeMore && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-1.5 block text-xs font-semibold text-primary hover:underline focus:outline-none transition-colors"
                type="button"
              >
                {isExpanded ? "See less" : "See more"}
              </button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2 pt-4 pb-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <SkillBadge
                key={tag}
                skill={tag.trim()}
                className="px-1 py-0 text-[10px]"
              />
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
