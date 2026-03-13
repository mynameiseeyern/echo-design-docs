import { notFound } from "next/navigation"
import { getDocContent } from "@/lib/docs-content"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const content = getDocContent(slug)
  if (!content) return {}
  return {
    title: `${content.title} - Echo Design System`,
    description: content.description,
  }
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params
  const content = getDocContent(slug)

  if (!content) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">{content.title}</h1>
        <p className="text-lg text-muted-foreground">{content.description}</p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: content.html }} className="prose prose-sm max-w-none" />
    </div>
  )
}
