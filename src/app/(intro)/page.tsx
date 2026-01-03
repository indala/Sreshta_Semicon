import type { Metadata } from 'next'
import LogoIntro from '@/components/common/LogoIntro'

export const metadata: Metadata = {
  title: 'SRESHTA Semicon Technologies',
  description: 'Sreshta Semicon Technologies Pvt Ltd – Innovation in semiconductor solutions.',
  robots: 'noindex, nofollow', // important: don’t index splash page
}

export default function IntroPage() {
  return <LogoIntro />
}
