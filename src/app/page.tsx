import prisma from '@/db'
import { error } from 'console'
import Link from 'next/link'

async function createNewPost(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()
  if(typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title")
  }

}

export default function Home() {
  
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
        </div>
      </div>
    </>
  )
}
