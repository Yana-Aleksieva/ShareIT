
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
                            : <p>No tests yet</p>
                    }

                </div>
            </div>
        </section>

    );

}

export default Bulgarian;