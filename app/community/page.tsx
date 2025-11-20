"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MessageSquare, ThumbsUp, User, Calendar, PenSquare, ImagePlus, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useAuth } from "@/hooks/use-auth"

// Mock data for community posts
const posts = [
  {
    id: "1",
    title: "GTA 6 PC 사양 어느 정도 될까요?",
    content: "이번에 컴퓨터 새로 맞추려고 하는데 5080으로 충분할까요? 권장 사양 예상이 궁금합니다.",
    author: "컴알못",
    authorId: "user1",
    date: "방금 전",
    likes: 5,
    comments: 12,
    category: "질문",
  },
  {
    id: "2",
    title: "몬헌 와일즈 베타 같이 하실 분 구합니다 (PS5)",
    content: "이번 주말 오픈 베타 같이 달리실 분! 태도 유저입니다. 초보도 환영해요.",
    author: "수렵피리장인",
    authorId: "user2",
    date: "1시간 전",
    likes: 8,
    comments: 4,
    category: "파티 모집",
  },
  {
    id: "3",
    title: "위쳐 4 시리 주인공 확정인듯?",
    content: "트레일러 보니까 시리가 메인인 것 같은데 어떻게 생각하시나요? 게롤트도 나왔으면 좋겠는데...",
    author: "위쳐팬",
    authorId: "user3",
    date: "3시간 전",
    likes: 45,
    comments: 28,
    category: "토론",
  },
  {
    id: "4",
    title: "문명 7 한국 문명 지도자 예상",
    content: "세종대왕님이 또 나오실까요? 아니면 다른 분이 나오실지... 개인적으로는 선덕여왕님 다시 보고 싶네요.",
    author: "문명하셨습니다",
    authorId: "user4",
    date: "5시간 전",
    likes: 23,
    comments: 15,
    category: "토론",
  },
  {
    id: "5",
    title: "데스 스트랜딩 2 그래픽 미쳤네요",
    content: "코지마 형님 진짜 외계인 고문하신듯... 물 그래픽이랑 질감 표현이 실사 수준입니다.",
    author: "코지마신도",
    authorId: "user5",
    date: "1일 전",
    likes: 156,
    comments: 42,
    category: "잡담",
  },
]

const categories = ["전체", "토론", "파티 모집", "투표", "팁 공유", "추천", "질문", "잡담"]

export default function CommunityPage() {
  const { user } = useAuth()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newPost, setNewPost] = useState({ title: "", content: "", category: "토론" })
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length + imageFiles.length > 5) {
      alert("최대 5개의 이미지만 첨부할 수 있습니다.")
      return
    }

    setImageFiles([...imageFiles, ...files])

    // Create preview URLs
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index: number) => {
    setImageFiles(imageFiles.filter((_, i) => i !== index))
    setImagePreviews(imagePreviews.filter((_, i) => i !== index))
  }

  const handleCreatePost = () => {
    if (!user) {
      alert("로그인이 필요합니다.")
      return
    }
    // Here we would save to localStorage
    console.log("[v0] Creating post:", newPost, "with images:", imageFiles)
    setIsDialogOpen(false)
    setNewPost({ title: "", content: "", category: "토론" })
    setImageFiles([])
    setImagePreviews([])
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">커뮤니티</h1>
            <p className="text-muted-foreground">게이머들과 소통하고 정보를 공유하세요.</p>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg">
                <PenSquare className="mr-2 h-4 w-4" />글 작성하기
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>새 글 작성</DialogTitle>
                <DialogDescription>커뮤니티에 공유하고 싶은 내용을 작성해주세요.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">카테고리</label>
                  <Select
                    value={newPost.category}
                    onValueChange={(value) => setNewPost({ ...newPost, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories
                        .filter((c) => c !== "전체")
                        .map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">제목</label>
                  <Input
                    placeholder="제목을 입력하세요"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">내용</label>
                  <Textarea
                    placeholder="내용을 입력하세요"
                    rows={8}
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">이미지 첨부 (최대 5개)</label>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("image-upload")?.click()}
                    >
                      <ImagePlus className="mr-2 h-4 w-4" />
                      이미지 추가
                    </Button>
                    <span className="text-sm text-muted-foreground">{imageFiles.length}/5</span>
                  </div>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  {imagePreviews.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <Image
                            src={preview || "/placeholder.svg"}
                            alt={`Preview ${index + 1}`}
                            width={150}
                            height={150}
                            className="rounded-md object-cover w-full h-24"
                          />
                          <Button
                            type="button"
                            size="icon"
                            variant="destructive"
                            className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  취소
                </Button>
                <Button onClick={handleCreatePost}>작성 완료</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "전체" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="게시글 검색..." className="pl-8 w-full sm:w-[250px]" />
            </div>
            <Select defaultValue="latest">
              <SelectTrigger className="w-full sm:w-[150px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="정렬" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">최신순</SelectItem>
                <SelectItem value="popular">인기순</SelectItem>
                <SelectItem value="comments">댓글순</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link key={post.id} href={`/community/${post.id}`}>
              <Card className="p-6 transition-all hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      {post.likes > 50 && (
                        <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                          인기
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold leading-tight hover:text-primary">{post.title}</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{post.content}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg">
            더 많은 게시글 로드하기
          </Button>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
