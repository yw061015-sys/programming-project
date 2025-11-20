-- Insert sample reviews
INSERT INTO reviews (title, slug, content, excerpt, image, score, platform, genre, release_date, developer, pros, cons) VALUES
('위쳐 4: 시리의 운명', 'witcher-4-ciri', '시리를 주인공으로 한 위쳐 시리즈의 새로운 장. CD Projekt RED가 선보이는 차세대 RPG의 정점.', '시리를 주인공으로 한 위쳐 시리즈의 최신작', '/witcher-4-ciri-gameplay.jpg', 9.5, 'PC, PS5, Xbox Series X/S', 'RPG', '2025년 3월', 'CD Projekt RED', ARRAY['놀라운 그래픽과 연출', '깊이있는 스토리텔링', '향상된 전투 시스템'], ARRAY['초기 버그 존재', '높은 시스템 요구사항']),
('GTA 6: 바이스 시티의 귀환', 'gta-6', 'Rockstar Games가 10년만에 선보이는 GTA 시리즈 최신작. 바이스 시티를 배경으로 한 거대한 오픈월드.', '10년만에 돌아온 GTA 시리즈 최신작', '/gta-6-vice-city-gameplay.jpg', 9.8, 'PS5, Xbox Series X/S', '액션 어드벤처', '2025년 11월', 'Rockstar Games', ARRAY['압도적인 오픈월드 스케일', '차세대 그래픽', '혁신적인 멀티플레이'], ARRAY['PC 버전 미정', '높은 가격']),
('메탈 기어 솔리드 델타', 'mgs-delta', '명작 메탈 기어 솔리드 3의 리메이크. 최신 기술로 재탄생한 스텔스 액션의 정수.', '메탈 기어 솔리드 3의 완벽한 리메이크', '/metal-gear-solid-delta-gameplay.jpg', 9.2, 'PC, PS5, Xbox Series X/S', '스텔스 액션', '2025년 5월', 'Konami', ARRAY['원작의 감동 재현', '현대적인 게임플레이', '뛰어난 리마스터링'], ARRAY['일부 컨트롤 어색함', '신규 콘텐츠 부족']),
('젤다의 전설: 지혜의 메아리', 'zelda-echoes', '젤다 공주가 주인공인 새로운 젤다 시리즈. 탑다운 방식의 독특한 게임플레이.', '젤다 공주의 모험이 시작된다', '/zelda-echoes-of-wisdom-gameplay.jpg', 9.0, 'Nintendo Switch', '액션 어드벤처', '2025년 2월', 'Nintendo', ARRAY['신선한 게임플레이', '매력적인 스토리', '완벽한 던전 디자인'], ARRAY['낮은 프레임레이트', '제한적인 그래픽']),
('퍼펙트 다크 리부트', 'perfect-dark', '전설적인 FPS 게임의 현대적 리부트. The Initiative가 선보이는 차세대 슈팅 게임.', '전설의 FPS가 돌아온다', '/perfect-dark-reboot-gameplay.jpg', 8.8, 'PC, Xbox Series X/S', 'FPS', '2025년 9월', 'The Initiative', ARRAY['탄탄한 슈팅감', '흥미진진한 스파이 스토리', '뛰어난 AI'], ARRAY['짧은 플레이타임', '멀티플레이 부족']),
('마블 1943: 하이드라의 부상', 'marvel-1943', '2차 세계대전을 배경으로 한 마블 게임. 캡틴 아메리카와 블랙 팬서의 협업.', '마블 히어로들의 2차 대전 이야기', '/marvel-1943-rise-of-hydra-gameplay.jpg', 8.5, 'PC, PS5, Xbox Series X/S', '액션 어드벤처', '2025년 7월', 'Skydance New Media', ARRAY['훌륭한 스토리텔링', '멋진 캐릭터 연출', '협동 플레이'], ARRAY['반복적인 미션', '최적화 이슈']);

