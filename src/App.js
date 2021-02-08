import React from 'react';
import Profile from './Profile/Profile'
import image from './images/pic.jpg'

function App() {

const data = {
fullName: "sassi montassar",
bio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus molestias dolores cupiditate consectetur esse earum magnam, voluptatem quas dolorem libero facilis sit,Lorem ",
profession:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus molestias dolores cupiditate consectetur esse earum magnam, voluptatem quas dolorem libero facilis sit",
  };

const alertName= () => alert(data.fullName);


  return (
    <div className="App" >
<Profile data={data} alertName={alertName}>
  
  <img src={image}  alt="ProfilePic"  style={{width:'200px', height:'200px'}} /> 
  </Profile>
  

    </div>
  );
}

export default App;
