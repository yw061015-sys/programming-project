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
    "civ-7-science-victory": {
      title: "문명 7 승리 조건별 공략 - 과학 승리 편",
      excerpt: "문명 7에서 과학 승리를 달성하기 위한 테크 트리 순서와 불가사의 건설 전략을 상세히 알아봅니다.",
      content: `
        <p>문명 7의 과학 승리는 이전 시리즈보다 더욱 복잡하고 전략적인 접근이 필요합니다. 우주 개발 경쟁에서 승리하기 위한 핵심 전략을 알아봅시다.</p>
        
        <h2>1. 초반 빌드 오더</h2>
        <p>과학 승리의 핵심은 초반 캠퍼스 입지 선정입니다. 산맥 주변이나 지열 열하 주변을 선점하는 것이 중요합니다.</p>
        <ul>
          <li>정찰병 -> 투석병사 -> 개척자 -> 캠퍼스</li>
          <li>초반 유레카 조건을 달성하여 기술 연구 속도를 가속화하세요.</li>
        </ul>

        <h2>2. 핵심 불가사의</h2>
        <p>과학 승리에 필수적인 불가사의들입니다.</p>
        <ul>
          <li><strong>알렉산드리아 도서관:</strong> 모든 기술의 유레카를 발동시킵니다.</li>
          <li><strong>옥스퍼드 대학:</strong> 무작위 기술 2개를 완료하고 과학 산출량을 증가시킵니다.</li>
        </ul>

        <h2>3. 후반 운영</h2>
        <p>우주 공항 건설 후에는 프로젝트 가속을 위해 생산력에 집중해야 합니다. 알루미늄 자원 확보가 필수적입니다.</p>
      `,
      image: "/placeholder.svg?key=civ7-guide",
      date: "2025년 3월 12일",
      readTime: "20분 읽기",
      category: "전략 가이드",
      difficulty: "고급",
      author: "문명하셨습니다",
      slug: "civ-7-science-victory",
      helpful: 3421,
      comments: 512,
    },
    "ds2-delivery-routes": {
      title: "데스 스트랜딩 2 배송 루트 최적화 가이드",
      excerpt: "험난한 지형을 극복하고 가장 빠르게 화물을 배송할 수 있는 추천 루트와 장비 세팅을 공유합니다.",
      content: `
        <p>데스 스트랜딩 2의 새로운 맵은 더욱 험난해졌습니다. 하지만 적절한 장비와 루트를 선택하면 배송 시간을 획기적으로 단축할 수 있습니다.</p>
        
        <h2>1. 추천 장비 세팅</h2>
        <p>이번 작에서 새로 추가된 '그래플링 훅'과 '호버 캐리어 Mk.2'는 필수입니다.</p>
        
        <h2>2. 주요 배송 루트</h2>
        <h3>센트럴 노드 -> 마운틴 시티</h3>
        <p>직선 거리로는 가깝지만 산맥이 가로막고 있습니다. 남쪽 우회로를 이용하면 BT와의 조우를 피할 수 있습니다.</p>
      `,
      image: "/placeholder.svg?key=ds2-guide",
      date: "2025년 3월 10일",
      readTime: "12분 읽기",
      category: "탐험 가이드",
      difficulty: "중급",
      author: "전설의배달부",
      slug: "ds2-delivery-routes",
      helpful: 1890,
      comments: 230,
    },
    "mgs-delta-boss-no-kill": {
      title: "메탈 기어 솔리드 델타 보스전 노킬 공략",
      excerpt: "모든 보스를 살상하지 않고 제압하는 방법. 스태미나 킬을 위한 무기 선택과 패턴 분석.",
      content: `
        <p>메탈 기어 솔리드 델타: 스네이크 이터의 리메이크에서도 노킬 클리어는 진정한 스네이크의 증명입니다.</p>
        
        <h2>오셀롯</h2>
        <p>오셀롯은 재장전 타이밍을 노려야 합니다. Mk.22 마취총으로 머리를 노리세요.</p>
        
        <h2>더 페인</h2>
        <p>벌들을 연막탄으로 쫓아내고 본체를 공격해야 합니다. 물속으로 들어가면 벌들의 공격을 피할 수 있습니다.</p>
      `,
      image: "/metal-gear-solid-delta-gameplay.jpg",
      date: "2025년 3월 08일",
      readTime: "18분 읽기",
      category: "보스 공략",
      difficulty: "고급",
      author: "빅보스",
      slug: "mgs-delta-boss-no-kill",
      helpful: 4500,
      comments: 670,
    },
    "pokemon-za-starters": {
      title: "포켓몬 레전드 Z-A 스타팅 포켓몬 추천",
      excerpt: "미르시티에서의 모험을 함께할 최고의 파트너는? 스타팅 포켓몬들의 최종 진화와 성능을 분석합니다.",
      content: `
        <p>포켓몬 레전드 Z-A의 스타팅 포켓몬 3마리는 각각 독특한 메가 진화 형태를 가지고 있습니다.</p>
        
        <h2>풀 타입</h2>
        <p>최종 진화 시 풀/페어리 타입이 되며, 높은 특수 공격력을 가집니다.</p>
        
        <h2>불꽃 타입</h2>
        <p>최종 진화 시 불꽃/강철 타입이 되며, 방어 상성이 매우 우수합니다.</p>
        
        <h2>물 타입</h2>
        <p>최종 진화 시 물/격투 타입이 되며, 강력한 물리 공격수로 활약합니다.</p>
      `,
      image: "/placeholder.svg?key=pokemon-za",
      date: "2025년 3월 05일",
      readTime: "6분 읽기",
      category: "초보자 가이드",
      difficulty: "초급",
      author: "오박사",
      slug: "pokemon-za-starters",
      helpful: 5600,
      comments: 1200,
    },
    "borderlands-4-skill-trees": {
      title: "보더랜드 4 캐릭터 스킬 트리 분석",
      excerpt: "새로운 볼트 헌터들의 스킬 트리를 심층 분석하고, 플레이 스타일에 맞는 최적의 빌드를 추천합니다.",
      content: `
        <p>보더랜드 4의 새로운 볼트 헌터들은 더욱 다양하고 강력한 액션 스킬을 가지고 돌아왔습니다.</p>
        
        <h2>비스트마스터</h2>
        <p>펫과 함께 싸우는 클래스입니다. 이번 작에서는 펫을 직접 조종할 수 있는 스킬이 추가되었습니다.</p>
        
        <h2>사이렌</h2>
        <p>페이즈 워크를 활용한 근접 공격 빌드가 매우 강력합니다.</p>
      `,
      image: "/placeholder.svg?key=borderlands4",
      date: "2025년 3월 03일",
      readTime: "14분 읽기",
      category: "빌드 가이드",
      difficulty: "중급",
      author: "볼트헌터",
      slug: "borderlands-4-skill-trees",
      helpful: 1100,
      comments: 150,
    },
    "tekken-8-season-2-guide": {
      title: "철권 8 시즌 2 신규 캐릭터 운영법",
      excerpt: "시즌 2에 추가된 신규 캐릭터들의 콤보, 딜캐, 운영법을 프로게이머의 관점에서 분석했습니다.",
      content: `
        <p>철권 8 시즌 2 업데이트로 메타가 크게 변화했습니다. 신규 캐릭터들의 특징을 알아봅시다.</p>
        
        <h2>신규 캐릭터 A</h2>
        <p>빠른 기동성과 강력한 하단 기술을 보유하고 있습니다. 벽 콤보 데미지가 절륜합니다.</p>
        
        <h2>신규 캐릭터 B</h2>
        <p>반격기 위주의 수비적인 캐릭터입니다. 상대의 공격을 받아치는데 특화되어 있습니다.</p>
      `,
      image: "/tekken-8-gameplay.jpg",
      date: "2025년 3월 01일",
      readTime: "10분 읽기",
      category: "캐릭터 공략",
      difficulty: "고급",
      author: "무릎",
      slug: "tekken-8-season-2-guide",
      helpful: 3200,
      comments: 400,
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