-- Insert sample news
INSERT INTO news (title, slug, content, excerpt, image, category, author, author_avatar) VALUES
('Nintendo Switch 2 공식 발표! 2025년 6월 출시', 'nintendo-switch-2-announced', '닌텐도가 차세대 콘솔 Switch 2를 공식 발표했습니다. 4K 해상도 지원과 향상된 성능을 자랑합니다.', '닌텐도 차세대 콘솔 공식 발표', '/nintendo-switch-2.png', '하드웨어', '김게임', '/placeholder.svg?height=40&width=40', NOW() - INTERVAL '2 hours'),
('GTA 6 출시일 최종 확정: 2025년 11월 15일', 'gta-6-release-date', 'Rockstar Games가 GTA 6의 출시일을 최종 확정했습니다. PS5와 Xbox Series X/S로 먼저 출시됩니다.', 'GTA 6 출시일 최종 발표', '/gta-6-vice-city.jpg', '뉴스', '박리뷰', '/placeholder.svg?height=40&width=40', NOW() - INTERVAL '5 hours'),
('스팀 봄 세일 시작! 최대 90% 할인', 'steam-spring-sale', '스팀에서 봄 세일이 시작되었습니다. 인기 게임들을 최대 90% 할인가로 만나보세요.', '스팀 봄 세일 개막', '/steam-summer-sale.jpg', '세일', '이할인', '/placeholder.svg?height=40&width=40', NOW() - INTERVAL '1 day'),
('리그 오브 레전드 신규 챔피언 공개', 'lol-new-champion', 'Riot Games가 리그 오브 레전드의 새로운 챔피언을 공개했습니다. 독특한 스킬셋이 화제입니다.', 'LoL 신규 챔피언 등장', '/league-of-legends-new-champion.jpg', 'e스포츠', '최이스포츠', '/placeholder.svg?height=40&width=40', NOW() - INTERVAL '3 days');

-- Insert sample guides
INSERT INTO guides (title, slug, content, excerpt, image, game, category, difficulty, reading_time, helpful_count) VALUES
('위쳐 4 초보자 완벽 가이드', 'witcher-4-beginner-guide', '위쳐 4를 처음 시작하는 플레이어를 위한 완벽 가이드입니다.', '위쳐 4를 처음 시작하는 분들을 위한 가이드', '/witcher-4-ciri-gameplay.jpg', '위쳐 4', '초보자 가이드', '초급', '15분', 234),
('GTA 6 숨겨진 요소 100% 공략', 'gta-6-collectibles', 'GTA 6의 모든 숨겨진 요소와 수집품 위치를 정리했습니다.', 'GTA 6 수집품 완전 공략', '/gta-6-vice-city-gameplay.jpg', 'GTA 6', '수집품 가이드', '중급', '30분', 567),
('메탈 기어 솔리드 델타 스텔스 마스터하기', 'mgs-delta-stealth-guide', '완벽한 스텔스 플레이를 위한 팁과 전략을 소개합니다.', '스텔스 플레이의 모든 것', '/metal-gear-solid-delta-gameplay.jpg', '메탈 기어 솔리드 델타', '게임플레이 팁', '고급', '20분', 432),
('젤다 메아리 던전 공략 모음', 'zelda-echoes-dungeon-guide', '젤다의 전설: 지혜의 메아리 모든 던전 공략법입니다.', '모든 던전을 정복하는 방법', '/zelda-echoes-of-wisdom-gameplay.jpg', '젤다의 전설', '던전 공략', '중급', '25분', 789);

-- Insert sample posts
INSERT INTO posts (title, content, author, author_avatar, category, likes, comments_count, views, images) VALUES
('위쳐 4 정말 재밌네요!', '방금 위쳐 4 클리어했는데 정말 명작이네요. 스토리가 정말 감동적이었어요.', '게이머123', '/placeholder.svg?height=40&width=40', '자유', 45, 12, 234, ARRAY[]),
('GTA 6 멀티플레이 같이 하실 분?', 'GTA 6 온라인 모드 같이 즐기실 분 구합니다. PC 유저 환영!', '바이스시티맨', '/placeholder.svg?height=40&width=40', '모집', 23, 8, 156, ARRAY[]),
('올해 최고의 게임은 뭐라고 생각하세요?', '2025년도 벌써 많은 명작들이 나왔는데, 여러분들이 생각하는 올해 최고의 게임은 무엇인가요?', '리뷰어', '/placeholder.svg?height=40&width=40', '토론', 67, 34, 445, ARRAY[]);

-- Insert sample comments
INSERT INTO comments (post_id, author, author_avatar, content, likes) VALUES
((SELECT id FROM posts WHERE title = '위쳐 4 정말 재밌네요!' LIMIT 1), '게이머456', '/placeholder.svg?height=40&width=40', '저도 지금 플레이 중인데 정말 재밌어요!', 5),
((SELECT id FROM posts WHERE title = '위쳐 4 정말 재밌네요!' LIMIT 1), '위쳐팬', '/placeholder.svg?height=40&width=40', '엔딩이 정말 감동적이더라구요. 눈물 흘렸습니다 ㅠㅠ', 8);
