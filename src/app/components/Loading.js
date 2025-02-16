import {Circle} from "better-react-spinkit";

function Loading() {
  return (
    <center style={{display: "grid", placeItems: 'center', height : '100vh' }}>
      <div>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="Whatsapp Logo"
          style={{ marginBottom:10 }}
          height={200}
          />
          <Circle color='#3CBC28' size ={60} />
      </div>
    </center>
    
  )
}

export default Loading
