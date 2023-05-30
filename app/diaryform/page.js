'use client'
import { useState } from "react"

export default function DiaryForm(){
    const [titles,setTitle] = useState('');
    const [dates,setDate] = useState('');
    const [weathers,setWeather]=useState('');
    const [contents,setContent]=useState('');

    const titleChange = (event) => {
        setTitle(event.target.value);
      };
      const contentChange = (event) => {
        setContent(event.target.value);
      };
      const weatherChange = (event) => {
        setWeather(event.target.value);
      };
      const dateChange = (event) => {
        setDate(event.target.value);
      };



    const formBtn = (event)=>{
        if(dates === ''){
            event.preventDefault();
            alert("날짜를 입력해주세요!");  
        }else if(weathers === ''){
            event.preventDefault();
            alert("날씨를 입력해주세요!");  
        }else if(titles === ''){
            event.preventDefault();
            alert("제목을 입력해주세요!");  
        }else if(contents === '' || contents.length > 1000){
            event.preventDefault();
            alert(`내용을 확인해주세요!
                (글자수가 1000자를 초과하면 안됩니다.)
                `);  
        }    
    
    }
    

    return(
        <div className="min-h-screen flex justify-center items-start mt-14 relative">
            <div className="flex items-start justify-center absolute top-[-35px] font-semibold text-lg ">일기</div>
            <form action='./api/post/new' method="POST" >
                <div className="w-[1000px] h-[500px] border border-black mt-2">
                <div className=" border-b-[1px] border-black h-10 flex items-center pl-2 ">
                   <span>날짜 :  <input type="text" className=" w-[500px] h-8 focus:outline-none" 
                   name="date"  onChange={dateChange}/> </span>
                   <span>날씨 :  <input type="text" className="w-[400px] h-8 focus:outline-none" 
                   name="weather" onChange={weatherChange}/> </span>
                   </div>
                <div className="border-b-[1px] border-black pl-2 h-10 flex items-center">
                <span >제목 : <input type="text" className=" w-[940px] h-8 focus:outline-none" 
                name="title"  onChange={titleChange} /></span>
                </div>
                <div className="pl-2 flex items-center">
                <span >내용 : </span>
                <textarea className="notes w-[950px] h-[400px] focus:outline-none resize-none" 
                name="content"  onChange={contentChange}/>
                </div>
                </div>
                <div className="text-right">
                <button onClick={formBtn} className="border border-black p-1 mt-2 rounded-md" type="submit">일기 작성</button>
                </div>
            </form>
        </div>
    )
}