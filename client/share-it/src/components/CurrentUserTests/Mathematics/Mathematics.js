
import { useState, useEffect } from 'react';
import LatestTests from '../LatestTests/LatestTests';
import { useContext } from "react";

import './math.css';
import { TestsContext } from '../../contexts/testsContext.js';


const Mathematics = () => {

  const { tests} = useContext(TestsContext);
  const [result, setResult] = useState([]);



  useEffect( () => {

    
    
   
   setResult(tests.filter(t => t.subject === "mathematics")) ;
  
    
  

  }, [])


  



  return (
    <section >
      <div className="container py-5" >

        <div className="row ">

          {
            result.length > 0

              ? result.map(test => <LatestTests key={test._id} test={test} />)
              : <h5>No tests yet</h5>
          }

        </div>
      </div>
    </section>

  );

}

export default Mathematics;