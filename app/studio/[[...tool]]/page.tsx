'use client'

import dynamic from 'next/dynamic'
import config from '../../../sanity.config'

// NextStudio touches `window` at import time, so we must skip SSR.
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false },
)

export default function StudioPage() {
  return <NextStudio config={config} />
}
