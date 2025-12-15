import { useLocation } from 'wouter';

export default function CommunitySection() {
  const [, setLocation] = useLocation();

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">💬 게임 커뮤니티</h2>
      
      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
          게이머들과 함께 게임에 대해 이야기하세요. 최신 게임 정보, 팁, 공략 등을 자유롭게 공유할 수 있습니다.
        </p>
        
        <button
          onClick={() => setLocation('/community')}
          className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
        >
          💬 커뮤니티 채팅방 입장하기
        </button>

        <div className="grid grid-cols-3 gap-4 mt-6 text-center">
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">150+</p>
            <p className="text-sm text-gray-600">활동 중인 게이머</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">2.5K</p>
            <p className="text-sm text-gray-600">총 메시지</p>
          </div>
          <div className="p-4 bg-pink-50 rounded-lg">
            <p className="text-2xl font-bold text-pink-600">50+</p>
            <p className="text-sm text-gray-600">토론 주제</p>
          </div>
        </div>
      </div>
    </div>
  );
}
