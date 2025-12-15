import { useState } from 'react';
import { Star } from 'lucide-react';

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

interface ReviewSectionProps {
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date' | 'author'>) => void;
}

export default function ReviewSection({ reviews, onAddReview }: ReviewSectionProps) {
  const [gameTitle, setGameTitle] = useState('');
  const [platform, setPlatform] = useState('PC');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gameTitle.trim() && content.trim()) {
      onAddReview({
        gameTitle,
        platform,
        rating,
        content,
        imageUrl: imageUrl || undefined,
      });
      setGameTitle('');
      setPlatform('PC');
      setRating(5);
      setContent('');
      setImageUrl('');
    }
  };

  return (
    <div className="space-y-8">
      {/* 리뷰 작성 폼 */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📝 최신 게임 리뷰 작성</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 게임 제목 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                게임 제목
              </label>
              <input
                type="text"
                value={gameTitle}
                onChange={(e) => setGameTitle(e.target.value)}
                placeholder="게임 제목을 입력하세요"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* 플랫폼 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                플랫폼
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option>PC</option>
                <option>PlayStation</option>
                <option>Xbox</option>
                <option>Nintendo Switch</option>
                <option>Mobile</option>
              </select>
            </div>
          </div>

          {/* 평점 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              평점: {rating}점
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
          </div>

          {/* 리뷰 내용 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              리뷰 내용
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="게임에 대한 상세한 의견을 작성해주세요"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* 이미지 첨부 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              게임 스크린샷 (선택사항)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {imageUrl && (
                <button
                  type="button"
                  onClick={() => setImageUrl('')}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                >
                  삭제
                </button>
              )}
            </div>
            {imageUrl && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">미리보기:</p>
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="max-w-xs h-auto rounded-lg border border-gray-300"
                />
              </div>
            )}
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            리뷰 등록
          </button>
        </form>
      </div>

      {/* 리뷰 히스토리 */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📚 게임 리뷰 히스토리</h2>
        
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            아직 작성된 리뷰가 없습니다. 첫 번째 리뷰를 작성해보세요!
          </p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`p-6 rounded-lg border-2 transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-300 shadow-md'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                {index === 0 && (
                  <div className="inline-block px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full mb-3 animate-pulse">
                    🆕 최신
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{review.gameTitle}</h3>
                    <p className="text-sm text-gray-600">
                      {review.platform} • {review.date}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        className={star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
                
                {review.imageUrl && (
                  <div className="mt-4">
                    <img
                      src={review.imageUrl}
                      alt={review.gameTitle}
                      className="max-w-sm h-auto rounded-lg border border-gray-300"
                    />
                  </div>
                )}
                <p className="text-gray-700">{review.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
