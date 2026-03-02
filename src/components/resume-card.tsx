"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  location: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  industries?: readonly string[];
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  location,
  href,
  badges,
  period,
  description,
  industries,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // if (description) {
    //   e.preventDefault();
    //   setIsExpanded(!isExpanded);
    // }
    e.stopPropagation();
  };

  return (
    <Card className="flex p-2">
      <div className="flex-none">
        <Link
          href={href || "#"}
          className="block cursor-pointer"
          onClick={handleClick}
        >
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
              onError={(e) => {
                console.error(`Failed to load image: ${logoUrl}`);
                e.currentTarget.style.display = "none";
              }}
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div
        className="flex-grow ml-4 items-center flex-col group"
        onClick={() => description && setIsExpanded(!isExpanded)}
        onMouseEnter={() => description && setIsExpanded(true)}
        onMouseLeave={() => description && setIsExpanded(false)}
      >
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              <ChevronRightIcon
                className={cn(
                  "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                  isExpanded ? "rotate-90" : "rotate-0",
                )}
              />
            </h3>
            <div className="flex-col text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              <div>{period}</div>
              <div>{location}</div>
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </CardHeader>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,

              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-xs sm:text-s flex flex-col gap-4"
          >
            <Markdown
              className={
                "prose max-w-full text-pretty font-sans text-sm dark:prose-invert"
              }
            >
              {description}
            </Markdown>
            {badges?.length ? (
              <span className="flex flex-wrap gap-1 items-center">
                <b>Tech Stacks:</b>
                {badges.map((badge, index) => (
                  <Badge
                    variant="secondary"
                    className="align-middle text-xs"
                    key={index}
                  >
                    {badge}
                  </Badge>
                ))}
              </span>
            ) : (
              ""
            )}
            {industries?.length ? (
              <span className="flex flex-wrap gap-1 items-center">
                <b>Industry:</b>
                {industries.map((industry, index) => (
                  <Badge
                    variant="secondary"
                    className="align-middle text-xs"
                    key={index}
                  >
                    {industry}
                  </Badge>
                ))}
              </span>
            ) : (
              ""
            )}
          </motion.div>
        )}
      </div>
    </Card>
  );
};
