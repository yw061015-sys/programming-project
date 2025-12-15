import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { Send, ArrowLeft } from 'lucide-react';

interface Message {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
}

export default function Community() {
  const [, setLocation] = useLocation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentUser] = useState('admin');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 로컬스토리지에서 메시지 불러오기
  useEffect(() => {
    const savedMessages = localStorage.getItem('communityMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // 초기 메시지
      const initialMessages: Message[] = [
        {
          id: 1,
          author: 'GameMaster',
          content: '안녕하세요! Game Review Platform 커뮤니티에 오신 것을 환영합니다. 여기서 게임에 대해 자유롭게 이야기하세요!',
          timestamp: '2025-12-15 10:00',
          isCurrentUser: false,
        },
        {
          id: 2,
          author: 'GamerJohn',
          content: '안녕하세요! 최근에 엘든 링을 시작했는데 정말 재미있네요.',
          timestamp: '2025-12-15 10:15',
          isCurrentUser: false,
        },
        {
          id: 3,
          author: 'SophiaGames',
          content: '엘든 링은 정말 어렵지만 그만큼 보람이 있어요. 어느 부분에서 막혀있으신가요?',
          timestamp: '2025-12-15 10:20',
          isCurrentUser: false,
        },
      ];
      setMessages(initialMessages);
      localStorage.setItem('communityMessages', JSON.stringify(initialMessages));
    }
  }, []);

  // 메시지 자동 스크롤
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      author: currentUser,
      content: inputValue,
      timestamp: new Date().toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
      isCurrentUser: true,
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem('communityMessages', JSON.stringify(updatedMessages));
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 헤더 */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation('/home')}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
          >
            <ArrowLeft size={20} />
            메인으로 돌아가기
          </button>
          <h1 className="text-2xl font-bold text-gray-800">💬 게임 커뮤니티 채팅</h1>
          <div className="w-20"></div>
        </div>
      </div>

      {/* 채팅 컨테이너 */}
      <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-200px)] flex flex-col">
        {/* 메시지 영역 */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 overflow-y-auto mb-4 space-y-4">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>아직 메시지가 없습니다. 첫 번째 메시지를 작성해보세요!</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    message.isCurrentUser
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {!message.isCurrentUser && (
                    <p className="font-bold text-sm mb-1">{message.author}</p>
                  )}
                  <p className="break-words">{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isCurrentUser ? 'text-purple-100' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* 입력 영역 */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="flex gap-3">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="메시지를 입력하세요... (Shift+Enter로 줄바꿈)"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 resize-none"
              rows={3}
            />
            <button
              onClick={handleSendMessage}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Send size={20} />
              <span className="hidden sm:inline">전송</span>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">💡 Enter를 눌러 메시지를 전송하세요</p>
        </div>
      </div>
    </div>
  );
}
