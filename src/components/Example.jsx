import React , {useEffect, useState}  from 'react';
const Example = (props) => {
    // declare useState and give it initial value "state"
    const [people, setPeople] = useState([]);
    
    // fetch people from API inside or via useEffect
    useEffect(() => {
        fetch('https://swapi.dev/api/people') // fetch people from API
            .then(response => response.json()) //convert json obj
            .then(response => {
                setPeople(response.results)
                console.log(response.results)
            })// resolve response and setPeople as response.results
    }, []); // empty [] to avoid infinite loop , this second argument tell useEffect when to run 
 
    return (
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>
                    <h1>{person.name}</h1>
                    <h1>{person.hair_color}</h1>
                    </div>)
            })}
        </div>
    );
}
export default Example;

