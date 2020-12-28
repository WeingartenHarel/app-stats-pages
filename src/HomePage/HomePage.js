import React, { Component } from "react";
import PropTypes from 'prop-types';
import './HomePage.scss';
import { Animation } from '../animation/animation';
import { ActionPreview } from '../ActionPreivew/ActionPreivew';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBars, faBitcoin } from '@fortawesome/free-solid-svg-icons';
import Particles from 'react-particles-js';


export class HomePage extends React.Component {

  // constructor(props) {
  //   super(props);
  //   // this.myRefStats = React.createRef();

  // }

  state = {
    // active: false,  
    isBoxVisible: true,
    color: '#58beff',
    score: 58,
    text: 'Your Score',
    counter: 0,
    isMenuVisible: true,
    actions: [],
  }

  componentDidMount() {
    console.log('componentDidMount', this.state)
    this.startCounter()
    const actions = this.loadFromStorage()
    this.setState({ actions })
  }

  startCounter = () => {
    //console.log('this.state.counter',this.state.counter)
    var field = 'counter'
    var counter = 0
    setInterval(() => {
      counter++
      this.setState({ counter })
      // console.log('this.state.counter', this.state.counter)
    }, 1600);

  }

  toggleMenu = () => {
    this.setState(prevState => ({ isMenuVisible: !prevState.isMenuVisible }));
    // const field = 'actions';
    this.setState({ actions: [...this.state.actions, 'Menu toggle'] }, this.saveToStorage())

  };

  toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
    this.setState({ actions: [...this.state.actions, 'Animation toggle'] }, this.saveToStorage())
  };

  onStopAnimation = () => {
    this.setState(prevState => ({ isBoxVisible: false }));
    this.setState({ actions: [...this.state.actions, 'Animation stoped'] }, this.saveToStorage())

  };

  onStartAnimation = () => {
    this.setState(prevState => ({ isBoxVisible: true }));
    this.setState({ actions: [...this.state.actions, 'Animation started'] }, this.saveToStorage())

  };



  handleChange = ({ target }) => {
    // change state
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    console.log('value', field, value)
    this.setState({ [field]: value })
  }

  handleChangeAnimation = ({ target }) => {
    // change state
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    console.log('value', field, value)
    this.setState({ [field]: value })

    // update animation
    this.changeAnimationColor(value);
  }

  changeAnimationColor(value) {
    document.documentElement.style.setProperty("--primary", value);
    this.restratAnimation(value);

  }

  restratAnimation(value) {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
    this.setState({ actions: [...this.state.actions, 'Animation toggle'] }, this.saveToStorage())

  }

  saveToStorage(key, val) {
    const keyToSave = 'stats';
    const { actions } = this.state
    console.log('save', actions)

    localStorage.setItem(keyToSave, JSON.stringify(actions))
  }

  loadFromStorage(key) {
    const keyToLoad = 'stats';
    var val = localStorage.getItem(keyToLoad)
    console.log('load', val)

    return JSON.parse(val)
  }

  shapeHover(){
    //document.querySelector("animationStatsContainer").opacity = 1
  }

  render() {
    const { isBoxVisible, score, color, text, counter, isMenuVisible, actions } = this.state;


    return (
      <div className="HomePage">

        <div >
          HomePage Component
        </div>

       {actions && <div className="actionList">
          <h4>Action List</h4>
          <ul className="action-list clean-list">
            {
              actions.map((action, index) => <ActionPreview action={action} key={index} />)
            }
          </ul>
        </div>}

        <nav>
          <button onClick={this.toggleMenu}><FontAwesomeIcon icon={faBars} /></button>
          <ul className={`ulist ${isMenuVisible ? "" : "hideMenu"} `}>
            <li><button onClick={this.onStopAnimation}>Stop Animation</button></li>
            <li><button onClick={this.onStartAnimation}>Start Animation</button></li>
            <li><button onClick={this.toggleBox}>Toggle Animation</button></li>
            {/* <input type="color" id="favcolor" name="favcolor" value="#ff0000" /> */}
            <li>Chose color: <input type="color" name="color" value={color} onChange={this.handleChangeAnimation} /></li>
            <li>Change score: <input type="number" name="score" value={score} onChange={this.handleChange} /></li>
            <li>Change text: <input type="text" name="text" value={text} onChange={this.handleChange} /></li>
          </ul>
        </nav>

        {/* <h4>shape goes here</h4> */}
        <div className="shapeContainer">
          <div className="container">
          <Particles  width={'100%'} height={"400px"}
                params={
                  {
                    "particles": {
                      "number": {
                        "value": 160,
                        "density": {
                          "enable": true,
                          "value_area": 800
                        }
                      },
                      "color": {
                        "value": "#ffffff"
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 0,
                          "color": "#000000"
                        },
                        "polygon": {
                          "nb_sides": 5
                        },
                        "image": {
                          "src": "img/github.svg",
                          "width": 100,
                          "height": 100
                        }
                      },
                      "opacity": {
                        "value": 1,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 1,
                          "opacity_min": 0,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 4,
                          "size_min": 0.3,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 600
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": "bubble"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "repulse"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 250,
                          "size": 0,
                          "duration": 2,
                          "opacity": 0,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 400,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  }


                }
              />
          <div className="wrapper" >
         
            <p className={`style ${isBoxVisible ? "style" : "stop-animation"}`}>
              <span className={`style ${isBoxVisible ? "style" : "stop-animation"}`}></span>   
            </p>

            <p className={`style ${isBoxVisible ? "style" : "stop-animation"}`}>
              <span  className={`style ${isBoxVisible ? "style" : "stop-animation"}`}>
              </span>
            </p> 
            <div className="notification" >{counter}</div>
          </div>

   
            <div  className="animationStatsContainer">
              <div>
                <span className="statsText">Animation status: </span><span>{isBoxVisible ? "Playing" : "Stoped"}</span>
              </div>
              <div style={{ color: `${color}` }}>
                <span className="statsText">Selected color</span>:{color}
              </div>
              <div>
                <span className="statsText">Selected texts:</span><span>{text}</span>
              </div>
            </div>

            <div className="shapeText">
              <span className="score">{score}</span>
              <span className="text">{text}</span>
            </div>
          </div>
        </div>


        {/* <Animation /> */}
      </div>
    )
  }
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
