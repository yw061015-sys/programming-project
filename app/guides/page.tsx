import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GuideCard } from "@/components/guide-card"
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

// Mock data for guides
const guides = [
  {
    title: "헬다이버즈 2 초보자 완벽 가이드 - 생존부터 전략까지",
    excerpt: "헬다이버즈 2를 처음 시작하는 플레이어를 위한 완벽한 가이드입니다. 기본 조작부터 고급 전략까지 모두 다룹니다.",
    image: "/placeholder.svg?key=guide1",
    date: "2024년 6월 18일",
    readTime: "12분 읽기",
    category: "초보자 가이드",
    difficulty: "초급",
    slug: "helldivers-2-beginner-guide",
  },
  {
    title: "엘든 링 DLC 보스 공략 - 메시머 완벽 격파법",
    excerpt: "황금 나무의 그림자에서 가장 어려운 보스 중 하나인 메시머를 쉽게 격파하는 방법을 알려드립니다.",
    image: "/placeholder.svg?key=guide2",
    date: "2024년 6월 17일",
    readTime: "8분 읽기",
    category: "보스 공략",
    difficulty: "고급",
    slug: "elden-ring-messmer-boss-guide",
  },
  {
    title: "발더스 게이트 3 최적 빌드 가이드 - 클래스별 추천",
    excerpt: "각 클래스별로 최고의 성능을 발휘할 수 있는 빌드를 소개합니다. 초보자부터 고수까지 모두에게 유용합니다.",
    image: "/placeholder.svg?key=guide3",
    date: "2024년 6월 15일",
    readTime: "15분 읽기",
    category: "빌드 가이드",
    difficulty: "중급",
    slug: "baldurs-gate-3-best-builds",
  },
  {
    title: "스타듀 밸리 완벽 농장 레이아웃 - 효율 극대화",
    excerpt: "공간을 최대한 활용하면서도 아름다운 농장을 만드는 방법을 알려드립니다. 시즌별 작물 배치 팁 포함.",
    image: "/placeholder.svg?key=guide4",
    date: "2024년 6월 14일",
    readTime: "10분 읽기",
    category: "팁 & 트릭",
    difficulty: "초급",
    slug: "stardew-valley-farm-layout",
  },
  {
    title: "리그 오브 레전드 시즌 14 정글 가이드",
    excerpt: "시즌 14의 메타에 맞는 정글 플레이 방법과 챔피언 추천을 다룹니다. 갱킹 타이밍과 오브젝트 관리법 포함.",
    image: "/placeholder.svg?key=guide5",
    date: "2024년 6월 13일",
    readTime: "20분 읽기",
    category: "전략 가이드",
    difficulty: "고급",
    slug: "lol-season-14-jungle-guide",
  },
  {
    title: "마인크래프트 레드스톤 기초 - 자동화 시스템 만들기",
    excerpt: "레드스톤의 기본 원리부터 간단한 자동화 시스템을 만드는 방법까지 단계별로 설명합니다.",
    image: "/placeholder.svg?key=guide6",
    date: "2024년 6월 12일",
    readTime: "18분 읽기",
    category: "튜토리얼",
    difficulty: "중급",
    slug: "minecraft-redstone-basics",
  },
  {
    title: "오버워치 2 에임 향상 가이드 - 프로처럼 조준하기",
    excerpt: "에임 실력을 향상시키는 구체적인 방법과 연습 루틴을 소개합니다. 감도 설정부터 크로스헤어 커스터마이징까지.",
    image: "/placeholder.svg?key=guide7",
    date: "2024년 6월 11일",
    readTime: "14분 읽기",
    category: "스킬 향상",
    difficulty: "중급",
    slug: "overwatch-2-aim-guide",
  },
  {
    title: "디아블로 4 엔드게임 가이드 - 티어 100 달성하기",
    excerpt: "나이트메어 던전 티어 100을 달성하기 위한 완벽한 로드맵입니다. 장비 파밍과 빌드 최적화 방법 포함.",
    image: "/placeholder.svg?key=guide8",
    date: "2024년 6월 10일",
    readTime: "16분 읽기",
    category: "엔드게임",
    difficulty: "고급",
    slug: "diablo-4-endgame-guide",
  },
]

const categories = ["전체", "초보자 가이드", "보스 공략", "빌드 가이드", "팁 & 트릭", "전략 가이드", "튜토리얼"]
const difficulties = ["전체", "초급", "중급", "고급"]

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">게임 가이드</h1>
            <p className="text-muted-foreground">게임을 더 잘 즐기기 위한 공략과 팁을 제공합니다.</p>
          </div>
          
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="가이드 검색..." className="pl-8 w-full sm:w-[250px]" />
            </div>
            <Select defaultValue="latest">
              <SelectTrigger className="w-full sm:w-[150px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="정렬" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">최신순</SelectItem>
                <SelectItem value="popular">인기순</SelectItem>
                <SelectItem value="helpful">도움됨순</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 space-y-4">
          <div>
            <h3 className="mb-2 text-sm font-semibold">카테고리</h3>
            <div className="flex flex-wrap gap-2">
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
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold">난이도</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <Badge
                  key={difficulty}
                  variant={difficulty === "전체" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                >
                  {difficulty}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} {...guide} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg">
            더 많은 가이드 로드하기
          </Button>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
