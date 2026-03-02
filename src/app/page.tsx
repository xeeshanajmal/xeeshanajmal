"use client";

import { AvatarPreviewDialog } from "@/components/avatar-preview-dialog";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Meteors } from "@/components/magicui/meteors";
import { SpinningText } from "@/components/magicui/spinning-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { SkillBadge } from "@/components/skill-badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16">
      <SpinningText className="hidden sm:fixed sm:bottom-4 sm:right-4 sm:z-50 sm:block">
        research • build • secure • innovate •
      </SpinningText>
      <Meteors number={30} />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-3">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div
                  className="group cursor-pointer"
                  onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
                  onMouseEnter={() => setIsSummaryExpanded(true)}
                  onMouseLeave={() => setIsSummaryExpanded(false)}
                >
                  <div className="flex items-center gap-2 max-w-[600px] md:text-xl text-muted-foreground hover:text-foreground transition-colors duration-200">
                    <span>{DATA.description}</span>
                    <ChevronRightIcon
                      className={cn(
                        "size-4 shrink-0 transform transition-all duration-300 ease-out",
                        isSummaryExpanded ? "rotate-90" : "rotate-0",
                      )}
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isSummaryExpanded ? 1 : 0,
                      height: isSummaryExpanded ? "auto" : 0,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mt-2 overflow-hidden"
                  >
                    <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert text-left">
                      {DATA.summary}
                    </Markdown>
                  </motion.div>
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground border rounded-full px-2.5 py-1">
                    📍 {DATA.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 rounded-full px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    Open to collaboration
                  </span>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <AvatarPreviewDialog
                hoverSrc={DATA.cartoonAvatarUrl}
                src={DATA.avatarUrl}
                alt={DATA.name}
                fallback={DATA.initials}
                fullWidth="500px"
                className="size-28 border"
              />
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="profile">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground shrink-0">
              About Me
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.professional_summary}
          </Markdown>
        </BlurFade>
      </section>
      {/* <section id="professional-summary">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">PROFESSIONAL SUMMARY</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.professional_summary}
          </Markdown>
        </BlurFade>
      </section> */}
      <section id="professional-summary">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground shrink-0">
              Key Strengths
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.strengths}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex items-center gap-3">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground shrink-0">
                Work Experience
              </h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                location={work.location}
                href={work.href}
                // badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                industries={work.industries}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex items-center gap-3">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground shrink-0">
                Education
              </h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                location={education.location}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex items-center gap-3">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground shrink-0">
                Technologies
              </h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <SkillBadge skill={skill} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Research & Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Selected Work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My research and applied work spans quantum cybersecurity,
                  AI/ML-based threat detection, and empirical software
                  engineering. Here are a few of my key projects and research
                  outputs.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  // dates={project.dates}
                  tags={project.technologies}
                  hightlight={project.highlight}
                  images={project.images}
                  video={project.video}
                  links={"links" in project ? project.links : undefined}
                />
              </BlurFade>
            ))}
          </div>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            And more to come. To explore additional work, please{" "}
            <Link
              href={DATA.contact.social.GitHub.url}
              className="text-blue-500 hover:underline"
            >
              check out my GitHub.
            </Link>
          </p>
        </div>
      </section>
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="certifications">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex items-center gap-3">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground shrink-0">
                Certifications & Courses
              </h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </BlurFade>
          <div className="flex flex-col gap-y-2">
            {DATA.certifications.map((cert, id) => (
              <BlurFade
                key={cert.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <div
                  className={cn(
                    "flex items-start justify-between rounded-lg border border-l-4 px-4 py-3 text-sm bg-muted/20 transition-colors hover:bg-muted/40",
                    cert.status === "On-going"
                      ? "border-l-yellow-400"
                      : "border-l-emerald-500",
                  )}
                >
                  <div>
                    <p className="font-medium leading-none">{cert.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "ml-4 shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
                      cert.status === "On-going"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                        : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
                    )}
                  >
                    {cert.status === "On-going"
                      ? "⏳ In Progress"
                      : "✓ Completed"}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to connect? Reach out via{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>{" "}
                or drop me an{" "}
                <Link
                  href={DATA.contact.social.email.url}
                  className="text-blue-500 hover:underline"
                >
                  email
                </Link>{" "}
                and I&apos;ll respond as soon as I can.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                {Object.entries(DATA.contact.social).map(([name, social]) => (
                  <Link
                    key={name}
                    href={social.url}
                    target={name !== "email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium hover:bg-accent transition-colors cursor-pointer">
                      <social.icon className="size-4" />
                      {name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
