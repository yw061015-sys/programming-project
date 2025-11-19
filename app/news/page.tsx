import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewsCard } from "@/components/news-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Mock data for news
const newsItems = [
  {
    title: "닌텐도 스위치 2, 2025년 3월 공식 출시 확정",
    excerpt: "닌텐도가 차세대 콘솔 '닌텐도 스위치 2'의 공식 출시일을 2025년 3월로 확정했습니다. 4K 지원과 향상된 성능이 특징입니다.",
    image: "/nintendo-switch-2.png",
    date: "2024년 6월 20일",
    readTime: "3분 읽기",
    category: "Hardware",
    slug: "nintendo-switch-2-release",
  },
  {
    title: "GTA 6, 2025년 가을 출시 예정 - 새로운 트레일러 공개",
    excerpt: "록스타 게임즈가 GTA 6의 두 번째 공식 트레일러를 공개하며 2025년 가을 출시를 재확인했습니다. 바이스 시티를 배경으로 합니다.",
    image: "/gta-6-vice-city.jpg",
    date: "2024년 6월 19일",
    readTime: "5분 읽기",
    category: "News",
    slug: "gta-6-trailer-release",
  },
  {
    title: "스팀 여름 할인 시작: 놓치지 말아야 할 게임 TOP 10",
    excerpt: "2024년 스팀 여름 할인이 시작되었습니다. 최대 90% 할인된 가격으로 인기 게임들을 만나보세요.",
    image: "/steam-summer-sale.jpg",
    date: "2024년 6월 18일",
    readTime: "7분 읽기",
    category: "Sale",
    slug: "steam-summer-sale-2024",
  },
  {
    title: "리그 오브 레전드, 신규 챔피언 '아리엘' 티저 공개",
    excerpt: "라이엇 게임즈가 리그 오브 레전드의 새로운 챔피언 '아리엘'의 티저 영상을 공개했습니다. 서포터 역할로 예상됩니다.",
    image: "/league-of-legends-new-champion.jpg",
    date: "2024년 6월 17일",
    readTime: "4분 읽기",
    category: "Esports",
    slug: "lol-new-champion-ariel",
  },
  {
    title: "플레이스테이션 5 Pro, 올해 11월 출시 루머",
    excerpt: "소니가 플레이스테이션 5의 프로 버전을 올해 11월에 출시할 것이라는 루머가 업계에서 확산되고 있습니다.",
    image: "/playstation-5-pro-console.jpg",
    date: "2024년 6월 16일",
    readTime: "4분 읽기",
    category: "Hardware",
    slug: "ps5-pro-november-rumor",
  },
  {
    title: "마인크래프트, 월간 활성 사용자 3억 명 돌파",
    excerpt: "마이크로소프트가 마인크래프트의 월간 활성 사용자가 3억 명을 돌파했다고 발표했습니다. 역대 최고 기록입니다.",
    image: "/minecraft-game.png",
    date: "2024년 6월 15일",
    readTime: "3분 읽기",
    category: "News",
    slug: "minecraft-300m-users",
  },
  {
    title: "오버워치 2, 새로운 시즌 11 업데이트 상세 공개",
    excerpt: "블리자드가 오버워치 2의 시즌 11 업데이트 내용을 공개했습니다. 새로운 영웅과 맵이 추가됩니다.",
    image: "/overwatch-2-season-11.jpg",
    date: "2024년 6월 14일",
    readTime: "6분 읽기",
    category: "Update",
    slug: "overwatch-2-season-11",
  },
  {
    title: "디아블로 4, 첫 번째 확장팩 '증오의 그릇' 10월 출시",
    excerpt: "블리자드가 디아블로 4의 첫 번째 확장팩 '증오의 그릇'을 10월에 출시한다고 발표했습니다. 새로운 클래스가 추가됩니다.",
    image: "/diablo-4-expansion.jpg",
    date: "2024년 6월 13일",
    readTime: "5분 읽기",
    category: "News",
    slug: "diablo-4-expansion-october",
  },
]

const categories = ["전체", "Hardware", "News", "Sale", "Esports", "Update"]

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
