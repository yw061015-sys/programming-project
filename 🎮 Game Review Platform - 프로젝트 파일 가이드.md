# 🎮 Game Review Platform - 프로젝트 파일 가이드

## 📦 다운로드 파일 구성

**파일명**: `game-review-platform-complete.zip` (175KB)

이 압축 파일에는 Game Review Platform의 모든 소스 코드와 설정 파일이 포함되어 있습니다.

---

## 📁 프로젝트 구조

```
game-review-platform/
├── client/                          # 프론트엔드 (React)
│   ├── public/
│   │   ├── index.html              # HTML 진입점
│   │   └── images/                 # 정적 이미지
│   │
│   ├── src/
│   │   ├── pages/                  # 페이지 컴포넌트
│   │   │   ├── App.tsx             # 라우팅 및 레이아웃
│   │   │   ├── Login.tsx           # 로그인/회원가입 페이지 ⭐
│   │   │   ├── Home.tsx            # 메인 페이지 ⭐
│   │   │   ├── Profile.tsx         # 사용자 프로필 페이지 ⭐
│   │   │   ├── Community.tsx       # 커뮤니티 채팅 페이지 ⭐
│   │   │   ├── NewsDetail.tsx      # 뉴스 상세 페이지 ⭐
│   │   │   └── NotFound.tsx        # 404 페이지
│   │   │
│   │   ├── components/             # 재사용 가능한 컴포넌트
│   │   │   ├── ReviewSection.tsx   # 게임 리뷰 섹션 ⭐
│   │   │   ├── CommunitySection.tsx # 커뮤니티 링크 섹션
│   │   │   ├── NewsSection.tsx     # 게임 뉴스 섹션 ⭐
│   │   │   ├── GuideSection.tsx    # 게임 가이드 섹션 ⭐
│   │   │   ├── ErrorBoundary.tsx   # 에러 처리
│   │   │   ├── Map.tsx             # 지도 컴포넌트
│   │   │   ├── ManusDialog.tsx     # Manus 다이얼로그
│   │   │   └── ui/                 # shadcn/ui 컴포넌트 (60+)
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── input.tsx
│   │   │       ├── textarea.tsx
│   │   │       ├── select.tsx
│   │   │       ├── accordion.tsx
│   │   │       └── ... (50+ 추가 컴포넌트)
│   │   │
│   │   ├── contexts/               # React Context
│   │   │   └── ThemeContext.tsx    # 테마 관리 (다크/라이트 모드)
│   │   │
│   │   ├── hooks/                  # 커스텀 React Hooks
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   │
│   │   ├── lib/                    # 유틸리티 함수
│   │   │   └── utils.ts
│   │   │
│   │   ├── App.tsx                 # 메인 앱 컴포넌트 (라우팅)
│   │   ├── main.tsx                # React 진입점
│   │   ├── index.css               # 글로벌 스타일 (Tailwind CSS)
│   │   └── const.ts                # 상수 정의
│   │
│   └── index.html                  # HTML 템플릿
│
├── server/                          # 백엔드 (Express)
│   └── index.ts                    # Express 서버 설정
│
├── shared/                          # 공유 코드
│   └── const.ts                    # 공유 상수
│
├── package.json                    # 프로젝트 설정 및 의존성 ⭐
├── tsconfig.json                   # TypeScript 설정
├── vite.config.ts                  # Vite 빌드 설정
├── components.json                 # shadcn/ui 설정
├── pnpm-lock.yaml                  # 의존성 잠금 파일
└── patches/                        # 패치 파일
    └── wouter@3.7.1.patch
```

---

## 🎯 핵심 파일 설명

### 페이지 컴포넌트 (⭐ 주요 파일)

#### `Login.tsx` - 로그인/회원가입 페이지
- **기능**: 사용자 인증 (로그인 및 회원가입)
- **주요 기능**:
  - 로그인 탭: 기존 사용자 로그인
  - 회원가입 탭: 새 사용자 등록
  - 유효성 검사 (아이디, 이메일, 비밀번호)
  - localStorage 기반 사용자 관리
- **라인 수**: 약 200줄

#### `Home.tsx` - 메인 페이지
- **기능**: 모든 주요 섹션을 포함한 메인 페이지
- **주요 기능**:
  - 상단 네비게이션 (리뷰, 커뮤니티, 뉴스, 가이드)
  - 게임 리뷰 작성 폼
  - 리뷰 목록 표시
  - 커뮤니티 채팅방 입장 버튼
  - 게임 뉴스 섹션
  - 게임 가이드 섹션
  - 사용자 정보 및 로그아웃 버튼
- **라인 수**: 약 300줄

#### `Profile.tsx` - 사용자 프로필 페이지
- **기능**: 사용자 프로필 관리
- **주요 기능**:
  - 프로필 정보 탭 (사용자명, 이메일, 자기소개)
  - 프로필 수정 기능
  - 활동 통계 (리뷰 수, 메시지 수, 평균 평점)
  - 커뮤니티 활동 탭 (작성한 메시지 목록)
- **라인 수**: 약 250줄

#### `Community.tsx` - 커뮤니티 채팅 페이지
- **기능**: 실시간 커뮤니티 채팅
- **주요 기능**:
  - 메시지 입력 및 전송
  - 사용자별 메시지 구분 (자신/다른 사용자)
  - 타임스탬프 표시
  - localStorage 기반 메시지 저장
