import { getReseau } from "actions/Reseau.action";
import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import React from "react";

// reactstrap components

// core components

function ProfilePageHeader() {
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
    dispatch(getReseau());
  },[]);
  const Reseau = useSelector(state => state.Reseau);
 
  if(Reseau.Reseau){
    console.log(Reseau.Reseau.reseau[0].bg[0].img)
  return (
    <>
      <div
        style={{
          backgroundImage:
          `url(https://iset-server.onrender.com/public/${Reseau.Reseau.reseau[0].bg[0].img})`,
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
      </div>
    </>
  );
  }}

export default ProfilePageHeader;
