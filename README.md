# Game review website

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/yw061015-1968s-projects/v0-game-review-website-x2)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/b9TpXv1ZfK5)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/yw061015-1968s-projects/v0-game-review-website-x2](https://vercel.com/yw061015-1968s-projects/v0-game-review-website-x2)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/b9TpXv1ZfK5](https://v0.app/chat/b9TpXv1ZfK5)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Link
**[https://v0-game-review-website-x2.vercel.app/]**


## Plan

---

# 🎮 게임 리뷰 웹사이트 기획서

*GitHub용 README.md 최적화 버전*

---

## 📌 프로젝트 개요

**프로젝트명:** Gamer Review Hub (가칭)
**목적:**

* 다양한 게임 리뷰 제공을 중심으로 한 게이밍 콘텐츠 플랫폼 구축
* 리뷰·뉴스·가이드·커뮤니티를 통합한 게이머 중심의 허브
* 유저가 게임 선택 시 참고할 수 있는 믿을 수 있는 리뷰 제공

**대상 사용자:**

* 신작 정보를 찾는 게이머
* 분석 기반으로 게임 선택을 원하는 사용자
* 리뷰어·스트리머·콘텐츠 제작자

---

## 📁 목차

* [프로젝트 개요](#-프로젝트-개요)
* [핵심 기능](#-핵심-기능)
* [정보 구조 (IA)](#-정보-구조-ia)
* [UI/UX 설계](#-uiux-설계)
* [디자인 가이드](#-디자인-가이드)
* [기술 스택](#-기술-스택)
* [개발 일정](#-개발-일정)
* [운영 전략](#-운영-전략)

---

## 🚀 핵심 기능

### 🔥 Must Have 기능

* 리뷰 목록 페이지

  * 게임 제목
  * 요약 텍스트
  * 장르 태그
  * 평점 (10점 척도)
  * 작성 날짜
  * "더 보기" 기능
* 리뷰 상세 페이지

  * 스크린샷
  * 리뷰 본문
  * 장단점 분석
* 상단 네비게이션 메뉴

  * Reviews / News / Guides / Community
  * 로그인 / 회원가입
* 반응형 화면 지원

---

### ⭐ Should Have 기능

* 리뷰 필터/정렬 (장르, 플랫폼, 최신순, 평점순)
* 다크/라이트 테마 지원
* 뉴스·가이드 섹션 확장
* 커뮤니티 게시판 (포럼 형태)

---

### 💡 Could Have 기능

* 리뷰어 등급 시스템
* AI 기반 게임 추천
* 소셜 공유 기능
* 회원 프로필 페이지
* 북마크 기능

---

## 🗂 정보 구조 (IA)

```
/
├── Home
├── Reviews
│    ├── Review List
│    └── Review Detail
├── News
├── Guides
├── Community (Forum)
├── About
└── Contact
```

### 사용자 흐름(Flow)

방문 → 리뷰 탐색 → 상세 리뷰 확인 → 관련 콘텐츠 이동 → 커뮤니티 참여

---

## 🎨 UI/UX 설계

### 리뷰 목록 페이지

* 카드형 레이아웃
* 게임 썸네일 + 평점 강조
* 장르 태그 노출
* 모바일에서는 1열, 데스크탑에서는 3열 구성

### 리뷰 상세 페이지

* 메인 스크린샷
* 평점 UI 강조
* 세부 리뷰 섹션(스토리/게임플레이/그래픽 등)
* 관련 리뷰 추천
* 댓글 입력창

### 커뮤니티(Forum)

* 카테고리/주제 분류
* 인기글 섹션
* 토론형 UI

---

## 🎨 디자인 가이드

### 컬러 팔레트

| 용도     | 색상        |
| ------ | --------- |
| 배경(다크) | `#0F0F10` |
| 카드 배경  | `#1A1A1D` |
| 텍스트    | `#EAEAEA` |
| 포인트    | `#7C4DFF` |

### 타이포그래피

* **Title:** 굵고 가독성 높은 고딕체 계열
* **Body:** San-serif 기반, 모바일 최적화

### 레이아웃

* 12-column Grid
* 충분한 내부 여백(Padding)
* 카드형 구성 중심

---

## 🛠 기술 스택

### 프론트엔드

* React
* Next.js
* TailwindCSS 또는 Styled Components

### 백엔드

* Headless CMS (Sanity, Strapi 등)
* 인증 (NextAuth.js)

### 데이터베이스

* MongoDB / Supabase / Firebase 중 선택

### 배포

* Vercel (Next.js 환경 최적화)

### 분석

* Google Analytics
* Hotjar (UX 트래킹)

---

## 📅 개발 일정 (예시)

### **1주차 — 설계**

* IA, 와이어프레임
* 디자인 시안(Figma)
* 기능 명세 정의

### **2–3주차 — 개발**

* 리뷰 목록/상세 구현
* 네비게이션 메뉴 구현
* 뉴스·가이드·커뮤니티 페이지 기본 구조 개발

### **4주차 — 백엔드 연결**

* CMS 구조화
* 리뷰 데이터 연동
* 댓글·회원 기능 추가

### **5주차 — 테스트 & 배포**

* 반응형 점검
* 성능 최적화
* Vercel 배포

---

## 🔧 운영 전략

### 콘텐츠 전략

* 정기 리뷰 업데이트
* 신작 위주 뉴스 발행
* 가이드·공략 콘텐츠 확보

### 커뮤니티 전략

* 토론 유도
* 우수 리뷰어 강조
* 이벤트 운영(리뷰 콘테스트)

### 분석 & 개선

* 사용자 행동 분석
* UI/UX 개선 주기적 업데이트

---
