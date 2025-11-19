'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { notFound } from 'next/navigation'
import { Calendar, User, ThumbsUp, MessageSquare, Share2, Flag, ImagePlus, X } from 'lucide-react'
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
  return {
    id: "1",
    title: "엘든 링 DLC 보스 난이도 어떻게 생각하시나요?",
    content: `메시머 보스 너무 어려운 것 같은데 저만 그런가요? 
    
    저는 레벨 150에 +25 무기로 도전했는데도 30번 넘게 죽었습니다. 패턴이 너무 빠르고 범위도 넓어서 회피하기가 정말 어렵더라고요.
    
    특히 2페이즈에서 불 공격이 추가되면서 난이도가 급상승하는 것 같습니다. 다들 어떻게 클리어하셨나요? 팁 좀 공유해주세요!`,
    images: [
      "/elden-ring-shadow-of-the-erdtree-gameplay-screensh.jpg",
      "/dragons-dogma-2-gameplay.jpg"
    ],
    author: "게이머123",
    authorId: "user1",
    date: "2024년 6월 20일 14:30",
    likes: 24,
    category: "토론",
    comments: [
      {
        id: "c1",
        author: "프롬게이머",
        authorId: "user5",
        content: "저도 비슷하게 느꼈어요. 하지만 패턴을 외우고 나니 생각보다 쉬웠습니다. 2페이즈 불 공격은 왼쪽으로 구르면 대부분 피할 수 있어요!",
        date: "2시간 전",
        likes: 12,
      },
      {
        id: "c2",
        author: "소울본러버",
        authorId: "user6",
        content: "방패 들고 가드 카운터 위주로 싸우면 훨씬 쉽습니다. 공격 욕심 버리고 천천히 하세요.",
        date: "1시간 전",
        likes: 8,
        images: ["/final-fantasy-7-rebirth-gameplay.jpg"],
      },
      {
        id: "c3",
        author: "RPG마스터",
        authorId: "user3",
        content: "마법 빌드로 하면 원거리에서 안전하게 딜 넣을 수 있어요. 혜성 아주르 추천합니다!",
        date: "30분 전",
        likes: 5,
      },
    ],
  }
}

export default function CommunityPostPage({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const post = getPost(params.id)
  const [newComment, setNewComment] = useState('')
  const [commentImageFiles, setCommentImageFiles] = useState<File[]>([])
  const [commentImagePreviews, setCommentImagePreviews] = useState<string[]>([])

  if (!post) {
    notFound()
  }

  const handleCommentImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length + commentImageFiles.length > 3) {
      alert('댓글에는 최대 3개의 이미지만 첨부할 수 있습니다.')
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
      alert('로그인이 필요합니다.')
      return
    }
    if (!newComment.trim()) {
      alert('댓글 내용을 입력해주세요.')
      return
    }
    console.log('[v0] Adding comment:', newComment, 'with images:', commentImageFiles)
    setNewComment('')
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
              <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {post.title}
              </h1>
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
              <div className="prose prose-lg dark:prose-invert max-w-none whitespace-pre-wrap">
                {post.content}
              </div>
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
              <h2 className="mb-6 text-2xl font-bold">
                댓글 {post.comments.length}개
              </h2>

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
                        onClick={() => document.getElementById('comment-image-upload')?.click()}
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
                          <Image
                            src="/placeholder.svg"
                            alt={comment.author}
                            width={32}
                            height={32}
                          />
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
                    <Image
                      src="/placeholder.svg"
                      alt={post.author}
                      width={48}
                      height={48}
                    />
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
                <Button variant="outline" className="mt-4 w-full">
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
