import React from 'react';
import { Routes, Route} from "react-router-dom";

import Homepage from './pages/Homepage';
import Connect from './pages/Connect';


function App() {
  // const [userText, setUserText] = useState('');


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log('Form data:', e.target);


  //   emailjs.sendForm('service_olg9dp8', 'template_n31gav9', e.target, 'yPbNv-lKRO62iIUkS')
  //   .then((result) => {
  //     console.log(result.text);
  //   }, (error) => {
  //     console.error(error.text);
  //   });
  // };

  return (


    <Routes>
      <Route path='/' element={<Homepage /> } />
      <Route path='connect' element={ <Connect />}/>
    </Routes>
    // <div >
    //   {/* <Homepage /> */}
    //   <Connect />
    // </div>
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="userText">Enter your text:</label>
    //   <textarea id="userText" name="userText" value={userText} onChange={(e) => setUserText(e.target.value)} />
    //   <button type="submit">Send Email</button>
    // </form>
  );
}

export default App;