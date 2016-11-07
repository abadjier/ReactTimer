var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return ( 
      <div>            
        <div>
          <div>
            <Nav /> 
            <p>Main.jsx rendered</p>
            
             {props.children}
          </div>
        </div>       
      </div>               
    );
};

module.exports = Main;

// indicate where we want to children of Main to render (props passed from App.jsx)
