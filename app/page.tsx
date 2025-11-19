import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogCard } from "@/components/blog-card"
import { HistorySection } from "@/components/history-section"

// Mock data for the blog
const featuredPost = {
  title: "위쳐 4 - 게럴트의 은퇴 후, 새로운 전설의 시작",
  excerpt: "시리의 이야기가 본격적으로 펼쳐집니다. CD Projekt RED가 선보이는 차세대 RPG의 정점. 방대한 오픈월드와 깊이 있는 선택 시스템이 돋보이는 2025년 최고의 기대작.",
  image: "/witcher-4-ciri-gameplay.jpg",
  date: "2025년 3월 15일",
  readTime: "18분 읽기",
  rating: 10,
  category: "RPG",
  slug: "witcher-4",
}

const recentReviews = [
  {
    title: "GTA 6 - 바이스 시티의 귀환과 범죄 서사시의 정점",
    excerpt: "락스타의 역작이 돌아왔습니다. 전례 없는 규모의 오픈월드와 두 주인공의 얽힌 이야기가 새로운 기준을 제시합니다.",
    image: "/gta-6-vice-city-gameplay.jpg",
    date: "2025년 11월 10일",
    readTime: "20분 읽기",
    rating: 10,
    category: "Action",
    slug: "gta-6",
  },
  {
    title: "메탈 기어 솔리드 델타: 스네이크 이터 - 완벽한 리메이크",
    excerpt: "전설적인 스텔스 액션이 현세대 그래픽으로 재탄생. 오리지널의 감동을 그대로 살린 완벽한 리메이크입니다.",
    image: "/metal-gear-solid-delta-gameplay.jpg",
    date: "2025년 5월 20일",
    readTime: "15분 읽기",
    rating: 9.5,
    category: "Action",
    slug: "mgs-delta",
  },
  {
    title: "젤다의 전설: 에코즈 오브 위즈덤 - 새로운 시각의 하이랄",
    excerpt: "젤다가 주인공이 되어 펼치는 새로운 모험. 독특한 에코 시스템이 신선한 퍼즐 경험을 선사합니다.",
    image: "/zelda-echoes-of-wisdom-gameplay.jpg",
    date: "2025년 9월 26일",
    readTime: "12분 읽기",
    rating: 9.3,
    category: "Adventure",
    slug: "zelda-echoes",
  },
  {
    title: "퍼펙트 다크 - 클래식 FPS의 화려한 부활",
    excerpt: "레어의 전설적인 FPS가 20년 만에 돌아왔습니다. 현대적인 슈팅과 클래식한 감성의 완벽한 조화.",
    image: "/perfect-dark-reboot-gameplay.jpg",
    date: "2025년 7월 12일",
    readTime: "10분 읽기",
    rating: 8.8,
    category: "FPS",
    slug: "perfect-dark",
  },
  {
    title: "마블 1943: 라이즈 오브 하이드라 - 서사적 슈퍼히어로 RPG",
    excerpt: "2차 대전 시기를 배경으로 한 마블 유니버스. 깊이 있는 스토리와 전략적 전투가 돋보입니다.",
    image: "/marvel-1943-rise-of-hydra-gameplay.jpg",
    date: "2025년 10월 18일",
    readTime: "14분 읽기",
    rating: 9.0,
    category: "Action RPG",
    slug: "marvel-1943",
  },
  {
    title: "할로우 나이트: 실크송 - 완벽한 메트로이드바니아의 귀환",
    excerpt: "5년의 기다림 끝에 돌아온 걸작. 호넷의 여정은 전작을 뛰어넘는 깊이와 아름다움을 자랑합니다.",
    image: "/hollow-knight-silksong-gameplay.jpg",
    date: "2025년 6월 8일",
    readTime: "16분 읽기",
    rating: 10,
    category: "Metroidvania",
    slug: "silksong",
  },
]

const latestNews = [
  {
    title: "닌텐도 스위치 2 정식 발표, 2025년 12월 출시 확정",
    date: "2시간 전",
    category: "Hardware",
  },
  {
    title: "GTA 6 온라인 모드 상세 정보 공개",
    date: "5시간 전",
    category: "News",
  },
  {
    title: "스팀 봄 할인 시작: 2025년 신작 포함 특가",
    date: "1일 전",
    category: "Sale",
  },
  {
    title: "오버워치 3, 2026년 출시 예정 발표",
    date: "2일 전",
    category: "Esports",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <div className="relative h-[500px] w-full md:h-[600px]">
            <Image
              src={featuredPost.image || "/placeholder.svg"}
              alt={featuredPost.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-20 mx-auto -mt-32 px-4 pb-12 md:-mt-48">
            <Card className="overflow-hidden border-none shadow-2xl md:w-2/3 lg:w-1/2">
              <CardHeader className="space-y-4 p-6 md:p-8">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="text-sm font-medium">
                    Featured Review
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    {featuredPost.category}
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
                  {featuredPost.title}
                </h1>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="mr-1 h-4 w-4 fill-current" />
                    <span className="font-bold text-foreground">{featuredPost.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <div className="px-6 pb-6 md:px-8 md:pb-8">
                <p className="mb-6 text-muted-foreground md:text-lg">
                  {featuredPost.excerpt}
                </p>
                <Button size="lg" className="w-full md:w-auto" asChild>
                  <Link href={`/review/${featuredPost.slug}`}>
                    리뷰 보러가기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Main Content - Latest Reviews */}
            <div className="lg:col-span-8">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">최신 리뷰</h2>
                <Link href="/reviews" className="text-sm font-medium text-primary hover:underline">
                  모두 보기
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {recentReviews.map((post) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>
              <div className="mt-10 flex justify-center">
                <Button variant="outline" size="lg">
                  더 많은 리뷰 로드하기
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 lg:col-span-4">
              {/* Latest News Widget */}
              <Card>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold">최신 뉴스</h3>
                  <div className="space-y-4">
                    {latestNews.map((news, index) => (
                      <div key={index} className="group flex cursor-pointer flex-col space-y-1 border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {news.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{news.date}</span>
                        </div>
                        <h4 className="font-medium leading-snug group-hover:text-primary transition-colors">
                          {news.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="mt-4 w-full" asChild>
                    <Link href="/news">뉴스 더보기</Link>
                  </Button>
                </div>
              </Card>

              {/* Newsletter Widget */}
              <Card className="bg-primary text-primary-foreground">
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">뉴스레터 구독</h3>
                  <p className="mb-4 text-sm text-primary-foreground/80">
                    매주 최고의 게임 리뷰와 뉴스를 이메일로 받아보세요.
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="이메일 주소"
                      className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
                    />
                    <Button variant="secondary" className="w-full">
                      구독하기
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Categories Widget */}
              <Card>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold">카테고리</h3>
                  <div className="flex flex-wrap gap-2">
                    {["RPG", "Action", "FPS", "Strategy", "Indie", "Sports", "Horror", "Simulation"].map((tag) => (
                      <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </aside>
          </div>
        </div>
        
        {/* History Section */}
        <HistorySection />
      </main>

      <SiteFooter />
    </div>
  )
}
