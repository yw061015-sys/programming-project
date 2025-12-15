import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft, Edit2, Save, X } from 'lucide-react';

interface Review {
  id: number;
  gameTitle: string;
  platform: string;
  rating: number;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
}

interface Message {
  id: number;
  content: string;
  date: string;
  author: string;
}

export default function Profile() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editBio, setEditBio] = useState('');
  const [userReviews, setUserReviews] = useState<Review[]>([]);
  const [userMessages, setUserMessages] = useState<Message[]>([]);
  const [activeTab, setActiveTab] = useState<'profile' | 'reviews' | 'activity'>('profile');

  // 초기 로드
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const savedUsername = localStorage.getItem('username');

    if (!isLoggedIn) {
      setLocation('/');
      return;
    }

    setUsername(savedUsername || '');
    setEditUsername(savedUsername || '');

    // 저장된 프로필 정보 로드
    const savedEmail = localStorage.getItem('userEmail') || '';
    const savedBio = localStorage.getItem('userBio') || '';
    setEmail(savedEmail);
    setBio(savedBio);
    setEditEmail(savedEmail);
    setEditBio(savedBio);

    // 사용자의 리뷰 로드
    const allReviews = JSON.parse(localStorage.getItem('gameReviews') || '[]');
    const userReviewsFiltered = allReviews.filter((review: Review) => review.author === savedUsername);
    setUserReviews(userReviewsFiltered);

    // 사용자의 커뮤니티 메시지 로드
    const allMessages = JSON.parse(localStorage.getItem('communityMessages') || '[]');
    const userMessagesFiltered = allMessages.filter((msg: Message) => msg.author === savedUsername);
    setUserMessages(userMessagesFiltered);
  }, [setLocation]);

  const handleSaveProfile = () => {
    if (editUsername.trim()) {
      localStorage.setItem('username', editUsername);
      localStorage.setItem('userEmail', editEmail);
      localStorage.setItem('userBio', editBio);
      setUsername(editUsername);
      setEmail(editEmail);
      setBio(editBio);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditUsername(username);
    setEditEmail(email);
    setEditBio(bio);
    setIsEditing(false);
  };

  const handleDeleteReview = (reviewId: number) => {
    const allReviews = JSON.parse(localStorage.getItem('gameReviews') || '[]');
    const updatedReviews = allReviews.filter((review: Review) => review.id !== reviewId);
    localStorage.setItem('gameReviews', JSON.stringify(updatedReviews));
    setUserReviews(userReviews.filter(review => review.id !== reviewId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 헤더 */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => setLocation('/home')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={24} className="text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">프로필</h1>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 탭 네비게이션 */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            프로필 정보
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'reviews'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            작성한 리뷰 ({userReviews.length})
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'activity'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            커뮤니티 활동 ({userMessages.length})
          </button>
        </div>

        {/* 프로필 정보 탭 */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            {!isEditing ? (
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-gray-800">프로필 정보</h2>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    <Edit2 size={18} />
                    수정
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      사용자명
                    </label>
                    <p className="text-lg text-gray-800">{username}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      이메일
                    </label>
                    <p className="text-lg text-gray-800">{email || '등록되지 않음'}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      자기소개
                    </label>
                    <p className="text-lg text-gray-800">{bio || '등록되지 않음'}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-purple-600">{userReviews.length}</p>
                      <p className="text-sm text-gray-600">작성한 리뷰</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">{userMessages.length}</p>
                      <p className="text-sm text-gray-600">커뮤니티 메시지</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">
                        {(userReviews.reduce((sum, review) => sum + review.rating, 0) / (userReviews.length || 1)).toFixed(1)}
                      </p>
                      <p className="text-sm text-gray-600">평균 평점</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">프로필 수정</h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    사용자명
                  </label>
                  <input
                    type="text"
                    value={editUsername}
                    onChange={(e) => setEditUsername(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    자기소개
                  </label>
                  <textarea
                    value={editBio}
                    onChange={(e) => setEditBio(e.target.value)}
                    placeholder="자신을 소개해주세요"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleSaveProfile}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Save size={18} />
                    저장
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <X size={18} />
                    취소
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 작성한 리뷰 탭 */}
        {activeTab === 'reviews' && (
          <div className="space-y-4">
            {userReviews.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <p className="text-gray-500 text-lg">작성한 리뷰가 없습니다.</p>
              </div>
            ) : (
              userReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{review.gameTitle}</h3>
                      <p className="text-sm text-gray-600">
                        {review.platform} • {review.date}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteReview(review.id)}
                      className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
                    >
                      삭제
                    </button>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={star <= review.rating ? 'text-2xl' : 'text-2xl opacity-30'}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>

                  {review.imageUrl && (
                    <div className="mb-4">
                      <img
                        src={review.imageUrl}
                        alt={review.gameTitle}
                        className="max-w-sm h-auto rounded-lg border border-gray-300"
                      />
                    </div>
                  )}

                  <p className="text-gray-700">{review.content}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* 커뮤니티 활동 탭 */}
        {activeTab === 'activity' && (
          <div className="space-y-4">
            {userMessages.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <p className="text-gray-500 text-lg">커뮤니티 메시지가 없습니다.</p>
              </div>
            ) : (
              userMessages.map((message) => (
                <div
                  key={message.id}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500"
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold text-gray-800">{message.author}</p>
                    <p className="text-sm text-gray-500">{message.date}</p>
                  </div>
                  <p className="text-gray-700">{message.content}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
