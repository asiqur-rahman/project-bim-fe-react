import React, { useState,useEffect } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

function CustomToast({toast}) {
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    if(toast.length>0){
      setMessages(toast)
      setTimeout( () => setMessages([]), 2500)
    }
    
  },[toast])

  return (
    
    <div>
      <div aria-live="polite" aria-atomic="true">
        <div style={{ position: "fixed", top: "2%", right: "1%", zIndex: 9999 }}>
            {messages.map((data,i)=>{
                return(
                    <>
                        {data.hdr && data.msg && 
                            <Toast key={i} style={{minWidth:"250px"}}>
                                <ToastHeader fade="true" icon="danger" aria-live="assertive" aria-atomic="true">
                                    <strong className="me-auto">{data.hdr}</strong>
                                    {/* <small className="text-muted">2 seconds ago</small> */}
                                </ToastHeader>
                                <ToastBody>{data.msg}</ToastBody>
                            </Toast>
                        }
                    </>
                )
            })}
        </div>
      </div>
    </div>
  );
}

export default CustomToast;