- **라인 수**: 약 200줄

#### `NewsDetail.tsx` - 뉴스 상세 페이지
- **기능**: 뉴스 상세 정보 표시
- **주요 기능**:
  - 뉴스 제목, 요약, 상세 내용
  - 발행일, 카테고리
  - 뉴스 이미지
  - 뒤로 가기 버튼
- **라인 수**: 약 150줄

### 컴포넌트 (⭐ 주요 파일)

#### `ReviewSection.tsx` - 게임 리뷰 섹션
- **기능**: 게임 리뷰 작성 및 목록 표시
- **주요 기능**:
  - 리뷰 입력 폼 (제목, 플랫폼, 평점, 의견)
  - 이미지 첨부 기능
  - 리뷰 목록 표시
  - 최신 리뷰 강조
  - localStorage 저장
- **라인 수**: 약 250줄

#### `NewsSection.tsx` - 게임 뉴스 섹션
- **기능**: 게임 뉴스 카드 표시
- **주요 기능**:
  - 4개의 Mock 뉴스 데이터
  - 뉴스 카드 UI
  - "자세히 보기" 링크 (상세 페이지로 이동)
- **라인 수**: 약 150줄

#### `GuideSection.tsx` - 게임 가이드 섹션
- **기능**: 게임 가이드를 아코디언 형식으로 표시
- **주요 기능**:
  - 3개 게임 가이드 (젤다, 엘든 링, 스타듀 밸리)
  - 아코디언 UI (펼치기/접기)
  - 상세 공략 정보
- **라인 수**: 약 150줄

### 스타일 및 설정

#### `index.css` - 글로벌 스타일
- Tailwind CSS 4 설정
- 커스텀 테마 변수
- 다크/라이트 모드 정의
- 글로벌 스타일 규칙
- **라인 수**: 약 200줄

#### `package.json` - 프로젝트 설정
- 프로젝트 메타데이터
- npm 스크립트 (dev, build, start, preview)
- 의존성 목록 (React, TypeScript, Tailwind CSS 등)
- devDependencies (Vite, ESBuild 등)

---

## 🚀 개발 환경 설정

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 pnpm 8.0 이상

### 설치 및 실행

#### 1. 압축 파일 해제
```bash
unzip game-review-platform-complete.zip
cd game-review-platform
```

#### 2. 의존성 설치
```bash
# pnpm 사용 (권장)
pnpm install

# 또는 npm 사용
npm install
```

#### 3. 개발 서버 실행
```bash
pnpm dev
# 또는
npm run dev
```

개발 서버가 `http://localhost:3000`에서 시작됩니다.

#### 4. 프로덕션 빌드
```bash
pnpm build
# 또는
npm run build
```

#### 5. 프로덕션 서버 실행
```bash
pnpm start
# 또는
npm start
```

---

## 📊 주요 파일 통계

| 파일 유형 | 개수 | 라인 수 |
|---------|------|--------|
| **페이지 컴포넌트** | 6개 | ~1,200줄 |
| **기능 컴포넌트** | 4개 | ~600줄 |
| **UI 컴포넌트** | 60+개 | ~3,000줄 |
| **스타일 파일** | 1개 | ~200줄 |
| **설정 파일** | 4개 | ~200줄 |
| **총계** | 75+개 | ~5,200줄 |

---

## 🔧 주요 의존성

| 패키지 | 버전 | 용도 |
|--------|------|------|
| React | 19.0.0 | UI 라이브러리 |
| TypeScript | 5.6.3 | 타입 안정성 |
| Tailwind CSS | 4.1.14 | 스타일링 |
| Wouter | 3.3.5 | 라우팅 |
| shadcn/ui | 최신 | UI 컴포넌트 |
| Vite | 7.1.7 | 빌드 도구 |
| Express | 4.21.2 | 백엔드 서버 |

---

## 💡 커스터마이징 가이드

### 색상 변경
`client/src/index.css`의 `:root` 섹션에서 CSS 변수를 수정하세요.

```css
:root {
  --primary: #A855F7;  /* 주색 변경 */
  --secondary: #EC4899; /* 보조색 변경 */
  /* ... 기타 색상 */
}
```

### 폰트 변경
`client/index.html`의 Google Fonts 링크를 수정하세요.

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet" />
```

### Mock 데이터 수정
각 컴포넌트의 `useState` 초기값을 수정하여 Mock 데이터를 변경할 수 있습니다.

### API 연동
`server/index.ts`를 수정하여 백엔드 API를 추가할 수 있습니다.

---

## 🐛 문제 해결

### 포트 충돌
3000 포트가 이미 사용 중인 경우:
```bash
pnpm dev -- --port 3001
```

### 의존성 문제
캐시 초기화:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### 빌드 오류
TypeScript 오류 확인:
```bash
pnpm check
```

---

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

---

## 📞 지원

**배포 URL**: https://3000-ipaubvzhar0c0jcu15xmp-f9f45a3a.sg1.manus.computer

**테스트 계정**:
- 아이디: `admin`
- 비밀번호: `password`

**신규 계정**: 회원가입 탭에서 새로운 계정 생성 가능

---

**마지막 업데이트**: 2025년 12월 15일  
**버전**: 1.0.0
