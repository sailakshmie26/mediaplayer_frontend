import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistory, deleteVideo } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Videocardnew({displayVideo, setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);    
  const handleShow = async () => {
    const today = new Date;
    const timeStamp = new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today);
    console.log(timeStamp)
    const reqBody = {
      url: displayVideo.youtubeLink,
      caption: displayVideo.caption,
      timestamp: timeStamp
    }
    await addToHistory(reqBody)
    setShow(true);
  }
  const deleteVideoItem = async(id)=>{
  const response = await deleteVideo(displayVideo.id)
    console.log("response of delete==");
    console.log(response)
    if(response.status === 200){
      setDeleteVideoStatus(true)
      console.log("Successfully deleted the video")
    }
    else{
      console.log("Something went wrong")
    }
  }
  const dragStarted = (e,id)=>{
    console.log(`video with ID ${id} started dragging`)
    e.dataTransfer.setData("videoID",id)
  }
  return (
    <>
      <Card style={{ width: '18rem', height:'350px', backgroundColor:'#fffae6'}} draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)}>
      <Card.Img variant="top" src={displayVideo.imageUrl} onClick={handleShow}
      height='250px' width="100%" style={{padding:'5px'}}/>
      <Card.Body>
        <div className='d-flex justify-content-between'>
        <Card.Title>{displayVideo.caption}</Card.Title>
        <Button variant="danger" onClick={deleteVideoItem}><i class="fa-solid fa-trash"></i></Button>
        </div>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{`${displayVideo.caption}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <iframe width="100%" height="480" src={`${displayVideo.youtubeLink}`} 
        title="ZAYN - Dusk Till Dawn (Official Video) ft. Sia" frameborder="0" 
        allow="accelerometer; autoplay;" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>     
      </Modal>
      {/* <ToastContainer /> */}
    
    </>
  )
}

export default Videocardnew
