import pic from './photo.jpg'
import './App.css';
import Profile  from './profile/Profile';
function App() {

  

  return (
    <div className="App">
     <Profile  FullName='Seif Thamer' bio = 'club africain' profesion = 'Developper' ><img src = {pic} alt = "Anas " style={{width:'400px',height:'auto'}}></img></Profile>


    </div>
  );
}

export default App;
