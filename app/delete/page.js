'use client'
import { useRouter } from "next/navigation"

export default function Delete({result}){
    let router = useRouter();

    return(
        <button onClick={(e)=>{
            fetch('/api/post/delete',
            {method : 'POST',
            body : result._id.toString()
        })
        .then(()=>{
            e.target.parentElement.style.display= 'none';
            router.push('/');
        })
        }}
        className="border border-black p-1 mt-2 ml-1 rounded-md">삭제 하기</button>
    )
}