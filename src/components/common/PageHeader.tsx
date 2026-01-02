import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type PageHeaderProps = {
  title: string;
  description: string;
  imageId: string;
};

export function PageHeader({ title, description, imageId }: PageHeaderProps) {
  const image = PlaceHolderImages.find(p => p.id === imageId);
  
  return (
    <section className="relative h-64 flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7A0C0C] to-[#4D0A0A] opacity-80"></div>
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover"
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-2 text-lg md:text-xl max-w-3xl mx-auto text-gray-200 drop-shadow-md">
          {description}
        </p>
      </div>
    </section>
  );
}
