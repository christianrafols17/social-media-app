"use client"

type PostContentProps = {
    id: number
    title: string
    content: string
    deletePost: (id:number) => void
}

export function Posts({ id, title, content, deletePost }: PostContentProps) {
    
    return(
        <li key={ id } >
            <span className='flex flex-col gap-2 items-start py-1'>
                <p>Title: { title }</p>
                <p>Content: { content }</p>
            </span>
            <span className='flex flex-row gap-2 py-1'>
                <button onClick={() => deletePost(id)} className='p-2 bg-gray-800 rounded-md w-20'>Delete</button>
                <button className='p-2 bg-gray-800 rounded-md w-20'>Like</button>
            </span>
        </li>
    )
}