"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GuideCard } from "@/components/guide-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, PenSquare } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

// Mock data for guides
const guides = [
  {
    title: "몬스터 헌터 와일즈 무기별 추천 콤보 가이드",
    excerpt: "대검부터 활까지, 몬스터 헌터 와일즈의 모든 무기별 핵심 콤보와 운용법을 정리했습니다.",
    image: "/monster-hunter-wilds-gameplay.jpg",
    date: "2025년 3월 15일",
    readTime: "15분 읽기",
    category: "무기 가이드",
    difficulty: "중급",
    slug: "mh-wilds-weapon-combos",
  },
  {
    title: "GTA 6 초반 돈 버는 방법 TOP 5",
    excerpt: "바이스 시티에서 살아남기 위한 자금 마련 꿀팁! 초반에 빠르게 돈을 버는 효율적인 방법들을 소개합니다.",
    image: "/gta-6-vice-city-gameplay.jpg",
    date: "2025년 3월 14일",
    readTime: "8분 읽기",
    category: "팁 & 트릭",
    difficulty: "초급",
    slug: "gta-6-money-making-guide",
  },
  {
    title: "문명 7 승리 조건별 공략 - 과학 승리 편",
    excerpt: "문명 7에서 과학 승리를 달성하기 위한 테크 트리 순서와 불가사의 건설 전략을 상세히 알아봅니다.",
    image: "/civilization-7-gameplay.jpg",
    date: "2025년 3월 12일",
    readTime: "20분 읽기",
    category: "전략 가이드",
    difficulty: "고급",
    slug: "civ-7-science-victory",
  },
  {
    title: "데스 스트랜딩 2 배송 루트 최적화 가이드",
    excerpt: "험난한 지형을 극복하고 가장 빠르게 화물을 배송할 수 있는 추천 루트와 장비 세팅을 공유합니다.",
    image: "/death-stranding-2-gameplay.jpg",
    date: "2025년 3월 10일",
    readTime: "12분 읽기",
    category: "탐험 가이드",
    difficulty: "중급",
    slug: "ds2-delivery-routes",
  },
  {
    title: "메탈 기어 솔리드 델타 보스전 노킬 공략",
    excerpt: "모든 보스를 살상하지 않고 제압하는 방법. 스태미나 킬을 위한 무기 선택과 패턴 분석.",
    image: "/metal-gear-solid-delta-gameplay.jpg",
    date: "2025년 3월 08일",
    readTime: "18분 읽기",
    category: "보스 공략",
    difficulty: "고급",
    slug: "mgs-delta-boss-no-kill",
  },
  {
    title: "포켓몬 레전드 Z-A 스타팅 포켓몬 추천",
    excerpt: "미르시티에서의 모험을 함께할 최고의 파트너는? 스타팅 포켓몬들의 최종 진화와 성능을 분석합니다.",
    image: "/pokemon-legends-za-gameplay.jpg",
    date: "2025년 3월 05일",
    readTime: "6분 읽기",
    category: "초보자 가이드",
    difficulty: "초급",
    slug: "pokemon-za-starters",
  },
  {
    title: "보더랜드 4 캐릭터 스킬 트리 분석",
    excerpt: "새로운 볼트 헌터들의 스킬 트리를 심층 분석하고, 플레이 스타일에 맞는 최적의 빌드를 추천합니다.",
    image: "/borderlands-4-gameplay.jpg",
    date: "2025년 3월 03일",
    readTime: "14분 읽기",
    category: "빌드 가이드",
    difficulty: "중급",
    slug: "borderlands-4-skill-trees",
  },
  {
    title: "철권 8 시즌 2 신규 캐릭터 운영법",
    excerpt: "시즌 2에 추가된 신규 캐릭터들의 콤보, 딜캐, 운영법을 프로게이머의 관점에서 분석했습니다.",
    image: "/tekken-8-gameplay.jpg",
    date: "2025년 3월 01일",
    readTime: "10분 읽기",
    category: "캐릭터 공략",
    difficulty: "고급",
    slug: "tekken-8-season-2-guide",
  },
]

const categories = [
  "전체",
  "무기 가이드",
  "팁 & 트릭",
  "전략 가이드",
  "탐험 가이드",
  "보스 공략",
  "초보자 가이드",
  "빌드 가이드",
  "캐릭터 공략",
]
const difficulties = ["전체", "초급", "중급", "고급"]

export default function GuidesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">게임 가이드</h1>
            <p className="text-muted-foreground">2025년 최신 게임들의 공략과 팁을 확인하세요.</p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row items-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full sm:w-auto">
                  <PenSquare className="mr-2 h-4 w-4" />
                  가이드 작성
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>새 가이드 작성</DialogTitle>
                  <DialogDescription>나만의 게임 공략을 공유해주세요.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">제목</label>
                    <Input placeholder="가이드 제목을 입력하세요" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">카테고리</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="카테고리 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories
                          .filter((c) => c !== "전체")
                          .map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">내용</label>
                    <Textarea placeholder="가이드 내용을 입력하세요" rows={10} />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    취소
                  </Button>
                  <Button onClick={() => setIsDialogOpen(false)}>작성 완료</Button>
                </div>
              </DialogContent>
            </Dialog>

            <div className="relative w-full sm:w-auto">
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
