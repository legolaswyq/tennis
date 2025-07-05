import Image from "next/image";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroBannerProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
  image: string;
}

export default function HeroBanner({ title, breadcrumb, image }: HeroBannerProps) {
  return (
    <div className="relative h-64 flex items-end bg-cover bg-center overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center z-0"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
        <div className="text-white text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">{title}</div>
        <div className="text-white text-sm flex items-center space-x-2">
          {breadcrumb.map((item, idx) => (
            <span key={item.label} className="flex items-center">
              {item.href ? (
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {idx < breadcrumb.length - 1 && <span className="mx-1">/</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 