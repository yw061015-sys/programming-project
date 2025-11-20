import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, Share2, BookOpen, ThumbsUp, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"

// Mock data function
function getGuide(slug: string) {
  const guideData: Record<string, any> = {
    "mh-wilds-weapon-combos": {
      title: "몬스터 헌터 와일즈 무기별 추천 콤보 가이드",
      excerpt: "대검부터 활까지, 몬스터 헌터 와일즈의 모든 무기별 핵심 콤보와 운용법을 정리했습니다.",
      content: `
        <p>몬스터 헌터 와일즈에서는 새로운 '집중 모드'의 추가로 무기 운용법에 큰 변화가 생겼습니다. 각 무기별 핵심 콤보와 변경점을 알아봅시다.</p>
        
        <h2>대검 (Great Sword)</h2>
        <p>대검은 여전히 강력한 한 방을 노리는 무기입니다. 집중 모드를 활용하면 몬스터의 약점을 정확하게 노려 '참 모아베기'를 적중시키기 쉬워졌습니다.</p>
        <ul>
          <li><strong>기본 콤보:</strong> 세로베기 -> 강 모아베기 -> 참 모아베기</li>
          <li><strong>집중 모드 활용:</strong> 집중 모드 중 가드 -> 킥 -> 태클 -> 참 모아베기 연계 가능</li>
        </ul>
        
        <h2>태도 (Long Sword)</h2>
        <p>태도는 더욱 화려하고 빠른 연계가 가능해졌습니다. 투구 깨기의 판정이 개선되었고, 새로운 카운터 기술이 추가되었습니다.</p>
      `,
      image: "/placeholder.svg?key=mh-wilds-guide",
      date: "2025년 3월 15일",
      readTime: "15분 읽기",
      category: "무기 가이드",
      difficulty: "중급",
      author: "헌터G",
      slug: "mh-wilds-weapon-combos",
      helpful: 1542,
      comments: 120,
    },
    "gta-6-money-making-guide": {
      title: "GTA 6 초반 돈 버는 방법 TOP 5",
      excerpt: "바이스 시티에서 살아남기 위한 자금 마련 꿀팁! 초반에 빠르게 돈을 버는 효율적인 방법들을 소개합니다.",
      content: `
        <p>GTA 6의 바이스 시티는 물가가 비쌉니다. 초반에 좋은 무기와 차량을 구매하기 위해서는 효율적인 돈벌이가 필수입니다.</p>
        
        <h2>1. 편의점 털기 (리스크: 하 / 수익: 하)</h2>
        <p>가장 고전적인 방법입니다. 마스크를 쓰고 편의점을 털면 100~500달러 정도를 얻을 수 있습니다. 경찰이 빨리 출동하니 주의하세요.</p>
        
        <h2>2. 차량 배달 미션 (리스크: 중 / 수익: 중)</h2>
        <p>시몬의 연락을 받으면 특정 차량을 훔쳐서 배달하는 미션을 수행할 수 있습니다. 차량 상태에 따라 보상이 달라지니 운전을 조심해야 합니다.</p>
      `,
      image: "/gta-6-vice-city-gameplay.jpg",
      date: "2025년 3월 14일",
      readTime: "8분 읽기",
      category: "팁 & 트릭",
      difficulty: "초급",
      author: "바이스시티주민",
      slug: "gta-6-money-making-guide",
      helpful: 2301,
      comments: 450,
    },
    "helldivers-2-beginner-guide": {
      title: "헬다이버즈 2 초보자 완벽 가이드 - 생존부터 전략까지",
      excerpt: "헬다이버즈 2를 처음 시작하는 플레이어를 위한 완벽한 가이드입니다.",
      content: `
        <p>헬다이버즈 2는 협동 플레이가 핵심인 게임입니다. 이 가이드에서는 초보자가 알아야 할 모든 것을 다룹니다.</p>
        
        <h2>1. 기본 조작법</h2>
        <p>헬다이버즈 2의 조작은 직관적이지만, 몇 가지 중요한 포인트가 있습니다. 먼저 스트라타젬(전략 장비) 호출 방법을 익혀야 합니다. 방향키 조합을 정확하게 입력하는 것이 생존의 핵심입니다.</p>
        
        <h3>스트라타젬 호출 팁</h3>
        <ul>
          <li>천천히 정확하게 입력하는 것이 빠르게 입력하는 것보다 중요합니다</li>
          <li>자주 사용하는 스트라타젬의 조합을 외워두세요</li>
          <li>팀원과 겹치지 않도록 위치를 확인하세요</li>
        </ul>
        
        <h2>2. 추천 장비 로드아웃</h2>
        <p>초보자에게 추천하는 기본 로드아웃입니다:</p>
        
        <h3>주무기</h3>
        <p>AR-23 Liberator가 가장 무난합니다. 탄약이 풍부하고 다양한 상황에 대응할 수 있습니다.</p>
        
        <h3>스트라타젬 구성</h3>
        <ul>
          <li><strong>Orbital Railcannon Strike</strong> - 강력한 적 처치용</li>
          <li><strong>Supply Pack</strong> - 탄약 보급</li>
          <li><strong>Machine Gun Sentry</strong> - 방어용</li>
          <li><strong>Reinforce</strong> - 팀원 부활</li>
        </ul>
        
        <h2>3. 생존 전략</h2>
        <p>헬다이버즈 2에서 생존하기 위한 핵심 전략들입니다.</p>
        
        <h3>포지셔닝</h3>
        <p>항상 팀원과 적절한 거리를 유지하세요. 너무 가까우면 범위 공격에 같이 당하고, 너무 멀면 지원이 어렵습니다.</p>
        
        <h3>탄약 관리</h3>
        <p>탄약을 아끼는 것이 중요합니다. 모든 적을 처치할 필요는 없습니다. 목표 달성에 집중하세요.</p>
        
        <h3>의사소통</h3>
        <p>마이크가 없어도 핑 시스템을 적극 활용하세요. 적의 위치, 아이템, 위험 요소를 표시할 수 있습니다.</p>
        
        <h2>4. 난이도별 팁</h2>
        
        <h3>난이도 1-3 (Trivial - Challenging)</h3>
        <p>게임에 익숙해지는 단계입니다. 다양한 무기와 스트라타젬을 실험해보세요.</p>
        
        <h3>난이도 4-6 (Hard - Extreme)</h3>
        <p>팀워크가 중요해집니다. 역할 분담을 명확히 하고, 스트라타젬을 효율적으로 사용하세요.</p>
        
        <h3>난이도 7-9 (Suicide Mission - Helldive)</h3>
        <p>최고 난이도입니다. 완벽한 팀워크와 전략이 필요합니다. 실수 하나가 전멸로 이어질 수 있습니다.</p>
        
        <h2>5. 자주 하는 실수</h2>
        <ul>
          <li>팀원을 쏘는 것 (우호 사격 주의!)</li>
          <li>혼자 멀리 가는 것</li>
          <li>스트라타젬을 아끼는 것 (적극적으로 사용하세요)</li>
          <li>목표를 무시하고 적만 처치하는 것</li>
        </ul>
        
        <h2>결론</h2>
        <p>헬다이버즈 2는 연습이 필요한 게임입니다. 처음에는 어렵게 느껴질 수 있지만, 팀원들과 협력하며 점차 실력이 늘어날 것입니다. 민주주의를 위해 싸우세요!</p>
      `,
      image: "/placeholder.svg?key=guide-detail",
      date: "2024년 6월 18일",
      readTime: "12분 읽기",
      category: "초보자 가이드",
      difficulty: "초급",
      author: "이가이드",
      slug: "helldivers-2-beginner-guide",
      helpful: 1247,
      comments: 89,
    },
  }

  return guideData[slug] || null
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug)

  if (!guide) {
    notFound()
  }

  const difficultyColor =
    {
      초급: "bg-green-500",
      중급: "bg-yellow-500",
      고급: "bg-red-500",
    }[guide.difficulty] || "bg-blue-500"

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Header */}
        <div className="relative h-[400px] w-full md:h-[500px]">
          <Image
            src={guide.image || "/placeholder.svg"}
            alt={guide.title}
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-4 pb-12">
            <div className="mb-4 flex items-center gap-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">{guide.category}</Badge>
              <Badge className={`${difficultyColor} text-white hover:opacity-90`}>{guide.difficulty}</Badge>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">{guide.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{guide.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{guide.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{guide.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{guide.helpful} 도움됨</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            {/* Quick Info Card */}
            <Card className="mb-8 p-6">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{guide.difficulty}</div>
                  <div className="text-xs text-muted-foreground">난이도</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{guide.readTime}</div>
                  <div className="text-xs text-muted-foreground">읽는 시간</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{guide.helpful}</div>
                  <div className="text-xs text-muted-foreground">도움됨</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{guide.comments}</div>
                  <div className="text-xs text-muted-foreground">댓글</div>
                </div>
              </div>
            </Card>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: guide.content }} />
            </div>

            <Separator className="my-8" />

            {/* Helpful Section */}
            <div className="flex items-center justify-between rounded-lg border bg-muted/50 p-6">
              <div>
                <h3 className="font-bold">이 가이드가 도움이 되었나요?</h3>
                <p className="text-sm text-muted-foreground">다른 플레이어들에게 추천해주세요!</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="lg">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  도움됨
                </Button>
                <Button variant="outline" size="lg">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  댓글
                </Button>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Share & Tags */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Badge variant="outline">헬다이버즈2</Badge>
                <Badge variant="outline">초보자</Badge>
                <Badge variant="outline">협동</Badge>
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
              {/* Table of Contents */}
              <Card className="p-6">
                <h3 className="mb-4 flex items-center font-bold">
                  <BookOpen className="mr-2 h-4 w-4" />
                  목차
                </h3>
                <nav className="space-y-2 text-sm">
                  <Link href="#" className="block text-muted-foreground hover:text-primary">
                    1. 기본 조작법
                  </Link>
                  <Link href="#" className="block text-muted-foreground hover:text-primary">
                    2. 추천 장비 로드아웃
                  </Link>
                  <Link href="#" className="block text-muted-foreground hover:text-primary">
                    3. 생존 전략
                  </Link>
                  <Link href="#" className="block text-muted-foreground hover:text-primary">
                    4. 난이도별 팁
                  </Link>
                  <Link href="#" className="block text-muted-foreground hover:text-primary">
                    5. 자주 하는 실수
                  </Link>
                </nav>
              </Card>

              {/* Author Profile */}
              <Card className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image src="/placeholder.svg" alt={guide.author} width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-bold">{guide.author}</h4>
                    <p className="text-xs text-muted-foreground">가이드 전문 작가</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  다양한 게임의 공략과 팁을 작성합니다. 초보자도 쉽게 이해할 수 있는 가이드를 만드는 것이 목표입니다.
                </p>
                <Button variant="outline" className="mt-4 w-full bg-transparent">
                  작성자의 다른 가이드 보기
                </Button>
              </Card>

              {/* Related Guides */}
              <Card className="p-6">
                <h3 className="mb-4 font-bold">관련 가이드</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Link key={i} href="#" className="group flex gap-3">
                      <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src="/placeholder.svg"
                          alt="Related guide"
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium leading-tight group-hover:text-primary">
                          관련 가이드 제목 {i}
                        </h4>
                        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                          <ThumbsUp className="h-3 w-3" />
                          <span>234 도움됨</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
