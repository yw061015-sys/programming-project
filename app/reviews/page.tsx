import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, PenSquare } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for reviews
const reviews = [
  {
    title: "위쳐 4 - 게럴트의 은퇴 후, 새로운 전설의 시작",
    excerpt: "시리의 이야기가 본격적으로 펼쳐집니다. CD Projekt RED가 선보이는 차세대 RPG의 정점.",
    image: "/witcher-4-ciri-gameplay.jpg",
    date: "2025년 3월 15일",
    readTime: "18분 읽기",
    rating: 10,
    category: "RPG",
    slug: "witcher-4",
  },
  {
    title: "GTA 6 - 바이스 시티의 귀환과 범죄 서사시의 정점",
    excerpt: "락스타의 역작이 돌아왔습니다. 전례 없는 규모의 오픈월드와 두 주인공의 얽힌 이야기.",
    image: "/gta-6-vice-city-gameplay.jpg",
    date: "2025년 11월 10일",
    readTime: "20분 읽기",
    rating: 10,
    category: "Action",
    slug: "gta-6",
  },
  {
    title: "메탈 기어 솔리드 델타: 스네이크 이터 - 완벽한 리메이크",
    excerpt: "전설적인 스텔스 액션이 현세대 그래픽으로 재탄생. 오리지널의 감동을 그대로 살린 리메이크.",
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
  {
    title: "데스 스트랜딩 2 - 온 더 비치 - 고지마의 비전이 완성되다",
    excerpt: "고지마 히데오의 독특한 세계관이 더욱 심화됩니다. 연결과 단절에 대한 철학적 메시지가 인상적입니다.",
    image: "/death-stranding-2-gameplay.jpg",
    date: "2025년 9월 5일",
    readTime: "17분 읽기",
    rating: 9.2,
    category: "Action",
    slug: "death-stranding-2",
  },
]

export default function ReviewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">게임 리뷰</h1>
            <p className="text-muted-foreground">최신 게임에 대한 심층적인 분석과 평가를 확인하세요.</p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Link href="/reviews/write">
              <Button className="w-full sm:w-auto">
                <PenSquare className="mr-2 h-4 w-4" />
                리뷰 작성
              </Button>
            </Link>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="리뷰 검색..." className="pl-8 w-full sm:w-[250px]" />
            </div>
            <Select defaultValue="latest">
              <SelectTrigger className="w-full sm:w-[150px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="정렬" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">최신순</SelectItem>
                <SelectItem value="rating">평점순</SelectItem>
                <SelectItem value="popular">인기순</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {reviews.map((review) => (
            <BlogCard key={review.slug} {...review} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg">
            더 많은 리뷰 로드하기
          </Button>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
