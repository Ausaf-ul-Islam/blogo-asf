import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeSlug from 'rehype-slug'
import rehypeStringify from "rehype-stringify"
import matter from "gray-matter"
import fs from "fs"
import Onthispage from '@/components/Onthispage'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypePrettyCode } from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import { Metadata, ResolvingMetadata } from 'next'


type Props = {
  params: { slug: string, title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export default async function BlogPage({ params }: { params: { slug: string } }) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    },
    )
    .use(rehypeAutolinkHeadings)


  const filePath = `content/${params.slug}.md`
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent)

  const htmlContent = (await processor.process(content)).toString()
  return (
    <MaxWidthWrapper className="prose dark:prose-invert">
      <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-16 ">
        <div className="flex-1 ">
          <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-6">
            {data.title}
          </h1>
          <div
            className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          ></div>
        </div>
        <Onthispage
          className="text-sm w-full lg:w-[30%] p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-inner text-gray-800 dark:text-gray-300 border-l-4 border-purple-500"
          htmlContent={htmlContent}
        />
      </div>
    </MaxWidthWrapper>

  )
}


export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params 
  const filePath = `content/${params.slug}.md`
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent)
  return {
    title: `${data.title}-ProgrammingWithAusaf`,
    description: data.description
  }

}