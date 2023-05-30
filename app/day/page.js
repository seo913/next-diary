 'use client'
// import { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // css import
// // import './react-calendar.css'
// export default function Day(){
//     const [value, onChange] = useState(new Date());

//     const handleDateClick = (date) => {
//         console.log(date); // 예시로 콘솔에 선택된 날짜를 출력하도록 설정했습니다.
//         // 화면에 선택된 날짜를 보여주는 로직을 추가하면 됩니다.
//       };
    
//     return(
//         <div>
//       <Calendar onChange={onChange} value={value} onClickDay={handleDateClick}  />
      
//         </div>
//     )
// }
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Day() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Calendar onChange={handleDateClick} value={selectedDate} />
      {selectedDate && <p>선택된 날짜: {selectedDate.toDateString()}</p>}
    </div>
  );
}