import React, { useState } from 'react'

const SignUpPage = () => {
  const [flag,setFlag] = useState(false);
 const [month,setMonth] = useState(0);
  const [days,setDays] = useState(()=>{
    return Array.from({ length: 30 }, (_, index) => index + 1)
  });



//check year is leap year or not
function checkLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}



  //function find days
  function findDays(month,year){
    setMonth(month)
    //check february
    if(month===2){
        if(year && checkLeapYear(year)){
            setDays(Array.from({ length: 29 }, (_, index) => index + 1))
        }
        else{
            setDays(Array.from({ length: 28 }, (_, index) => index + 1))
        }
    }
    else if(month===8){
        setDays(Array.from({ length: 31 }, (_, index) => index + 1))
    }
    else{
        if(month%2==0) setDays(Array.from({ length: 30 }, (_, index) => index + 1));
        else setDays(Array.from({ length: 31 }, (_, index) => index + 1));
    }
  }


  return (
    <div className='sign-up'>
     <div className='img'><img src="/images/twitter-logo-4 1.png" alt="" /></div>
     <h1>Create an account</h1>
     <div className='input-field'>
       <input type="text" placeholder='Name' />
       <input type="text" placeholder={flag?"Email":"Phone number"} />
       <p onClick={()=>{setFlag(!flag)}}>{flag?"use phone number":"use email"}</p>
     </div>
     <div className='date-of-birth'>
      <h2>Date of birth</h2>
      <p>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
      <div className='calender'>
        <select id="month" onChange={(e)=>{findDays(e.target.value)}} name="month">
          <option>Month</option>
               {months.map((item,index)=>(
                <option key={index} value={index+1}>{item}</option>
               ))}
         </select>

         <select >
          <option>Day</option>
            {
             days.map((item,index)=>(
                <option key={index} value={item}>{item}</option>
             ))
            }
         </select>

         <select onChange={(e)=>{findDays(month,e.target.value)}}>
          <option>Year</option>
            {years.map((item,index)=>(
                <option key={index} value={item}>{item}</option>
            ))}
            
         </select>
      </div>
      <button>Next</button>
     </div>
    </div>
  )
}

export default SignUpPage;

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: (currentYear-1849) }, (_, index) => index + 1850)
