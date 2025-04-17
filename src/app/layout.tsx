import type { Metadata } from 'next'
import ThemeProvider from '@/components/theme/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export const metadata: Metadata = {
  title: '星野民家シェアハウス - 北九州市古民スタイルシェアハウス',
  description:
    '門司に面白いシェアハウスがあります！海街Lifeを満喫できるのと同時に、”日本の古民家”のシェアハウスを体験できます！お気軽にお問い合わせください。全国的に有名なレトロな海街『門司』に星野民家シェアハウスが登場です（2022年10月）。隠れ家風になっており、敷地がなんと100坪以上あり、広々としたお庭やBBQスペース、Freeスペースなどがあります。ご近所さんにも恵まれた環境になります。差し入れなどを持ってきてくれます。『星野民家シェアハウス』は約1年半かけて、自分達の手でリノベーションしました。作る時に心がけたことは、『古い+新しい』×『和風+洋風』のハイブリッドです。昔のレトロさやノスタルジックを体験することが出来るのと同時に、現代に合う生活スタイルとデザインで入居者さんに楽しく暮らして頂けるようになっております。また、春は花見や魚釣り、夏は花火やBBQや海やキャンプ、秋は紅葉やお月見やサイクリング、冬は冬景色や焚き火や焼き芋などが楽しめます。ビッグターミナル駅（門司駅）から車で5分、徒歩で10分程度なので通勤やお出掛けにも便利です。その他にも近くには商店街や大型スーパー、コンビニ、飲食店、観光名所などなど沢山ありますので、街ごと楽しめるようになっております。入居者さんに喜んで頂けるように誠心誠意頑張りますので、なにかあれば大家の私に何でも相談してくださいね！',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ja" suppressHydrationWarning>
    <head />

    <body>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />

        {/* main content */}
        {children}

        <Footer />

        <Toaster />
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
