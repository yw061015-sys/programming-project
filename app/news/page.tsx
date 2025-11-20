import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewsCard } from "@/components/news-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Mock data for news
const newsItems = [
  {
    title: "닌텐도 스위치 2, 2025년 3월 공식 출시 확정",
    excerpt:
      "닌텐도가 차세대 콘솔 '닌텐도 스위치 2'의 공식 출시일을 2025년 3월로 확정했습니다. 4K 지원과 향상된 성능이 특징입니다.",
    image: "/nintendo-switch-2.png",
    date: "2024년 6월 20일",
    readTime: "3분 읽기",
    category: "Hardware",
    slug: "nintendo-switch-2-release",
  },
  {
    title: "GTA 6, 2025년 가을 출시 확정 - 바이스 시티의 귀환",
    excerpt:
      "록스타 게임즈가 GTA 6의 출시일을 2025년 가을로 공식 확정했습니다. 역대 최대 규모의 오픈 월드를 경험하세요.",
    image: "/gta-6-vice-city-gameplay.jpg",
    date: "2025년 3월 15일",
    readTime: "5분 읽기",
    category: "News",
    slug: "gta-6-release-date-confirmed",
  },
  {
    title: "닌텐도 스위치 2 런칭 타이틀 라인업 공개",
    excerpt: "차세대 닌텐도 콘솔의 런칭 타이틀로 3D 마리오 신작과 마리오 카트 9이 확정되었습니다.",
    image: "/nintendo-switch-2.png",
    date: "2025년 3월 14일",
    readTime: "4분 읽기",
    category: "Hardware",
    slug: "switch-2-launch-titles",
  },
  {
    title: "몬스터 헌터 와일즈, 오픈 베타 테스트 일정 발표",
    excerpt: "캡콤의 기대작 몬스터 헌터 와일즈의 오픈 베타가 다음 달 시작됩니다. 새로운 무기 액션을 미리 체험해보세요.",
    image: "/monster-hunter-wilds-gameplay.jpg",
    date: "2025년 3월 12일",
    readTime: "3분 읽기",
    category: "Event",
    slug: "monster-hunter-wilds-beta",
  },
  {
    title: "더 위쳐 4: 폴라리스, 첫 게임플레이 트레일러 공개",
    excerpt: "CD 프로젝트 레드가 위쳐 시리즈의 새로운 시작을 알리는 '폴라리스'의 게임플레이 영상을 공개했습니다.",
    image: "/elden-ring-shadow-of-the-erdtree-gameplay-screensh.jpg",
    date: "2025년 3월 10일",
    readTime: "6분 읽기",
    category: "Trailer",
    slug: "witcher-4-gameplay-reveal",
  },
  {
    title: "발로란트 모바일, 글로벌 출시일 발표",
    excerpt:
      "라이엇 게임즈의 인기 FPS 발로란트가 드디어 모바일로 출시됩니다. PC 버전과의 크로스 프로그레션을 지원합니다.",
    image: "/valorant-mobile-gameplay.jpg",
    date: "2025년 3월 08일",
    readTime: "3분 읽기",
    category: "Mobile",
    slug: "valorant-mobile-launch",
  },
  {
    title: "엘든 링 2 개발 착수? 미야자키 히데타카 인터뷰",
    excerpt: "프롬 소프트웨어의 미야자키 히데타카 디렉터가 엘든 링의 후속작 가능성에 대해 언급했습니다.",
    image: "/elden-ring-shadow-of-the-erdtree-gameplay-screensh.jpg",
    date: "2025년 3월 05일",
    readTime: "4분 읽기",
    category: "Interview",
    slug: "elden-ring-sequel-interview",
  },
  {
    title: "스팀 봄 맞이 대규모 할인 시작",
    excerpt: "2025년 스팀 봄 할인이 시작되었습니다. 최신작부터 인디 게임까지 최대 80% 할인된 가격으로 만나보세요.",
    image: "/steam-summer-sale.jpg",
    date: "2025년 3월 01일",
    readTime: "2분 읽기",
    category: "Sale",
    slug: "steam-spring-sale-2025",
  },
  {
    title: "메탈 기어 솔리드 델타, 원작 초월한 그래픽 화제",
    excerpt: "스네이크 이터의 리메이크작이 언리얼 엔진 5로 재탄생했습니다. 비교 영상을 통해 달라진 점을 확인하세요.",
    image: "/metal-gear-solid-delta-gameplay.jpg",
    date: "2025년 2월 28일",
    readTime: "5분 읽기",
    category: "Review",
    slug: "mgs-delta-graphics-comparison",
  },
]

const categories = [
  "전체",
  "Hardware",
  "News",
  "Sale",
  "Esports",
  "Update",
  "Event",
  "Trailer",
  "Mobile",
  "Interview",
  "Review",
]

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">게임 뉴스</h1>
            <p className="text-muted-foreground">게임 업계의 최신 소식을 가장 빠르게 전해드립니다.</p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="뉴스 검색..." className="pl-8 w-full sm:w-[250px]" />
            </div>
            <Select defaultValue="latest">
              <SelectTrigger className="w-full sm:w-[150px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="정렬" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">최신순</SelectItem>
                <SelectItem value="popular">인기순</SelectItem>
                <SelectItem value="trending">트렌딩</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "전체" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {newsItems.map((news) => (
            <NewsCard key={news.slug} {...news} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg">
            더 많은 뉴스 로드하기
          </Button>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
