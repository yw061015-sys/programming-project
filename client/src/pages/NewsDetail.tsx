import { useLocation } from 'wouter';
import { ArrowLeft } from 'lucide-react';

interface NewsItem {
  id: number;
  icon: string;
  title: string;
  summary: string;
  date: string;
  content: string;
  details: string[];
}

const newsDatabase: NewsItem[] = [
  {
    id: 1,
    icon: '🎮',
    title: '2025년 기대작 게임 TOP 10',
    summary: '올해 출시 예정인 주목할 게임들을 소개합니다.',
    date: '2025.12.15',
    content: '2025년은 게임 업계에 있어 매우 중요한 해가 될 것으로 예상됩니다. 다양한 장르의 대작 게임들이 출시될 예정이며, 각 게임마다 혁신적인 기술과 스토리를 선보일 것으로 기대됩니다.',
    details: [
      '1. 엘든 링 2 - FromSoftware의 차기작으로 더욱 광활한 세계와 복잡한 스토리가 예상됩니다.',
      '2. 파이널 판타지 VII 리메이크 파트 3 - 클라우드의 모험이 완결되는 최종 장입니다.',
      '3. 메탈 기어 솔리드 델타 - 코나미의 전설적인 시리즈가 새롭게 부활합니다.',
      '4. 스타 워즈 아웃로 - 루카스필름과 협력한 오픈 월드 게임입니다.',
      '5. 드래곤즈 도그마 2 - 광활한 판타지 세계에서 펼쳐지는 모험입니다.',
      '6. 사일런트 힐 2 리메이크 - 공포 게임의 명작이 현대적으로 재해석됩니다.',
      '7. 그랜드 세프트 오토 6 - 록스타의 차기 대작으로 게임 업계를 뒤흔들 것으로 예상됩니다.',
      '8. 헬다이버 2 - 협력 슈팅 게임의 새로운 버전입니다.',
      '9. 스타필드 2 - 베데스다의 우주 탐험 RPG 후속작입니다.',
      '10. 오버워치 3 - 블리자드의 인기 슈팅 게임의 새로운 시즌입니다.',
    ],
  },
  {
    id: 2,
    icon: '📱',
    title: 'PS5 Pro 공식 출시',
    summary: '새로운 콘솔 PS5 Pro가 출시되었습니다.',
    date: '2025.12.14',
    content: 'Sony가 PS5 Pro를 공식 출시했습니다. 향상된 성능과 새로운 기능들이 게이머들에게 더욱 몰입감 있는 경험을 제공할 것으로 기대됩니다.',
    details: [
      '성능 향상: GPU 성능이 기존 PS5 대비 45% 향상되었습니다.',
      '레이 트레이싱: 더욱 현실적인 그래픽을 위해 고급 레이 트레이싱 기술이 적용되었습니다.',
      '로딩 속도: SSD 속도가 개선되어 게임 로딩 시간이 대폭 단축되었습니다.',
      '냉각 시스템: 더욱 효율적인 냉각 시스템으로 조용한 작동이 가능합니다.',
      '가격: $799로 책정되었으며, 기존 PS5 게임과의 완벽한 호환성을 제공합니다.',
      '출시 타이틀: 여러 AAA 게임들이 PS5 Pro 최적화 버전으로 출시될 예정입니다.',
      '디지털 에디션: 디스크 드라이브가 없는 디지털 전용 버전도 제공됩니다.',
      '컨트롤러: 새로운 DualSense Pro 컨트롤러가 함께 출시되었습니다.',
    ],
  },
  {
    id: 3,
    icon: '⚔️',
    title: '인기 RPG 시리즈 신작',
    summary: '기대되는 RPG 게임 신작이 발표되었습니다.',
    date: '2025.12.13',
    content: '유명 RPG 시리즈의 신작이 발표되었습니다. 새로운 세계관, 캐릭터, 그리고 게임플레이 시스템이 게이머들의 기대를 모으고 있습니다.',
    details: [
      '새로운 세계관: 완전히 새로운 판타지 세계가 배경입니다.',
      '캐릭터 커스터마이징: 더욱 자유로운 캐릭터 생성 시스템이 제공됩니다.',
      '전투 시스템: 기존 턴제 전투에서 실시간 액션 전투로 변경되었습니다.',
      '오픈 월드: 광활한 오픈 월드에서 자유롭게 탐험할 수 있습니다.',
      '멀티플레이: 온라인 협력 플레이가 지원됩니다.',
      '스토리: 100시간 이상의 방대한 스토리가 준비되어 있습니다.',
      '그래픽: 최신 게임 엔진으로 구현된 뛰어난 그래픽입니다.',
      '출시일: 2025년 Q2에 출시될 예정입니다.',
    ],
  },
  {
    id: 4,
    icon: '🏆',
    title: 'e스포츠 월드 챔피언십',
    summary: '게임 대회 및 이벤트 소식입니다.',
    date: '2025.12.12',
    content: '올해의 e스포츠 월드 챔피언십이 성공적으로 개최되었습니다. 전 세계의 최고 게이머들이 모여 펼친 경기는 게임 팬들에게 감동과 흥분을 선사했습니다.',
    details: [
      '참가 팀: 전 세계 50개국에서 200개 이상의 팀이 참가했습니다.',
      '상금 풀: 총 $50 million의 상금이 준비되었습니다.',
      '경기 종목: 리그 오브 레전드, 도타 2, CS2, 발로란트 등 5개 종목이 진행되었습니다.',
      '개최 장소: 서울, 도쿄, 라스베이거스 등 3개 도시에서 개최되었습니다.',
      '시청자: 온라인 스트리밍을 통해 전 세계 1억 명 이상이 시청했습니다.',
      '우승팀: 한국 팀이 3개 종목에서 우승을 차지했습니다.',
      '신기록: 여러 경기에서 새로운 기록들이 수립되었습니다.',
      '내년 계획: 더욱 큰 규모로 내년 챔피언십이 준비 중입니다.',
    ],
  },
];

