import { getAlgorithme } from "actions/Algorithme.actions";
import  { useEffect} from "react";
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
    dispatch(getAlgorithme());
  },[]);
  const Algorithme = useSelector(state => state.Algorithme);
 
  if(Algorithme.Algorithme){
    
  return (
    <>
      <div
        style={{
          backgroundImage:
          `url(https://iset-server.onrender.com/public/${Algorithme.Algorithme.algorithme[0].bg[0].img})`,
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