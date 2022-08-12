import { useState, useEffect } from 'react';
import LatestTests from '../CurrentUserTests/LatestTests/LatestTests';
import { useContext } from "react";
import { TestsContext } from "../contexts/testsContext.js";
import { AuthContext } from '../contexts/authContext.js';
import './MyTests/myTests.css';

const UserTests = () => {
const [userTests, setUserTests] = useState([]);
const {user} = useContext(AuthContext);
const { tests} = useContext(TestsContext);

useEffect( () => {
 
  setUserTests(tests.filter(t => t._ownerId === user._id)) ;

 }, [])


        return (
            <section >
              <div className="container py-5" >
        
                <div className="row">
        
                   {
                    userTests.length > 0
        
                      ? userTests.map(test => <LatestTests key={test._id} test={test} />)
                      : <p>No tests yet</p>
                  }
        
                </div>
              </div>
            </section>
        
          );
   
}

export default UserTests;