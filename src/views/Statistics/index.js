import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,

  Col
} from "reactstrap";
import { getReseau } from "actions";
import  { useEffect, useState } from "react";
import FileDownload from "js-file-download";
import { useDispatch, useSelector } from 'react-redux';
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/Statistics.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { getFile } from "actions/File.action";
import { getStatistics } from "actions";
import { getAllStatisticsFiles } from "actions";
import { getStatisticsFile } from "actions";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getStatistics());
    dispatch(getAllStatisticsFiles())
    
  },[]);
  const Statistics = useSelector(state => state.Statistics);
  const Files = useSelector(state => state.File_Statistics);

  const etat = useSelector(state => state.Reseau);  
 if(etat.etat){
  FileDownload(etat,"fichier1.pdf")
  console.log("here you are",etat)
 }
 const download =(name)=>{
  console.log(name)
 const form  = new FormData();
 form.append('name',name);
 console.log(form.get('name'))
 dispatch(getStatisticsFile(form));
}

  if(Statistics.Statistics && Files.Files){

  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding "
                src={require("assets/img/faces/reseau.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
               {Statistics.Statistics?Statistics.Statistics.statistics[0].name:null}<br />
              </h4>
              <h6 className="description">Introduction</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

              </p>
              <br />
              
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    TD/TP
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Cours
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                  {Files.Files.files?Files.Files.files.map(pack=>
                              
                              <>          
                              <li>
                                <Row>
                                  <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                                    <img
                                      alt="..."
                                      className="img-circle img-no-padding img-responsive"
                                      src={require("assets/img/faces/PDF1.png")}
                                    />
                                  </Col>
                                  <Col className="ml-auto mr-auto" lg="7" md="7" xs="4">
                                    <h6>
                                      {pack.filename} <br />
                                      <small>Proposer par abdallah</small>
                                    </h6>
                                  </Col>
                                  <Col lg="7" md="1" xs="4">
                                   
                                   <Button onClick={()=>download(pack.filename)}>Download</Button>
                                 </Col>
                                </Row>
                              </li>
                              <hr /></>):null}
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Comming Soon !</h3>
             
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}
}
export default ProfilePage;
