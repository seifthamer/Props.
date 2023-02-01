import React from 'react'

const Profile = ( {FullName , bio , profesion , children }) => {
    const  handlename = () =>{
        alert (FullName)
      }
  return (
    <div>
        Welcom
        
        <h1> {FullName} </h1>
        <h2> {bio}  </h2>
        <h3> {profesion} </h3>
        {children}
        <button onClick={handlename}> alert me</button>
        
        </div>
  )
}
Profile.defaultProps ={
    FullName:'Anas',
    bio:'club africain',
    profesion:'jouer'
}
export default Profile