export default function NewsDetail() {
  const [location, setLocation] = useLocation();
  const newsId = parseInt(location.split('/').pop() || '1');
  const news = newsDatabase.find(n => n.id === newsId);

  if (!news) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setLocation('/home')}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8"
          >
            <ArrowLeft size={20} />
            뉴스 목록으로 돌아가기
          </button>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-gray-600">뉴스를 찾을 수 없습니다.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 네비게이션 */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => setLocation('/home')}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
          >
            <ArrowLeft size={20} />
            뉴스 목록으로 돌아가기
          </button>
        </div>
      </nav>

      {/* 뉴스 상세 내용 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* 헤더 */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-8 text-white">
            <div className="text-6xl mb-4">{news.icon}</div>
            <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
            <p className="text-purple-100 text-lg">{news.date}</p>
          </div>

          {/* 콘텐츠 */}
          <div className="p-8 space-y-8">
            {/* 요약 */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
              <h2 className="text-xl font-bold text-gray-800 mb-2">📌 요약</h2>
              <p className="text-gray-700 text-lg">{news.summary}</p>
            </div>

            {/* 상세 내용 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 상세 내용</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{news.content}</p>
            </div>

            {/* 주요 정보 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 주요 정보</h2>
              <div className="space-y-3">
                {news.details.map((detail, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200"
                  >
                    <p className="text-gray-800">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 관련 링크 */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-800 mb-3">💡 더 알아보기</h3>
              <p className="text-gray-700 mb-4">
                이 뉴스에 대해 더 자세히 알고 싶으신가요? 공식 웹사이트를 방문하거나 게임 커뮤니티에서 다른 게이머들의 의견을 나눠보세요.
              </p>
              <button
                onClick={() => setLocation('/home')}
                className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
              >
                커뮤니티에서 토론하기
              </button>
            </div>
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setLocation('/home')}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
          >
            뉴스 목록으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
