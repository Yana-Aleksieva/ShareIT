import { useState, useEffect } from 'react';
import LatestTests from '../LatestTests/LatestTests';
import { useContext } from "react";
import { TestsContext } from '../../contexts/testsContext';


const English = () => {


    const { tests } = useContext(TestsContext);
    const [result, setResult] = useState([]);


    useEffect(() => {

        setResult(tests.filter(t => t.subject === "english"));

    }, [])

    return (

        <section >
            <div className="container py-5" >

                <div className="row">

                    {
                        result.length > 0

                            ? result.map(test => <LatestTests key={test._id} test={test} />)
                            : <div className='card bg-dark mt-5'>
                            <h2 className='text-center text-light'>No tests yet</h2>
                            </div>
                    }

                </div>
            </div>
        </section>

    );
}

export default English;