"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, User, ThumbsUp, MessageSquare, Share2, Flag, ImagePlus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useAuth } from "@/hooks/use-auth"

// Mock data function
function getPost(id: string) {
  const postData: Record<string, any> = {
    "1": {
      id: "1",
      title: "GTA 6 PC 사양 어느 정도 될까요?",
      content: `이번에 컴퓨터 새로 맞추려고 하는데 5080으로 충분할까요? 권장 사양 예상이 궁금합니다.
      
      트레일러 보니까 그래픽이 장난 아니던데 최적화가 잘 되어 나올지 걱정이네요. 4K 60프레임 방어하려면 어느 정도 사양이 필요할까요?`,
      images: [],
      author: "컴알못",
      authorId: "user1",
      date: "2025년 3월 16일 10:30",
      likes: 5,
      category: "질문",
      comments: [
        {
          id: "c1",
          author: "하드웨어매니아",
          authorId: "user10",
          content:
            "5080이면 충분하고도 남을 겁니다. 락스타가 최적화는 잘 하는 편이라 4070 정도로도 충분히 돌릴 수 있을 것 같아요.",
          date: "10분 전",
          likes: 2,
        },
        {
          id: "c2",
          author: "지나가던행인",
          authorId: "user11",
          content: "콘솔 베이스라 PC 요구 사양이 그렇게 높지는 않을 듯요.",
          date: "5분 전",
          likes: 1,
        },
      ],
    },
    "2": {
      id: "2",
      title: "몬헌 와일즈 베타 같이 하실 분 구합니다 (PS5)",
      content:
        "이번 주말 오픈 베타 같이 달리실 분! 태도 유저입니다. 초보도 환영해요. 디스코드 가능하신 분이면 좋겠습니다.",
      images: ["/placeholder.svg?key=mh-wilds"],
      author: "수렵피리장인",
      authorId: "user2",
      date: "2025년 3월 16일 09:00",
      likes: 8,
      category: "파티 모집",
      comments: [],
    },
  }

  return postData[id] || postData["1"]
}

export default function CommunityPostPage({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const post = getPost(params.id)
  const [newComment, setNewComment] = useState("")
  const [commentImageFiles, setCommentImageFiles] = useState<File[]>([])
  const [commentImagePreviews, setCommentImagePreviews] = useState<string[]>([])

  if (!post) {
    notFound()
  }

  const handleCommentImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length + commentImageFiles.length > 3) {
      alert("댓글에는 최대 3개의 이미지만 첨부할 수 있습니다.")
      return
    }

    setCommentImageFiles([...commentImageFiles, ...files])

    files.forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCommentImagePreviews((prev) => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeCommentImage = (index: number) => {
    setCommentImageFiles(commentImageFiles.filter((_, i) => i !== index))
    setCommentImagePreviews(commentImagePreviews.filter((_, i) => i !== index))
  }

  const handleAddComment = () => {
    if (!user) {
      alert("로그인이 필요합니다.")
      return
    }
    if (!newComment.trim()) {
      alert("댓글 내용을 입력해주세요.")
      return
    }
    console.log("[v0] Adding comment:", newComment, "with images:", commentImageFiles)
    setNewComment("")
    setCommentImageFiles([])
    setCommentImagePreviews([])
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{post.likes} 좋아요</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{post.comments.length} 댓글</span>
                </div>
              </div>
            </div>

            <Card className="p-6 mb-8">
              <div className="prose prose-lg dark:prose-invert max-w-none whitespace-pre-wrap">{post.content}</div>
              {post.images && post.images.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {post.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`첨부 이미지 ${index + 1}`}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover w-full"
                    />
                  ))}
                </div>
              )}
            </Card>

            <div className="mb-8 flex items-center gap-2">
              <Button variant="outline">
                <ThumbsUp className="mr-2 h-4 w-4" />
                좋아요
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                공유
              </Button>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Flag className="h-4 w-4" />
              </Button>
            </div>

            <Separator className="my-8" />

            {/* Comments Section */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">댓글 {post.comments.length}개</h2>

              {/* Add Comment */}
              <Card className="mb-6 p-4">
                <Textarea
                  placeholder={user ? "댓글을 입력하세요..." : "로그인 후 댓글을 작성할 수 있습니다."}
                  rows={4}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  disabled={!user}
                />
                {user && (
                  <>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => document.getElementById("comment-image-upload")?.click()}
                      >
                        <ImagePlus className="mr-2 h-4 w-4" />
                        이미지 추가 ({commentImageFiles.length}/3)
                      </Button>
                    </div>
                    <input
                      id="comment-image-upload"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleCommentImageChange}
                    />
                    {commentImagePreviews.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {commentImagePreviews.map((preview, index) => (
                          <div key={index} className="relative group">
                            <Image
                              src={preview || "/placeholder.svg"}
                              alt={`Preview ${index + 1}`}
                              width={100}
                              height={100}
                              className="rounded-md object-cover w-full h-20"
                            />
                            <Button
                              type="button"
                              size="icon"
                              variant="destructive"
                              className="absolute top-1 right-1 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => removeCommentImage(index)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
                <div className="mt-2 flex justify-end">
                  <Button onClick={handleAddComment} disabled={!user}>
                    댓글 작성
                  </Button>
                </div>
              </Card>

              {/* Comments List */}
              <div className="space-y-4">
                {post.comments.map((comment) => (
                  <Card key={comment.id} className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 overflow-hidden rounded-full bg-muted">
                          <Image src="/placeholder.svg" alt={comment.author} width={32} height={32} />
                        </div>
                        <div>
                          <div className="font-semibold">{comment.author}</div>
                          <div className="text-xs text-muted-foreground">{comment.date}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="mr-1 h-3 w-3" />
                        {comment.likes}
                      </Button>
                    </div>
                    <p className="text-sm">{comment.content}</p>
                    {comment.images && comment.images.length > 0 && (
                      <div className="mt-3 flex gap-2">
                        {comment.images.map((image, index) => (
                          <Image
                            key={index}
                            src={image || "/placeholder.svg"}
                            alt={`댓글 이미지 ${index + 1}`}
                            width={200}
                            height={150}
                            className="rounded-md object-cover"
                          />
                        ))}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Author Profile */}
              <Card className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image src="/placeholder.svg" alt={post.author} width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-bold">{post.author}</h4>
                    <p className="text-xs text-muted-foreground">활동적인 회원</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <div className="font-bold">42</div>
                    <div className="text-xs text-muted-foreground">게시글</div>
                  </div>
                  <div>
                    <div className="font-bold">156</div>
                    <div className="text-xs text-muted-foreground">댓글</div>
                  </div>
                  <div>
                    <div className="font-bold">89</div>
                    <div className="text-xs text-muted-foreground">좋아요</div>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 w-full bg-transparent">
                  프로필 보기
                </Button>
              </Card>

              {/* Related Posts */}
              <Card className="p-6">
                <h3 className="mb-4 font-bold">관련 게시글</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Link key={i} href="#" className="group block">
                      <h4 className="text-sm font-medium leading-tight group-hover:text-primary">
                        엘든 링 관련 게시글 제목 {i}
                      </h4>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <span>12 댓글</span>
                        <span>•</span>
                        <span>1시간 전</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>

              {/* Community Rules */}
              <Card className="p-6">
                <h3 className="mb-4 font-bold">커뮤니티 규칙</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 서로 존중하는 태도로 대화해주세요</li>
                  <li>• 스포일러는 경고 표시를 해주세요</li>
                  <li>• 광고성 게시글은 금지됩니다</li>
                  <li>• 욕설 및 비방은 삼가주세요</li>
                </ul>
              </Card>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
