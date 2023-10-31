import prisma from '@/db'
import Link from 'next/link'
import { Posts } from '../components/Posts'
import { revalidatePath } from 'next/cache'

async function createNewPost(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf();

  if(typeof title !== "string" || title.length === 0) {
    throw new Error ("Invalid Title");
  }

  await prisma.post.create({ data: { title, content:"Hi" } });
  revalidatePath("/")
}


async function deletePost(id: number) {
  "use server"

  await prisma.post.delete({ where: { id } })
  revalidatePath("/")
}


function getPost() {
  return prisma.post.findMany()
}

export default async function Home() {

  const posts = await getPost()
  
  return (
    <>
      <div className='flex flex-row w-full h-12 bg-slate-600 p-4 justify-between items-center'>
        <h1 className='text-2xl '>Hello World!</h1>
        <Link href="/new" className='hover:bg-gray-800 p-2 rounded-md'>User Page</Link>
      </div>
      <div className='flex flex-row gap-4'>
        <div className='bg-slate-600 w-1/4 min-h-screen mt-4'>

        </div>
        <div className='flex flex-col bg-slate-600 w-3/4 min-h-screen mt-4 p-4'>
          <h1 className='text-2xl text-center pb-4'>Home Page</h1>
          <form action={createNewPost} className='flex w-full gap-2'>
            <input type='text' name='title' className='p-2 rounded-md text-black w-full'></input>
            <button type='submit' className='p-2 bg-slate-400 rounded-md'> Post </button>
          </form>
          <ul>
            {posts.map(post => (
              <Posts key={post.id} {...post} deletePost={deletePost}/>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
