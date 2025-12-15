import { useLocation } from 'wouter';

interface NewsItem {
  id: number;
  icon: string;
  title: string;
  summary: string;
  date: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    icon: '🎮',
    title: '2025년 기대작 게임 TOP 10',
    summary: '올해 출시 예정인 주목할 게임들을 소개합니다. 대작 게임부터 인디 게임까지 다양한 장르의 기대작들을 확인해보세요.',
    date: '2025.12.15',
  },
  {
    id: 2,
    icon: '📱',
    title: 'PS5 Pro 공식 출시',
    summary: '새로운 콘솔 PS5 Pro가 출시되었습니다. 향상된 성능과 새로운 기능들을 자세히 알아보세요.',
    date: '2025.12.14',
  },
  {
    id: 3,
    icon: '⚔️',
    title: '인기 RPG 시리즈 신작',
    summary: '기대되는 RPG 게임 신작이 발표되었습니다. 스토리, 캐릭터, 게임플레이 등 다양한 정보를 확인하세요.',
    date: '2025.12.13',
  },
  {
    id: 4,
    icon: '🏆',
    title: 'e스포츠 월드 챔피언십',
    summary: '게임 대회 및 이벤트 소식입니다. 세계 최고의 게이머들이 펼치는 경기를 놓치지 마세요.',
    date: '2025.12.12',
  },
];

export default function NewsSection() {
  const [, setLocation] = useLocation();

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📰 최신 게임 뉴스</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsData.map((news) => (
          <button
            key={news.id}
            onClick={() => setLocation(`/news/${news.id}`)}
            className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer text-left w-full bg-white"
          >
            <div className="text-4xl mb-3">{news.icon}</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{news.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{news.summary}</p>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">{news.date}</p>
              <span className="text-purple-600 font-semibold text-sm">자세히 보기 →</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
