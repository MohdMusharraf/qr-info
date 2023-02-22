import './App.css';
import React, {useState} from 'react';
import './App.js'

function QRimage (){
    const [qrcode, setQrcode] = useState();

  const fetchQR = async () =>{
   const res = await fetch("https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg");
   const data = await res.text();
   setQrcode(data); 
   };

 React.useEffect(() => {
   fetchQR();
 }, []);

 return(
    <div dangerouslySetInnerHTML={{__html: qrcode}}></div>
 );

}

export default QRimage;
