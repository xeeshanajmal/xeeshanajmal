'use client'

import * as React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

interface MediaPreviewProps {
  video?: string
  images?: readonly { src: string; alt: string }[]
  highlight?: string
}

function MediaPreview({ video, images, highlight }: MediaPreviewProps){
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
            />
          ) : images && images.length > 0 ? (
            <div className="relative">
            <Image
                src={highlight as string}
                alt={images[0].alt}
                width={500}
                height={300}
                className="h-40 w-full object-cover object-top"
            />
            <div className="absolute bottom-2 right-2 flex gap-2 z-10">
                {images.slice(1, 3).map((img, index) => (
                <div
                    key={index}
                    className="relative w-10 h-10 md:w-12 md:h-12 rounded-md overflow-hidden border-2 border-white shadow-md"
                >
                    <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    />
                </div>
                ))}
                {images.length > 3 && (
                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-md overflow-hidden border-2 border-white bg-black/60 flex items-center justify-center text-white text-[10px] md:text-xs font-medium shadow-md">
                    +{images.length - 3}
                </div>
                )}
            </div>
            </div>
          ) : (
            <div>No media available</div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="flex justify-center items-center p-4 sm:max-w-[90vw]">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg max-h-[80vh] object-contain"
          />
        ) : images && images.length > 0 ? (
          <Carousel className="w-full max-w-[800px]">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 flex flex-col gap-3">
                    <img
                      src={image.src}
                      alt={image.alt || `Image ${index + 1}`}
                      className="object-contain rounded-lg mx-auto my-auto w-full h-auto"
                    />
                    <p className="mx-auto">{image.alt}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
              &#9664;
            </CarouselPrevious>
            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
              &#9654;
            </CarouselNext>
          </Carousel>
        ) : (
          <div>No media available</div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default MediaPreview