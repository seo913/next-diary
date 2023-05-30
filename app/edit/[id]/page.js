// 'use client'
import { connectDB } from "@/util/database";
import { ObjectId } from 'mongodb';

// import { useState } from "react"


export default async function edit(props){

    const db = (await connectDB).db('diary');
    let result = await db.collection('list').findOne({_id : new ObjectId(props.params.id)})

    // const [titles,setTitle] = useState('');
    // const [dates,setDate] = useState('');
    // const [weathers,setWeather]=useState('');
    // const [contents,setContent]=useState('');

    // const titleChange = (event) => {
    //     setTitle(event.target.value);
    //   };
    //   const contentChange = (event) => {
    //     setContent(event.target.value);
    //   };
    //   const weatherChange = (event) => {
    //     setWeather(event.target.value);
    //   };
    //   const dateChange = (event) => {
    //     setDate(event.target.value);
    //   };


    // const formBtn = (event)=>{
    //     if(dates === ''){
    //         event.preventDefault();
    //         alert("날짜를 입력해주세요!");  
    //     }else if(weathers === ''){
    //         event.preventDefault();
    //         alert("날씨를 입력해주세요!");  
    //     }else if(titles === ''){
    //         event.preventDefault();
    //         alert("제목을 입력해주세요!");  
    //     }else if(contents === '' || contents.length > 1000){
    //         event.preventDefault();
    //         alert(`내용을 확인해주세요!
    //             (글자수가 1000자를 초과하면 안됩니다.)
    //             `);  
    //     }    
    
    // }
    return(
        <div className="min-h-screen flex justify-center items-start mt-14 relative">
            <div className="flex items-start justify-center absolute top-[-35px] font-semibold text-lg ">일기</div>

            <form action='/api/post/update' method="POST" >
                <div className="w-[1000px] h-[500px] border border-black mt-2">
                <div className=" border-b-[1px] border-black h-10 flex items-center pl-2 ">
                   <span>날짜 :  <input type="text" className=" w-[500px] h-8 focus:outline-none" 
                   name="date" defaultValue={result.date}/> </span>
                   <span>날씨 :  <input type="text" className="w-[400px] h-8 focus:outline-none" 
                   name="weather" defaultValue={result.weather}/> </span>
                   </div>
                <div className="border-b-[1px] border-black pl-2 h-10 flex items-center">
                <span >제목 : <input type="text" className=" w-[940px] h-8 focus:outline-none" 
                name="title" defaultValue={result.title}/></span>
                </div>
                <div className="pl-2 flex items-center">
                <span >내용 : </span>
                <textarea className="notes w-[950px] h-[400px] focus:outline-none resize-none" 
                name="content" defaultValue={result.content}/>
                </div>
                <input type="text" className=" w-[940px] h-8 focus:outline-none hidden" 
                name="_id" defaultValue={result._id}/>
                </div>
                <div className="text-right">
                <button className="border border-black p-1 mt-2 rounded-md" type="submit">일기 수정</button>
                </div>
            </form>
        </div>
    )
}