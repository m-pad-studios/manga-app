import React from "react";
import { css } from "glamor";
import "./App.css";

import  Gallery from "./Gallery";


class Home extends React.Component {
 

  render() {
    return (
      <div {...css(styles.screen)} className="stars">
        <hr></hr>
        <div class="row">
          <div class="col-sm-9">
            <div className="avatar-panel">
        
              <br></br>
              <div {...css(styles.gallery_greeting)}>
        
        </div>
              <hr></hr>
              <div class="row">
                <div class="col-2 col-sm-6">
                  <Gallery />
                </div>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, .2)",
    color: "white",
  },

  header: {
    marginLeft: "10px",
    marginTop: "10px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, .2)",
    backgroundColor: "#212529",
    color: "white",
    border: "1px solid #ededed",
    width: "200px",
    height: "30px",
    borderRadius: "10",
  },

  signOut: {
    marginLeft: "10px",
    marginTop: "10px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, .2)",
    backgroundColor: "#212529",
    color: "white",
    border: "1px solid #ededed",
    width: "150px",
    height: "30px",
    borderRadius: "10",
  },

  submit: {
    textAlign: "left",
    marginTop: "10px",
    marginRight: "10px",
    marginLeft: "50px",
  },

  livecommentFeed: {
    marginTop: "10px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, .2)",
    backgroundColor: "#212529",
    color: "white",
    border: "1px solid #ededed",
    width: "200px",
    height: "30px",
    borderRadius: "10",

    marginLeft: "15px",
  },
  breakLine: {
    outline: "none",
    border: "none",
    borderBottom: "2px solid white",
    height: "44px",
    fontSize: "18px",
  },

  naviPanel: {
    marginTop: "25px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, .2)",
    backgroundColor: "#212529",
    color: "white",
    border: "1px solid #ededed",
    width: "200px",
    height: "30px",
    borderRadius: "10px",
    marginLeft: "15px",
  },

  naviPanelBox: {
    marginTop: "10px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, .2)",
    backgroundColor: "#212529",
    color: "white",
    border: "1px solid #ededed",
    width: "200px",
    height: "400px",
    borderRadius: "10px",
    marginLeft: "250px",
  },

  screen: {
    
    height: "100vh"
  },
  image: {
    height: "250px",
    width: "250px",
    borderRadius: "150",
  },
  gallery_greeting: {
    boxShadow: "2px 2px 5px rgba(0, 0, 0, .2)",
    marginTop: 25,
    backgroundColor: "#212529",
    border: "1px solid white",
    textAlign: "center",
    color: "white",
   marginLeft: 25,
   marginBottom: 10,
  },
};

export default Home;