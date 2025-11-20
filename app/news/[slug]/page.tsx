import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, Share2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Mock data function
function getNewsItem(slug: string) {
  const newsData: Record<string, any> = {
    "gta-6-release-date-confirmed": {
      title: "GTA 6, 2025년 가을 출시 확정 - 바이스 시티의 귀환",
      excerpt: "록스타 게임즈가 GTA 6의 출시일을 2025년 가을로 공식 확정했습니다.",
      content: `
        <p>전 세계 게이머들이 기다려온 순간이 왔습니다. 록스타 게임즈가 'Grand Theft Auto VI (GTA 6)'의 출시일을 2025년 가을로 공식 확정했습니다. 이번 발표는 록스타 게임즈의 공식 블로그와 소셜 미디어를 통해 이루어졌습니다.</p>
        
        <h2>바이스 시티의 화려한 귀환</h2>
        <p>GTA 6는 시리즈 팬들에게 친숙한 '바이스 시티'를 배경으로 합니다. 하지만 이번 바이스 시티는 전작과는 비교할 수 없을 정도로 거대하고 디테일하게 구현되었습니다. 플로리다 주를 모티브로 한 '레오니다' 주 전체가 무대가 되며, 늪지대, 해변, 도심 등 다양한 환경을 탐험할 수 있습니다.</p>
        
        <h2>두 명의 주인공, 루시아와 제이슨</h2>
        <p>이번 작품은 시리즈 최초로 여성 주인공 '루시아'가 등장하며, 그녀의 파트너 '제이슨'과 함께 보니 앤 클라이드 스타일의 범죄 드라마를 그려나갑니다. 플레이어는 두 캐릭터를 자유롭게 전환하며 미션을 수행하고 스토리를 진행하게 됩니다.</p>
        
        <h2>차세대 그래픽과 물리 엔진</h2>
        <p>공개된 트레일러와 스크린샷에서는 현존하는 게임 중 최고 수준의 그래픽을 보여줍니다. 특히 물 표현, 조명 효과, 그리고 NPC들의 인공지능이 대폭 개선되어 살아있는 도시를 경험할 수 있을 것으로 기대됩니다.</p>
      `,
      image: "/gta-6-vice-city-gameplay.jpg",
      date: "2025년 3월 15일",
      readTime: "5분 읽기",
      category: "News",
      author: "김락스타",
      slug: "gta-6-release-date-confirmed",
    },
    "switch-2-launch-titles": {
      title: "닌텐도 스위치 2 런칭 타이틀 라인업 공개",
      excerpt: "차세대 닌텐도 콘솔의 런칭 타이틀로 3D 마리오 신작과 마리오 카트 9이 확정되었습니다.",
      content: `
        <p>닌텐도가 차세대 콘솔 '닌텐도 스위치 2'의 출시와 함께 선보일 런칭 타이틀 라인업을 공개했습니다. 이번 라인업은 닌텐도 역사상 가장 강력한 라인업이라는 평가를 받고 있습니다.</p>
        
        <h2>3D 마리오 신작: 슈퍼 마리오 유니버스</h2>
        <p>오디세이 이후 8년 만에 선보이는 3D 마리오 신작 '슈퍼 마리오 유니버스'가 런칭 타이틀로 확정되었습니다. 이번 작품은 우주를 배경으로 하며, 오픈 월드에 가까운 거대한 스테이지를 자유롭게 탐험할 수 있습니다.</p>
        
        <h2>마리오 카트 9</h2>
        <p>국민 레이싱 게임 마리오 카트의 신작도 동시 발매됩니다. 새로운 캐릭터와 카트, 그리고 닌텐도 IP를 넘어선 다양한 게스트 캐릭터들이 참전할 예정입니다.</p>
      `,
      image: "/nintendo-switch-2.png",
      date: "2025년 3월 14일",
      readTime: "4분 읽기",
      category: "Hardware",
      author: "박닌텐도",
      slug: "switch-2-launch-titles",
    },
    "monster-hunter-wilds-beta": {
      title: "몬스터 헌터 와일즈, 오픈 베타 테스트 일정 발표",
      excerpt: "캡콤의 기대작 몬스터 헌터 와일즈의 오픈 베타가 다음 달 시작됩니다.",
      content: `
        <p>캡콤이 '몬스터 헌터 와일즈'의 오픈 베타 테스트 일정을 발표했습니다. 이번 테스트는 PS5, Xbox Series X|S, PC 플랫폼에서 동시에 진행되며, 크로스 플레이를 지원합니다.</p>
        
        <h2>새로운 시스템: 집중 모드</h2>
        <p>이번 작품의 핵심 시스템인 '집중 모드'를 미리 체험해볼 수 있습니다. 몬스터의 약점을 정밀하게 타격하고, 상처를 입혀 큰 데미지를 주는 새로운 사냥 방식을 익혀보세요.</p>
      `,
      image: "/placeholder.svg?key=mh-wilds",
      date: "2025년 3월 12일",
      readTime: "3분 읽기",
      category: "Event",
      author: "이헌터",
      slug: "monster-hunter-wilds-beta",
    },
    "witcher-4-gameplay-reveal": {
      title: "더 위쳐 4: 폴라리스, 첫 게임플레이 트레일러 공개",
      excerpt: "CD 프로젝트 레드가 위쳐 시리즈의 새로운 시작을 알리는 '폴라리스'의 게임플레이 영상을 공개했습니다.",
      content: `
        <p>CD 프로젝트 레드가 '더 위쳐' 시리즈의 차기작, 코드네임 '폴라리스'의 첫 게임플레이 트레일러를 공개했습니다. 이번 작품은 게롤트가 아닌 새로운 위쳐 교단을 다루며, 언리얼 엔진 5로 개발되어 압도적인 비주얼을 자랑합니다.</p>
      `,
      image: "/witcher-4-ciri-gameplay.jpg",
      date: "2025년 3월 10일",
      readTime: "6분 읽기",
      category: "Trailer",
      author: "최위쳐",
      slug: "witcher-4-gameplay-reveal",
    },
  }

  return newsData[slug] || newsData["gta-6-release-date-confirmed"]
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
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">{news.category}</Badge>
              <Badge variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                <TrendingUp className="mr-1 h-3 w-3" />
                인기
              </Badge>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">{news.title}</h1>
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
                    <Image src="/placeholder.svg" alt={news.author} width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-bold">{news.author}</h4>
                    <p className="text-xs text-muted-foreground">하드웨어 전문 기자</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  게임 하드웨어와 기술 트렌드를 전문적으로 다룹니다. 최신 콘솔과 PC 하드웨어 소식을 전해드립니다.
                </p>
                <Button variant="outline" className="mt-4 w-full bg-transparent">
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
