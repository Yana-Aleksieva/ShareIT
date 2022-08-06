import { getAll } from '../../services/testsService'
import { useState, useEffect } from 'react';
import LatestTests from './LatestTests/LatestTests.js';

const Mathematics = () => {
  const [tests, setTests] = useState([])

  useEffect(() => {


      getAll()
      .then(result => {
        setTests(result)
      }, [])
    
  

  });


  return (
    <section >
      <div className="container py-5" >

        <div className="row">

           {
            tests.length > 0
           
           ? tests.map(test => <LatestTests key={test._id} test={test}  /> )
           : <p>No tests yet</p>
          } 
         
        </div>
      </div>
    </section>

  );

}

export default Mathematics;