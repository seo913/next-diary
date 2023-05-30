import Delete from "@/app/delete/page";
import { connectDB } from "@/util/database"
import { ObjectId } from 'mongodb';
import Link from "next/link";

export default async function detail(props){
    const db = (await connectDB).db('diary');
    let result= await db.collection('list').findOne({_id : new ObjectId(props.params.id) })
    return(
        // <div>
        //     <div>
        //     {result.title}
        //     {result.date}
        //     {result.weather}
        //     {result.content}
        //    </div>
        // </div>
        <div className="min-h-screen flex justify-center items-start mt-14 relative">
            <div className="flex items-start justify-center absolute top-[-35px] font-semibold text-lg ">일기</div>
                <div className="w-[1000px] h-[500px] border border-black mt-2">
                <div className=" border-b-[1px] border-black h-10 flex items-center pl-2 pt-1">
                   <span className=" w-[500px] h-8 ">날짜 : {result.date}</span>
                   <span className=" w-[500px] h-8 ">날씨 : {result.weather}</span>
                </div>
                <div className="border-b-[1px] border-black pl-2 h-10 flex items-center">
                <span className=" w-[940px] h-8 pt-1" >제목 : {result.title}</span>
                </div>
                <div className="flex notes w-[998px] h-[400px]  ">
                내용 : {result.content}
                </div>
                </div>
                <div className=" absolute top-[510px]">
                <Link href={`/edit/${result._id}`}>
                <button className="border border-black p-1 mt-2 ml-1 rounded-md">일기 수정</button>
                </Link>

                <Link href='/'>
                <button className="border border-black p-1 mt-2 ml-1 rounded-md">뒤로 가기</button>
                </Link>

                <Delete result={result}/>
                
                </div>
        </div>
    )
}