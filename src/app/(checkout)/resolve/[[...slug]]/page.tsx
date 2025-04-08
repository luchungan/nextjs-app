import React from "react"
interface PageParams {
  params: Promise<Record<string, any>>;
}
export async function generateStaticParams() {
  return [
    { slug: ['introduction'] },
    { slug: ['guide', 'getting-started'] },
    { slug: ['guide', 'advanced'] },
  ];
}

const Page = async ({ ...params }: PageParams) => {
  // const _params = await params
  return <div>My post:{JSON.stringify(params)}</div>
}

export default Page 