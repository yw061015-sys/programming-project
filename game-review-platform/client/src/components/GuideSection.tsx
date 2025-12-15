import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Guide {
  id: number;
  title: string;
  intro: string;
  tips: string[];
  strategy: string;
}

const guideData: Guide[] = [
  {
    id: 1,
    title: '젤다의 전설: 티어스 오브 더 킹덤',
    intro: '광활한 세계를 자유롭게 탐험하는 오픈 월드 게임입니다. 스토리를 진행하거나 자신의 방식대로 모험을 즐길 수 있습니다.',
    tips: [
      '초반에는 주변 환경을 활용하여 전투하세요',
      '높은 곳에서 낙하하면 낙하 데미지를 줄일 수 있습니다',
      '요리를 통해 다양한 효과를 얻을 수 있습니다',
      '신사를 찾아 축복을 받으면 강해집니다',
    ],
    strategy: '스토리를 진행하기 전에 주변을 충분히 탐험하세요. 숨겨진 보물과 강력한 아이템들이 많이 있습니다. 보스 전투에서는 환경을 활용하는 것이 중요합니다.',
  },
  {
    id: 2,
    title: '엘든 링',
    intro: '도전적인 난이도로 유명한 액션 RPG입니다. 죽음과 재도전을 반복하며 성장하는 게임입니다.',
    tips: [
      '처음에는 쉬운 적부터 시작하세요',
      '보스 패턴을 학습하는 것이 중요합니다',
      '캐릭터 빌드를 다양하게 시도해보세요',
      '멀티플레이를 통해 다른 플레이어와 협력할 수 있습니다',
    ],
    strategy: '처음부터 어려운 보스에 도전하지 마세요. 레벨을 올리고 장비를 갖춘 후 도전하세요. 각 보스마다 약점이 있으니 패턴을 분석하세요.',
  },
  {
    id: 3,
    title: '스타듀 밸리',
    intro: '평화로운 농장 경영 게임입니다. 농사, 광업, 낚시, 요리 등 다양한 활동을 즐길 수 있습니다.',
    tips: [
      '봄에는 파로니, 여름에는 옥수수를 심으세요',
      '광산에서 자원을 채집하면 도구를 업그레이드할 수 있습니다',
      '마을 주민들과 친해지면 특별한 이벤트가 발생합니다',
      '계절마다 다른 작물을 심어 수익을 최대화하세요',
    ],
    strategy: '초반에는 기본 작물을 심어 자금을 모으세요. 자금이 모이면 더 비싼 작물에 투자하세요. 광산 탐사도 중요한 수익원입니다.',
  },
];

export default function GuideSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleGuide = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🎯 게임 가이드</h2>
      
      <div className="space-y-4">
        {guideData.map((guide) => (
          <div key={guide.id} className="border border-gray-200 rounded-lg overflow-hidden">
            {/* 헤더 */}
            <button
              onClick={() => toggleGuide(guide.id)}
              className="w-full p-6 bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-colors flex justify-between items-center"
            >
              <h3 className="text-lg font-bold text-gray-800 text-left">{guide.title}</h3>
              <ChevronDown
                size={24}
                className={`text-purple-600 transition-transform ${
                  expandedId === guide.id ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* 콘텐츠 */}
            {expandedId === guide.id && (
              <div className="p-6 bg-white border-t border-gray-200 space-y-4">
                {/* 소개 */}
                <div>
                  <p className="text-gray-700">{guide.intro}</p>
                </div>

                {/* 팁 */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">💡 초보자 팁</h4>
                  <ul className="space-y-2">
                    {guide.tips.map((tip, index) => (
                      <li key={index} className="flex gap-3 text-gray-700">
                        <span className="text-purple-500 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 전략 */}
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-gray-800 mb-2">⚔️ 핵심 전략</h4>
                  <p className="text-gray-700">{guide.strategy}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
