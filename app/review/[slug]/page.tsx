import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, Star, User, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

function getReview(slug: string) {
  const reviews: Record<string, any> = {
    "witcher-4": {
      title: "위쳐 4 - 게럴트의 은퇴 후, 새로운 전설의 시작",
      excerpt: "시리의 이야기가 본격적으로 펼쳐집니다. CD Projekt RED가 선보이는 차세대 RPG의 정점.",
      content: `
        <p>위쳐 시리즈의 4번째 넘버링이자 시리 오브 린리아의 첫 단독 주연작인 '위쳐 4'는 게럴트의 은퇴 이후 새로운 위쳐의 시대를 열어갑니다.</p>
        <h2>시리 오브 린리아, 진정한 위쳐가 되다</h2>
        <p>시리는 더 이상 도망치는 공주가 아닙니다. 정식 위쳐 훈련을 마친 그녀는 독자적인 검술과 마법 능력을 겸비한 강력한 전사로 성장했습니다.</p>
        <h2>결론</h2>
        <p>위쳐 4는 2025년 최고의 RPG입니다.</p>
      `,
      image: "/witcher-4-ciri-gameplay.jpg",
      date: "2025년 3월 15일",
      readTime: "18분 읽기",
      rating: 10,
      category: "RPG",
      author: "김게임",
      slug: "witcher-4",
      pros: ["압도적인 볼륨과 완성도", "시리만의 독특한 전투 시스템", "차세대 그래픽", "깊이 있는 선택 시스템"],
      cons: ["일부 지역의 로딩 시간", "초반 난이도 급상승"],
    },
    "gta-6": {
      title: "GTA 6 - 바이스 시티의 귀환과 범죄 서사시의 정점",
      excerpt: "락스타의 역작이 돌아왔습니다. 전례 없는 규모의 오픈월드와 두 주인공의 얽힌 이야기.",
      content: `
        <p>10년 만에 돌아온 GTA 시리즈의 최신작. 바이스 시티가 완전히 새로운 모습으로 재탄생했습니다.</p>
        <h2>두 주인공의 이야기</h2>
        <p>제이슨과 루시아, 두 주인공의 관점에서 펼쳐지는 범죄 드라마는 시리즈 최고의 스토리텔링을 자랑합니다.</p>
        <h2>차세대 오픈월드</h2>
        <p>바이스 시티와 주변 지역을 합친 맵 크기는 GTA 5의 2배 이상. 모든 건물에 들어갈 수 있고, NPC들은 각자의 일상을 살아갑니다.</p>
        <h2>결론</h2>
        <p>GTA 6는 오픈월드 게임의 새로운 기준을 제시합니다.</p>
      `,
      image: "/gta-6-vice-city-gameplay.jpg",
      date: "2025년 11월 10일",
      readTime: "20분 읽기",
      rating: 10,
      category: "Action",
      author: "김게임",
      slug: "gta-6",
      pros: ["엄청난 맵 크기", "두 주인공 시스템", "실사에 가까운 그래픽", "끝없는 할 거리"],
      cons: ["높은 하드웨어 요구사양", "일부 미션의 긴 플레이 타임"],
    },
    "mgs-delta": {
      title: "메탈 기어 솔리드 델타: 스네이크 이터 - 완벽한 리메이크",
      excerpt: "전설적인 스텔스 액션이 현세대 그래픽으로 재탄생. 오리지널의 감동을 그대로 살린 리메이크.",
      content: `
        <p>코지마 히데오의 걸작 메탈 기어 솔리드 3가 완벽하게 리메이크되어 돌아왔습니다.</p>
        <h2>현세대로 재탄생한 정글</h2>
        <p>언리얼 엔진 5로 구현된 정글은 숨막히도록 아름답습니다. 풀잎 하나하나가 살아 움직이는 듯한 디테일이 압권입니다.</p>
        <h2>개선된 게임플레이</h2>
        <p>오리지널의 게임플레이를 존중하면서도 현대적인 편의성을 더했습니다. 카메라 시스템이 개선되어 더욱 쾌적한 플레이가 가능합니다.</p>
        <h2>결론</h2>
        <p>리메이크의 교과서입니다.</p>
      `,
      image: "/metal-gear-solid-delta-gameplay.jpg",
      date: "2025년 5월 20일",
      readTime: "15분 읽기",
      rating: 9.5,
      category: "Action",
      author: "김게임",
      slug: "mgs-delta",
      pros: ["오리지널의 감동 그대로", "현세대 그래픽", "개선된 조작감", "완벽한 최적화"],
      cons: ["신규 콘텐츠 부족", "일부 연출의 시대적 한계"],
    },
    "zelda-echoes": {
      title: "젤다의 전설: 에코즈 오브 위즈덤 - 새로운 시각의 하이랄",
      excerpt: "젤다가 주인공이 되어 펼치는 새로운 모험. 독특한 에코 시스템이 신선한 퍼즐 경험을 선사합니다.",
      content: `
        <p>이번에는 링크가 아닌 젤다 공주가 주인공입니다. '에코즈 오브 위즈덤'은 시리즈의 전통을 비틀어 새로운 재미를 선사합니다.</p>
        <h2>에코 시스템의 혁신</h2>
        <p>사물과 몬스터를 복제하는 '에코' 능력은 퍼즐 해결의 자유도를 극대화합니다. 침대를 쌓아 다리를 만들거나, 몬스터를 소환해 대신 싸우게 할 수 있습니다.</p>
        <h2>아름다운 아트 스타일</h2>
        <p>꿈꾸는 섬 리메이크의 아트 스타일을 계승하면서도 더욱 발전된 비주얼을 보여줍니다. 하이랄의 풍경이 장난감처럼 아기자기하게 표현되었습니다.</p>
        <h2>결론</h2>
        <p>젤다 시리즈의 새로운 가능성을 보여준 수작입니다.</p>
      `,
      image: "/zelda-echoes-of-wisdom-gameplay.jpg",
      date: "2025년 9월 26일",
      readTime: "12분 읽기",
      rating: 9.3,
      category: "Adventure",
      author: "이젤다",
      slug: "zelda-echoes",
      pros: ["창의적인 에코 시스템", "사랑스러운 아트 스타일", "높은 자유도", "젤다 공주의 매력"],
      cons: ["일부 프레임 드랍", "전투의 템포가 다소 느림"],
    },
    "perfect-dark": {
      title: "퍼펙트 다크 - 클래식 FPS의 화려한 부활",
      excerpt: "레어의 전설적인 FPS가 20년 만에 돌아왔습니다. 현대적인 슈팅과 클래식한 감성의 완벽한 조화.",
      content: `
        <p>조안나 다크가 돌아왔습니다. 리부트된 '퍼펙트 다크'는 첩보 액션의 진수를 보여줍니다.</p>
        <h2>스파이 액션의 정점</h2>
        <p>다양한 가젯을 활용한 잠입과 화려한 총격전이 조화를 이룹니다. 근미래 배경의 세계관은 몰입감을 더해줍니다.</p>
        <h2>현대적인 조작감</h2>
        <p>고전의 느낌을 살리면서도 현대 FPS의 빠르고 정교한 조작감을 구현했습니다.</p>
        <h2>결론</h2>
        <p>FPS 팬이라면 놓칠 수 없는 작품입니다.</p>
      `,
      image: "/perfect-dark-reboot-gameplay.jpg",
      date: "2025년 7월 12일",
      readTime: "10분 읽기",
      rating: 8.8,
      category: "FPS",
      author: "박슈터",
      slug: "perfect-dark",
      pros: ["세련된 건플레이", "흥미로운 스토리", "다양한 가젯 활용", "뛰어난 그래픽"],
      cons: ["다소 짧은 캠페인", "멀티플레이 밸런스 문제"],
    },
    "marvel-1943": {
      title: "마블 1943: 라이즈 오브 하이드라 - 서사적 슈퍼히어로 RPG",
      excerpt: "2차 대전 시기를 배경으로 한 마블 유니버스. 깊이 있는 스토리와 전략적 전투가 돋보입니다.",
      content: `
        <p>캡틴 아메리카와 블랙 팬서가 2차 대전의 파리에서 만났습니다. 영화 같은 연출과 깊이 있는 스토리가 특징입니다.</p>
        <h2>네 명의 영웅</h2>
        <p>플레이어는 캡틴 아메리카, 블랙 팬서, 그리고 두 명의 일반인 영웅을 번갈아 조작하며 전쟁의 참상을 경험합니다.</p>
        <h2>언리얼 엔진 5의 힘</h2>
        <p>실사를 방불케 하는 그래픽은 게임의 몰입도를 한층 높여줍니다. 특히 캐릭터들의 표정 연기가 압권입니다.</p>
        <h2>결론</h2>
        <p>마블 팬들에게 바치는 최고의 선물입니다.</p>
      `,
      image: "/marvel-1943-rise-of-hydra-gameplay.jpg",
      date: "2025년 10월 18일",
      readTime: "14분 읽기",
      rating: 9.0,
      category: "Action RPG",
      author: "최마블",
      slug: "marvel-1943",
      pros: ["영화 같은 스토리텔링", "압도적인 비주얼", "개성 있는 캐릭터들", "묵직한 타격감"],
      cons: ["일직선적인 진행", "다소 단순한 퍼즐"],
    },
    silksong: {
      title: "할로우 나이트: 실크송 - 완벽한 메트로이드바니아의 귀환",
      excerpt: "5년의 기다림 끝에 돌아온 걸작. 호넷의 여정은 전작을 뛰어넘는 깊이와 아름다움을 자랑합니다.",
      content: `
        <p>드디어 나왔습니다. '할로우 나이트: 실크송'은 전작의 명성을 뛰어넘는 완성도를 보여줍니다.</p>
        <h2>호넷의 날렵한 액션</h2>
        <p>주인공 호넷은 전작의 기사보다 훨씬 빠르고 날렵합니다. 도구를 활용한 다양한 액션은 전투의 깊이를 더합니다.</p>
        <h2>방대하고 아름다운 세계</h2>
        <p>팔룸의 왕국은 신비롭고 위험합니다. 150종 이상의 새로운 적들과 수많은 비밀이 플레이어를 기다립니다.</p>
        <h2>결론</h2>
        <p>메트로이드바니아 장르의 새로운 마스터피스입니다.</p>
      `,
      image: "/hollow-knight-silksong-gameplay.jpg",
      date: "2025년 6월 8일",
      readTime: "16분 읽기",
      rating: 10,
      category: "Metroidvania",
      author: "정인디",
      slug: "silksong",
      pros: ["완벽한 레벨 디자인", "아름다운 아트와 음악", "깊이 있는 전투 시스템", "방대한 볼륨"],
      cons: ["높은 난이도", "길 찾기의 어려움"],
    },
    "death-stranding-2": {
      title: "데스 스트랜딩 2 - 온 더 비치 - 고지마의 비전이 완성되다",
      excerpt: "고지마 히데오의 독특한 세계관이 더욱 심화됩니다. 연결과 단절에 대한 철학적 메시지가 인상적입니다.",
      content: `
        <p>샘 포터 브리지스의 여정은 아직 끝나지 않았습니다. '데스 스트랜딩 2'는 전작의 테마를 확장하고 심화시킵니다.</p>
        <h2>더 넓어진 세계</h2>
        <p>이제는 북미 대륙을 넘어 전 세계를 무대로 합니다. 새로운 탈것과 장비들은 배달의 재미를 한층 업그레이드했습니다.</p>
        <h2>압도적인 연출</h2>
        <p>노만 리더스, 레아 세이두, 엘르 패닝 등 할리우드 배우들의 연기는 게임을 넘어선 영화적 경험을 선사합니다.</p>
        <h2>결론</h2>
        <p>호불호가 갈릴 수 있지만, 대체 불가능한 경험을 제공합니다.</p>
      `,
      image: "/death-stranding-2-gameplay.jpg",
      date: "2025년 9월 5일",
      readTime: "17분 읽기",
      rating: 9.2,
      category: "Action",
      author: "김코지마",
      slug: "death-stranding-2",
      pros: ["독창적인 게임플레이", "철학적인 스토리", "최고 수준의 그래픽", "배우들의 명연기"],
      cons: ["여전히 호불호 갈리는 게임성", "난해한 스토리"],
    },
  }

  return reviews[slug] || null
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
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">{review.category}</Badge>
              <div className="flex items-center text-yellow-500">
                <Star className="mr-1 h-4 w-4 fill-current" />
                <span className="font-bold text-white">{review.rating}</span>
                <span className="text-white/80">/ 10</span>
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">{review.title}</h1>
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
              <p className="mt-4 text-muted-foreground">"올해 최고의 확장팩이자, 엘든 링의 완벽한 마무리"</p>
            </div>

            <Separator className="my-8" />

            {/* Share & Tags */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Badge variant="outline">RPG</Badge>
                <Badge variant="outline">Open World</Badge>
                <Badge variant="outline">Action</Badge>
                <Badge variant="outline">Adventure</Badge>
                <Badge variant="outline">FPS</Badge>
                <Badge variant="outline">Action RPG</Badge>
                <Badge variant="outline">Metroidvania</Badge>
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
                    <Image src="/placeholder.svg" alt={review.author} width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-bold">{review.author}</h4>
                    <p className="text-xs text-muted-foreground">수석 에디터</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  RPG와 액션 게임을 주로 다룹니다. 스토리와 게임플레이의 조화를 중요하게 생각합니다.
                </p>
                <Button variant="outline" className="mt-4 w-full bg-transparent">
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
