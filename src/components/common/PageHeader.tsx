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
    <section className="relative h-64 flex items-center justify-center text-center overflow-hidden">
      
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          priority
          className="object-cover z-0"
          data-ai-hint={image.imageHint}
        />
      )}

      {/* Neutral tech overlay 
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/40 via-slate-800/50 to-slate-900/60" />*/}

      <div className="relative z-20 p-4 text-white">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight drop-shadow-lg">
          {title}
        </h1>

        <p className="mt-2 text-lg md:text-xl max-w-3xl mx-auto text-slate-200 drop-shadow-md">
          {description}
        </p>
      </div>
    </section>
  );
}
