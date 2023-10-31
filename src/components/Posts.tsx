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
            <span className='flex flex-row gap-2 items-center py-1'>
            { title } { content }
            <button onClick={() => deletePost(id)} className='p-2 bg-gray-800 rounded-md'>Delete</button>
            </span>
        </li>
    )
}