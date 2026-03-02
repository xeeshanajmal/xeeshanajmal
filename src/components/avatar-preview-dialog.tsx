'use client'

import * as React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface AvatarPreviewDialogProps {
  src: string
  hoverSrc?: string
  alt?: string
  fallback?: React.ReactNode
  fullWidth?: number | string
  fullHeight?: number | string
  className?: string
  flipDuration?: number // Optional duration for the flip animation in ms
}

export const AvatarPreviewDialog: React.FC<AvatarPreviewDialogProps> = ({
  src,
  hoverSrc,
  alt = "Profile picture",
  fallback,
  fullWidth = "400px",
  fullHeight = "auto",
  className,
  flipDuration = 300, // Default 500ms flip animation
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false)

  // Only apply flip effect if hoverSrc is provided
  const hasFlipEffect = !!hoverSrc

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn(
          "relative border-0",
          hasFlipEffect && "cursor-pointer [perspective:1000px]",
          className
        )}>
          <div
            className={cn(
              "relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]",
              hasFlipEffect && isFlipped && "[transform:rotateY(180deg)]"
            )}
            style={{ transitionDuration: `${flipDuration}ms` }}
            onMouseEnter={() => hasFlipEffect && setIsFlipped(true)}
            onMouseLeave={() => hasFlipEffect && setIsFlipped(false)}
          >
            {/* Front side - original image */}
            <div className="w-full h-full [backface-visibility:hidden]">
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage src={src} alt={alt} />
                {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
              </Avatar>
            </div>

            {/* Back side - hover image (only if hoverSrc is provided) */}
            {hasFlipEffect && (
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <Avatar className="w-full h-full rounded-none">
                  <AvatarImage src={hoverSrc} alt={`${alt} - Hover`} />
                  {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
                </Avatar>
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="flex justify-center items-center p-4 sm:max-w-[90vw]">
        <img
          src={src} // Always show the original image in dialog
          alt={alt}
          style={{ width: fullWidth, height: fullHeight }}
          className="rounded-lg max-h-[80vh] object-contain"
        />
      </DialogContent>
    </Dialog>
  )
}