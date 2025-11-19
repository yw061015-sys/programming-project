import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  slug: string
}

export function NewsCard({
  title,
  excerpt,
  image,
  date,
  readTime,
  category,
  slug,
}: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <Badge variant="secondary" className="font-semibold">
              {category}
            </Badge>
          </div>
        </div>
        <CardHeader className="p-4 pb-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
          <h3 className="line-clamp-2 text-xl font-bold leading-tight tracking-tight">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
