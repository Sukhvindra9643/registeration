import React from 'react'
import BreadCrumb from '../layout/BreadCrumb'
import MetaData from '../layout/MetaData'

const Center = () => {
  return (
    <>
    <MetaData title={"Center"}/>
    <BreadCrumb title={"Center"}/>
    <div  style={{display:"flex", justifyContent:"center",width: "100%"}}>
       <iframe title = "myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.0587875221868!2d77.06330915872192!3d28.506110099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d197a7b16c2d7%3A0x6c671181acba3b4e!2sSuhani%20General%20Store%20Mullahera%20sec.22!5e0!3m2!1sen!2sin!4v1678337957740!5m2!1sen!2sin"  style={{width: "100%", height: "500px",marginTop:"36px"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">Map</iframe>
    </div>
    </>
  )
}

export default Center