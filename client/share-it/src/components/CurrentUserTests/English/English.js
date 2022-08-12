import { useState, useEffect } from 'react';
import LatestTests from '../LatestTests/LatestTests';
import { useContext } from "react";
import { TestsContext } from '../../contexts/testsContext';


const English = () => {


    const { tests} = useContext(TestsContext);
    const [result, setResult] = useState([]);


    useEffect( () => {
 
        setResult(tests.filter(t => t.subject === "english")) ;
     
       }, [])

    return (

        <section >
            <div className="container py-5" >

                <div className="row">

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

export default English;