import React from "react";
import { css } from "glamor";
import { v4 as uuid } from "uuid";
import Collapsible from "./Collapsible";
import CollapseJoJo from "./CollapseJoJo";

import CollapseOnePunchMan from "./CollapseOnePunchMan";


console.log(uuid);


class Gallery extends React.Component {
  render() {
    return (
      <div className="stars">
  
        <div {...css(styles.gallery_greeting)}>
          <p>
            <h1>Zach's Gallery</h1>
            Welcome to the Gallery!
            <br></br>This is an original gallery designed to showcase
            Zachariah's hand drawn anime! <br></br>
            This gallery is designed to showcase each drawing in their own
            'frame'. Click each logo to load the images & comments!
          </p>
          
        </div>
        <div {...css(styles.gallery_greeting)}>
          <Collapsible />
        </div>
        <br></br>
        <div {...css(styles.gallery_greeting)}>
          <CollapseJoJo />
        </div>
        <br></br>
        <div {...css(styles.gallery_greeting)}>
          <CollapseOnePunchMan />
        </div>    
      </div>
    );
  }
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
   
    paddingRight: 250,
    textAlign: "center",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, .2)",
    height: "100vh",
    color: "white",
  },

  h1: {
    textAlign: "center",
    fontSize: "25px",
    color: "white",
  },
  breakLine: {
          
    outline: 'none',
    border: 'none',
    borderBottom: '2px solid white',
    height: '44px',
    fontSize: '18px',
  
},
  title: {
    textAlign: "center",
  },
  gallery_greeting: {
    boxShadow: "2px 2px 5px rgba(0, 0, 0, .2)",
    marginTop: 25,
    backgroundColor: "#212529",
    border: "1px solid white",
    textAlign: "center",
    color: "white",
  
   marginBottom: 10,
  },
  
};

export default Gallery;