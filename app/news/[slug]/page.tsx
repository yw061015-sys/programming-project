import Image from "next/image"
import Link from "next/link"
import { notFound } from 'next/navigation'
import { Calendar, Clock, User, Share2, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Mock data function
function getNewsItem(slug: string) {
  return {
    title: "닌텐도 스위치 2, 2025년 3월 공식 출시 확정",
    excerpt: "닌텐도가 차세대 콘솔 '닌텐도 스위치 2'의 공식 출시일을 2025년 3월로 확정했습니다.",
    content: `
      <p>닌텐도가 오랜 기다림 끝에 차세대 콘솔 '닌텐도 스위치 2'의 공식 출시일을 2025년 3월로 확정했습니다. 이번 발표는 도쿄에서 열린 닌텐도 다이렉트를 통해 이루어졌으며, 전 세계 게이머들의 뜨거운 관심을 받았습니다.</p>
      
      <h2>주요 사양 및 특징</h2>
      <p>닌텐도 스위치 2는 기존 모델 대비 대폭 향상된 성능을 자랑합니다. 4K 해상도 지원이 가능해졌으며, 도킹 모드에서는 최대 4K/60fps의 게임 플레이가 가능합니다. 휴대 모드에서도 1080p 해상도를 지원하여 더욱 선명한 화질을 제공합니다.</p>
      
      <p>새로운 커스텀 칩셋은 NVIDIA와의 협력으로 개발되었으며, DLSS 3.0 기술을 지원하여 더욱 부드러운 게임 경험을 제공합니다. 배터리 수명도 기존 모델 대비 약 30% 향상되어 휴대 모드에서 최대 7시간의 플레이가 가능합니다.</p>
      
      <h2>런칭 타이틀</h2>
      <p>출시와 함께 다양한 퍼스트 파티 타이틀들이 공개될 예정입니다. 젤다의 전설 신작, 마리오 카트 9, 그리고 스플래툰 4가 런칭 타이틀로 확정되었습니다. 또한 서드 파티 개발사들도 적극적으로 참여하여 출시 첫 해에만 100개 이상의 타이틀이 출시될 것으로 예상됩니다.</p>
      
      <h2>가격 및 예약 판매</h2>
      <p>닌텐도 스위치 2의 권장 소비자 가격은 399달러로 책정되었습니다. 예약 판매는 2024년 12월부터 시작될 예정이며, 초기 물량이 한정적일 것으로 예상되어 조기 품절이 우려됩니다.</p>
      
      <h2>하위 호환성</h2>
      <p>기존 닌텐도 스위치의 게임 카트리지와 디지털 타이틀 모두 하위 호환이 가능합니다. 또한 기존 Joy-Con 컨트롤러도 사용 가능하지만, 새로운 기능을 활용하기 위해서는 신형 Joy-Con 2를 구매하는 것이 권장됩니다.</p>
    `,
    image: "/nintendo-switch-2-console-announcement.jpg",
    date: "2024년 6월 20일",
    readTime: "3분 읽기",
    category: "Hardware",
    author: "박하드웨어",
    slug: "nintendo-switch-2-release",
  }
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = getNewsItem(params.slug)

  if (!news) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Header */}
        <div className="relative h-[400px] w-full md:h-[500px]">
          <Image
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-4 pb-12">
            <div className="mb-4 flex items-center gap-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
                {news.category}
              </Badge>
              <Badge variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                <TrendingUp className="mr-1 h-3 w-3" />
                인기
              </Badge>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {news.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{news.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{news.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: news.content }} />
            </div>

            <Separator className="my-8" />

            {/* Share & Tags */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Badge variant="outline">닌텐도</Badge>
                <Badge variant="outline">스위치 2</Badge>
                <Badge variant="outline">하드웨어</Badge>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                공유하기
              </Button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Author Profile */}
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg"
                      alt={news.author}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{news.author}</h4>
                    <p className="text-xs text-muted-foreground">하드웨어 전문 기자</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  게임 하드웨어와 기술 트렌드를 전문적으로 다룹니다. 최신 콘솔과 PC 하드웨어 소식을 전해드립니다.
                </p>
                <Button variant="outline" className="mt-4 w-full">
                  작성자의 다른 글 보기
                </Button>
              </div>

              {/* Related News */}
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-4 font-bold">관련 뉴스</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Link key={i} href="#" className="group flex gap-3">
                      <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src="/placeholder.svg"
                          alt="Related news"
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium leading-tight group-hover:text-primary">
                          관련 뉴스 제목 {i}
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground">2시간 전</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-4 font-bold">트렌딩 토픽</h3>
                <div className="space-y-2">
                  {["#닌텐도스위치2", "#GTA6", "#스팀할인", "#플스5프로", "#엑스박스"].map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
