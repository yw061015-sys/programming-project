'use client'

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { useHistory } from "@/hooks/use-history"
import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'

export function HistorySection() {
  const { getRecentHistory } = useHistory()
  const recentHistory = getRecentHistory(8)

  const getTypeLabel = (type: string) => {
    const labels = {
      review: '리뷰',
      news: '뉴스',
      guide: '가이드',
      community: '커뮤니티',
    }
    return labels[type as keyof typeof labels] || type
  }

  const getTypeLink = (item: any) => {
    const links = {
      review: `/review/${item.slug}`,
      news: `/news/${item.slug}`,
      guide: `/guides/${item.slug}`,
      community: `/community/${item.slug}`,
    }
    return links[item.type as keyof typeof links] || '/'
  }

  const formatDate = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true, locale: ko })
    } catch {
      return dateString
    }
  }

  if (recentHistory.length === 0) {
    return (
      <section className="border-t bg-muted/40 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">최근 활동</h2>
          <p className="text-center text-muted-foreground">아직 활동 내역이 없습니다.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="border-t bg-muted/40 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">최근 활동</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recentHistory.map((item) => (
            <Link
              key={item.id}
              href={getTypeLink(item)}
              className="group rounded-lg border bg-card p-4 text-card-foreground transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="mb-2 flex items-center justify-between">
                <Badge variant="outline">{getTypeLabel(item.type)}</Badge>
                <span className="text-xs text-muted-foreground">
                  {formatDate(item.date)}
                </span>
              </div>
              <h4 className="line-clamp-2 font-medium leading-snug group-hover:text-primary">
                {item.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
