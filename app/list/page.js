import { connectDB } from "@/util/database"
import Link from "next/link";

export default async function List(){
    const db = (await connectDB).db('diary');
    let result = await db.collection('list').find().toArray();
    return(
        <div className="min-h-screen flex flex-col justify-center items-center relative">
                <div className="text-2xl font-semibold mt-5 absolute top-40">My-Diary</div>
            {result.map((v,i)=>{
                return(
                    <div key={i} className="">
                    <div >
                    <p className="flex justify-between items-center border border-black p-2 m-1 w-[500px]">
                    제목 : 
                    <span >{result[i].title} </span>
                    <Link href={`/detail/${result[i]._id}`} >
                    <button className="border border-black p-1 ">상세보기</button>
                    </Link>
                    </p> 
                    </div>
                    </div>
                )
            })
            }
            
        </div>
    )
}