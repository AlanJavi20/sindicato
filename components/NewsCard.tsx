import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

interface NewsCardProps {
    date: string;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
}

export function NewsCard({ date, title, excerpt, image, slug }: NewsCardProps) {
    return (
        <Card className="overflow-hidden border-zinc-200 hover:shadow-lg transition-shadow group h-full flex flex-col bg-white">
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 bg-[#003366] text-white px-3 py-1 font-bold text-xs rounded-br-lg">
                    NOTICIAS
                </div>
            </div>

            <CardHeader className="pt-6 pb-2">
                <div className="flex items-center gap-2 text-sm text-[#CC0000] font-bold mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#003366] leading-tight group-hover:text-[#0055A4] transition-colors font-sans">
                    {title}
                </h3>
            </CardHeader>

            <CardContent className="flex-grow">
                <p className="text-gray-600 line-clamp-3 text-sm">
                    {excerpt}
                </p>
            </CardContent>

            <CardFooter className="pt-0 pb-6">
                <Button variant="link" className="p-0 h-auto text-[#003366] font-bold hover:text-[#CC0000]" asChild>
                    <Link href={`/noticias/${slug}`}>
                        LEER MÁS
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
