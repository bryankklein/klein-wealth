'use client'

import dynamic from 'next/dynamic'

// Studio touches `window` at module init. Keep all Sanity imports inside the
// dynamic boundary so they don't load during SSR.
const StudioMount = dynamic(() => import('./studio-mount'), {ssr: false})

export default function StudioPage() {
  return <StudioMount />
}
