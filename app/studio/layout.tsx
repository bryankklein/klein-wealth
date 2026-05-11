// metadata/viewport can't be exported from the Client Component page,
// so we re-export them from this server layout.
export { metadata, viewport } from 'next-sanity/studio'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
