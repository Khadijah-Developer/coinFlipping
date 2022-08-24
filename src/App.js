import logo from './logo.svg';
import './App.css';
import Example from './components/Example';

// function App() {
//     function tossCoin() {
//         return Math.random() > 0.5 ? "heads" : "tails";
//     }
  
//     function fiveHeads() {
//       return new Promise( (resolve, reject) => {
//           // your code here!
//           let headsCount = 0;
//           let attempts = 0;
//           while(headsCount < 5) {
//             attempts++;
//             let result = tossCoin();
//             //console.log(`${result} was flipped`);
//             if(result === "heads") {
//                 headsCount++;
//             } else {
//                 headsCount = 0;
//             }

//         }


//         if(headsCount === 5 && attempts < 100) {
//           resolve(`Success! It took ${attempts} tries to flip 5 heads in a row`);
//         } else {
//           reject(`Did not complete in less than 100 attempts! It took ${attempts} tries to flip 5 `)
//         }
//       });
//   }
//   fiveHeads()
//       .then( res => console.log(res) )
//       .catch( err => console.log(err) );
//   console.log( "When does this run now?" );
//   return (
//     <div className="App">
//    <h1> coin flipping</h1>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Example/>
    </div>
  )
}
export default App;
