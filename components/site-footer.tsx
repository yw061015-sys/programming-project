import Link from "next/link"
import { Gamepad2, Github, Twitter, Youtube } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Gamepad2 className="h-6 w-6" />
              <span className="font-bold">Game Review</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              최신 게임 리뷰와 뉴스를 제공하는 최고의 플랫폼입니다. 게이머를 위한, 게이머에 의한 공간.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">카테고리</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/reviews" className="hover:text-foreground">리뷰</Link></li>
              <li><Link href="/news" className="hover:text-foreground">뉴스</Link></li>
              <li><Link href="/guides" className="hover:text-foreground">가이드</Link></li>
              <li><Link href="/hardware" className="hover:text-foreground">하드웨어</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">커뮤니티</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/forums" className="hover:text-foreground">포럼</Link></li>
              <li><Link href="/discord" className="hover:text-foreground">Discord</Link></li>
              <li><Link href="/events" className="hover:text-foreground">이벤트</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">법적 고지</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground">개인정보 처리방침</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">이용약관</Link></li>
              <li><Link href="/cookies" className="hover:text-foreground">쿠키 정책</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Game Review. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
