
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
// reactstrap components
import { Button, Container } from "reactstrap";
import { Table } from 'react-bootstrap';
import { getPack } from "../../actions";
import { getHeader } from "actions/header.action";



// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });


  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getHeader());
  },[]);
  const header = useSelector(state => state.header);
  
 if(header.header){
  console.log("final" ,header.header.header[0].bg[0].img)
  return (
    <>
     <div
        style={{
         
          backgroundImage: `url(https://iset-server.onrender.com/public/${header.header.header[0].bg[0].img})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
           height: '400px',
            width: '100%'
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      > 
        <div className="filter" />
        <Container>
       
          <div className="motto text-center">
            <h1>{header.header?header.header.header[0].titre:null}</h1>
            <h3>{header.header?header.header.header[0].texte:null}</h3>
            <br />
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline>
              Download
            </Button>
          </div>
        </Container>
      </div>
    </>
  );}
  else {
    return null
  }
}

export default LandingPageHeader;
