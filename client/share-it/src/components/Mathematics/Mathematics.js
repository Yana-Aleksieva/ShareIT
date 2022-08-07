import { getAll } from '../../services/testsService'
import { useState, useEffect } from 'react';
import LatestTests from './LatestTests/LatestTests.js';
import { useContext } from "react";

import './math.css';
import { TestsContext } from '../contexts/testsContext.js';


const Mathematics = () => {

  const {tests, getAllTests } = useContext(TestsContext);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const tests = await getAll()

      
        getAllTests(tests);


      } catch (err) {

      }


    }

    fetchData();
  });



  return (
    <section >
      <div className="container py-5" >

        <div className="row">

           {
            tests.length > 0

              ? tests.map(test => <LatestTests key={test._id} test={test} />)
              : <p>No tests yet</p>
          } 

        </div>
      </div>
    </section>

  );

}

export default Mathematics;