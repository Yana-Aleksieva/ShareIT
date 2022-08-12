
import { useState, useEffect } from 'react';
import LatestTests from '../LatestTests/LatestTests';
import { useContext } from "react";
import '../Mathematics/math.css';
import { TestsContext } from '../../contexts/testsContext';


const Bulgarian = () => {

    const { tests } = useContext(TestsContext);
    const [bulgarianTests, setTests] = useState([]);

    useEffect(() => {

        setTests(tests.filter(item => item.subject === 'bulgarian'))
    }, []);





    return (
        <section >
            <div className="container py-5" >

                <div className="row">

                    {
                       bulgarianTests.length > 0

                            ? bulgarianTests.map(test => <LatestTests key={test._id} test={test} />)
                            : <div className='card bg-dark mt-5'>
                            <h2 className='text-center text-light'>No tests yet</h2>
                            </div>
                    }

                </div>
            </div>
        </section>

    );

}

export default Bulgarian;