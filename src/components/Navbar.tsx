'use client'

import React from 'react'
import BlurredCard from '@/components/BlurredCard'
import ThemeToggle from '@/components/theme/ThemeToggle'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-2 z-50 mx-auto max-w-xl">
      <BlurredCard>
        <div className="flex w-full items-center justify-around">
          <ul className="flex cursor-pointer items-center justify-start space-x-1 text-xs font-semibold md:space-x-4 md:text-base">
            <Link href="#ハウス室内の写真">
              <li>室内写真</li>
            </Link>

            <Link href="#ルームの情報">
              <li>ルーム情報</li>
            </Link>

            <Link href="#ハウスの周辺環境">
              <li>周辺環境</li>
            </Link>
            <Link href="#マップで見る">
              <li>マップで見る</li>
            </Link>
          </ul>

          <ThemeToggle />
          {/* <Button variant={'outline'} onClick={}>
          lang
        </Button> */}
        </div>
      </BlurredCard>
    </nav>
  )
}

export default Navbar
