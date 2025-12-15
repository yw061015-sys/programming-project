import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useRef } from 'react';
import ReviewSection from '@/components/ReviewSection';
import CommunitySection from '@/components/CommunitySection';
import NewsSection from '@/components/NewsSection';
import GuideSection from '@/components/GuideSection';

interface Review {
  id: number;
  gameTitle: string;
  platform: string;
  rating: number;
  content: string;
  date: string;
  author: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

export default function Home() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  
  // 섹션 참조
  const reviewSectionRef = useRef<HTMLDivElement | null>(null);
  const communitySectionRef = useRef<HTMLDivElement | null>(null);
  const newsSectionRef = useRef<HTMLDivElement | null>(null);
  const guideSectionRef = useRef<HTMLDivElement | null>(null);
  
  // 섹션으로 스크롤
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 초기 로드
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const savedUsername = localStorage.getItem('username');

    if (!isLoggedIn) {
      setLocation('/');
      return;
    }

    setUsername(savedUsername || '');

    // localStorage에서 데이터 로드
    const savedReviews = localStorage.getItem('gameReviews');
    const savedPosts = localStorage.getItem('communityPosts');

    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setLocation('/');
  };

  const handleAddReview = (review: Omit<Review, 'id' | 'date' | 'author'>) => {
    const newReview: Review = {
      ...review,
      id: Date.now(),
      date: new Date().toLocaleDateString('ko-KR'),
      author: username,
    };
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('gameReviews', JSON.stringify(updatedReviews));
  };

  const handleAddPost = (post: Omit<Post, 'id' | 'date' | 'author'>) => {
    const newPost: Post = {
      ...post,
      id: Date.now(),
      date: new Date().toLocaleDateString('ko-KR'),
      author: username,
    };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('communityPosts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 네비게이션 바 */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎮</span>
              <h1 className="text-xl font-bold text-gray-800">Game Review Platform</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                {username}님 환영합니다
              </span>
              <button
                onClick={() => setLocation('/profile')}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                프로필
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                로그아웃
              </button>
            </div>
          </div>
          
          {/* 섹션 네비게이션 */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => scrollToSection(reviewSectionRef)}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all whitespace-nowrap"
            >
              📝 리뷰
            </button>
            <button
              onClick={() => scrollToSection(communitySectionRef)}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all whitespace-nowrap"
            >
              💬 커뮤니티
            </button>
            <button
              onClick={() => scrollToSection(newsSectionRef)}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all whitespace-nowrap"
            >
              📰 뉴스
            </button>
            <button
              onClick={() => scrollToSection(guideSectionRef)}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all whitespace-nowrap"
            >
              🎯 가이드
            </button>
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* 게임 리뷰 섹션 */}
        <div ref={reviewSectionRef}>
          <ReviewSection reviews={reviews} onAddReview={handleAddReview} />
        </div>

        {/* 커뮤니티 게시판 */}
        <div ref={communitySectionRef}>
          <CommunitySection />
        </div>

        {/* 게임 뉴스 */}
        <div ref={newsSectionRef}>
          <NewsSection />
        </div>

        {/* 게임 가이드 */}
        <div ref={guideSectionRef}>
          <GuideSection />
        </div>
      </div>
    </div>
  );
}
