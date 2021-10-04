import React, { useEffect, useState } from 'react';
import BestCourse from './BestCourse';

const EditorsChoise = () => {

    const [bestCurses,setbest]=useState([]);
    

    useEffect(()=>{
        fetch('./Courses.json').then(res=>res.json()).then(data=>setbest(data.slice(4,9)));
    
},[]);
        
    return (
        <div>
            <h1>Best Choise for You </h1>
               {

                //    Map for best courses 
                   bestCurses.map(course=><BestCourse 
                   key={course._id}
                   course={course}
                   ></BestCourse>)
               }

            
              
        </div>
    );
};

export default EditorsChoise;