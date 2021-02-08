import React from 'react'
import PropTypes from "prop-types";


function Profile({children,data:{fullName,bio,profession},alertName }) {
const objectStyle ={display:'flex', justifyContent:'center', textAlign:'left', padding:'10px',marginTop:'50px'}
const textStyle={padding:'0',margin:'0'}    
return (
        <div style={objectStyle}>
            <div style={{ height:'200px', display:'flex', justifyContent:'space-between',flexDirection:'column', alignItems:'center',marginTop:'12px'}}>
                 <div >   {children}    </div>
                 <button onClick={alertName} style={{width:'100px',color:'blue',backgroundColor:'yellow'}}>click </button>
            </div>

            <div style={{border:'3px double red', borderRadius:'5px', padding:'7px', height:'280px', width:'50%' ,paddingTop:'0'}}>
                 <h1> {fullName} </h1>
                 <h2 style={textStyle}> Bio:</h2>
                 <p style={textStyle}> {bio}</p>
                 <h2 style={textStyle}>Profession:</h2>
                 <p style={textStyle}> {profession}</p>            
            </div>
        </div>
    )
}
Profile.propTypes = {
    data: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
    }),
  
    alertName: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
  };

Profile.defaultProps = {
   fullName:'Inconnu',
   bio:'bio',
   profession:'profession',
};
  
 

export default Profile
