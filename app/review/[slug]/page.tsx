import Image from "next/image"
import Link from "next/link"
import { notFound } from 'next/navigation'
import { Calendar, Clock, Star, User, Share2, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Mock data function - in a real app this would fetch from API/DB
function getReview(slug: string) {
  const review = {
    title: "위쳐 4 - 게럴트의 은퇴 후, 새로운 전설의 시작",
    excerpt: "시리의 이야기가 본격적으로 펼쳐집니다. CD Projekt RED가 선보이는 차세대 RPG의 정점. 방대한 오픈월드와 깊이 있는 선택 시스템이 돋보이는 2025년 최고의 기대작.",
    content: `
      <p>위쳐 시리즈의 4번째 넘버링이자 시리 오브 린리아의 첫 단독 주연작인 '위쳐 4'는 게럴트의 은퇴 이후 새로운 위쳐의 시대를 열어갑니다. CD Projekt RED는 사이버펑크 2077의 교훈을 바탕으로 안정적인 최적화와 방대한 콘텐츠를 동시에 제공하는 데 성공했습니다.</p>
      
      <h2>시리 오브 린리아, 진정한 위쳐가 되다</h2>
      <p>시리는 더 이상 도망치는 공주가 아닙니다. 정식 위쳐 훈련을 마친 그녀는 독자적인 검술과 마법 능력을 겸비한 강력한 전사로 성장했습니다. 게임은 시리만의 독특한 전투 스타일을 훌륭하게 구현했으며, 시공간 능력과 위쳐의 징표를 결합한 전투는 기존 시리즈와는 완전히 다른 재미를 선사합니다.</p>
      
      <h2>더욱 방대해진 세계</h2>
      <p>북부 왕국의 새로운 지역들과 니프가드 제국의 남쪽 지방까지, 위쳐 4의 맵은 시리즈 역대 최대 규모입니다. 각 지역은 고유한 문화와 정치적 상황을 가지고 있으며, 플레이어의 선택에 따라 완전히 다른 결말로 이어집니다. 특히 언리얼 엔진 5로 구현된 그래픽은 차세대 콘솔의 성능을 완벽하게 활용합니다.</p>
      
      <h2>선택과 결과의 무게</h2>
      <p>위쳐 시리즈의 전통인 '선택의 무게'는 이번 작품에서도 건재합니다. 단순한 선악 구도가 아닌, 복잡하게 얽힌 정치적·도덕적 딜레마 속에서 플레이어는 끊임없이 고민하게 됩니다. 심지어 사소해 보이는 선택들도 수십 시간 후에 예상치 못한 결과로 돌아오는 경우가 많습니다.</p>
      
      <h2>결론</h2>
      <p>위쳐 4는 단순히 게럴트의 뒤를 잇는 속편이 아닙니다. 이것은 시리만의 이야기이며, 위쳐 세계관의 새로운 장을 여는 걸작입니다. 기술적 완성도, 스토리텔링, 게임플레이 모든 면에서 2025년 최고의 RPG입니다.</p>
    `,
    image: "/witcher-4-ciri-gameplay.jpg",
    date: "2025년 3월 15일",
    readTime: "18분 읽기",
    rating: 10,
    category: "RPG",
    author: "김게임",
    slug: "witcher-4",
    pros: ["압도적인 볼륨과 완성도", "시리만의 독특한 전투 시스템", "차세대 그래픽 구현", "깊이 있는 선택 시스템", "안정적인 최적화"],
    cons: ["일부 지역의 로딩 시간", "초반 난이도 급상승"],
  }
  
  return review
}

export default function ReviewDetailPage({ params }: { params: { slug: string } }) {
  const review = getReview(params.slug)

  if (!review) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Header */}
        <div className="relative h-[400px] w-full md:h-[500px]">
          <Image
            src={review.image || "/placeholder.svg"}
            alt={review.title}
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-4 pb-12">
            <div className="mb-4 flex items-center gap-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
                {review.category}
              </Badge>
              <div className="flex items-center text-yellow-500">
                <Star className="mr-1 h-4 w-4 fill-current" />
                <span className="font-bold text-white">{review.rating}</span>
                <span className="text-white/80">/ 10</span>
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {review.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{review.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{review.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{review.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: review.content }} />
            </div>

            {/* Pros & Cons */}
            <div className="my-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-green-500/10 p-6 dark:bg-green-500/5">
                <h3 className="mb-4 flex items-center text-xl font-bold text-green-600 dark:text-green-400">
                  <span className="mr-2 text-2xl">+</span> 장점
                </h3>
                <ul className="space-y-2">
                  {review.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border bg-red-500/10 p-6 dark:bg-red-500/5">
                <h3 className="mb-4 flex items-center text-xl font-bold text-red-600 dark:text-red-400">
                  <span className="mr-2 text-2xl">-</span> 단점
                </h3>
                <ul className="space-y-2">
                  {review.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verdict */}
            <div className="mb-12 rounded-xl bg-muted p-8 text-center">
              <h3 className="mb-2 text-2xl font-bold">최종 평점</h3>
              <div className="mb-4 flex justify-center">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-8 w-8 ${
                        i < Math.floor(review.rating / 2)
                          ? "fill-yellow-500 text-yellow-500"
                          : "fill-muted text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-5xl font-black text-primary">{review.rating}</div>
              <p className="mt-4 text-muted-foreground">
                "올해 최고의 확장팩이자, 엘든 링의 완벽한 마무리"
              </p>
            </div>

            <Separator className="my-8" />

            {/* Share & Tags */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Badge variant="outline">RPG</Badge>
                <Badge variant="outline">Open World</Badge>
                <Badge variant="outline">Action</Badge>
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
                      alt={review.author}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{review.author}</h4>
                    <p className="text-xs text-muted-foreground">수석 에디터</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  RPG와 액션 게임을 주로 다룹니다. 스토리와 게임플레이의 조화를 중요하게 생각합니다.
                </p>
                <Button variant="outline" className="mt-4 w-full">
                  작성자의 다른 글 보기
                </Button>
              </div>

              {/* Related Reviews */}
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-4 font-bold">관련 리뷰</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Link key={i} href="#" className="group flex gap-3">
                      <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src="/placeholder.svg"
                          alt="Related game"
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium leading-tight group-hover:text-primary">
                          관련 게임 리뷰 제목 {i}
                        </h4>
                        <div className="mt-1 flex items-center gap-1 text-xs text-yellow-500">
                          <Star className="h-3 w-3 fill-current" />
                          <span>9.{i}</span>
                        </div>
                      </div>
                    </Link>
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
