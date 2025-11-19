import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Star } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  rating?: number
  category: string
  slug: string
}

export function BlogCard({
  title,
  excerpt,
  image,
  date,
  readTime,
  rating,
  category,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/review/${slug}`}>
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
        {rating && (
          <CardFooter className="p-4 pt-0">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-bold text-foreground">{rating}</span>
              <span className="text-muted-foreground">/ 10</span>
            </div>
          </CardFooter>
        )}
      </Card>
    </Link>
  )
}
