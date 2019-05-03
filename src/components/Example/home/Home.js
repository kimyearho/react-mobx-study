import React from "react"

/*
import { NavLink } from "react-router-dom"
import Header from "../header/header"
import Counter from "../Counter/counter"
import Form from "../Form/form"
import Clock from "../Clock/clock"
import EventHandler from "../Event/eventHandler"
import List from "../List/list"
*/

// 컴포넌트 작성 규약은 두가지가 있음.
// Class Componet - lifecycle 및 state, props를 사용가능.
// Function Component - lifecycle 및 state, props를 사용할 수 없음.
// CC or FC 방식의 대해서는 성능차가 존재함.

// Function Component
// const Home = ({ match }) => {
//     return (
//         <div>
//             Home {match.params.param1}
//             <ul>
//                 <li><NavLink to="/">Index</NavLink></li>
//                 <li><NavLink to="/home">Home</NavLink></li>
//                 <li><NavLink to="/about" activeClassName="activeColor">About</NavLink></li>
//             </ul>
            
//             {/* Header 컴포넌트 (default props)  */}
//             <Header />
//             <br/>
//             {/* Counter 컴포넌트  */}
//             <Counter />
//             <br/>
//             <Form />
//             <br/>
//             <Clock name="K. Ken <kstory8715@gmail.com>" />
//             <br/>
//             <EventHandler />
//             <br/>
//             <List />
//         </div>
//     )
// }

import CounterMobx from "../CounterMobx/CounterBobx"

const Home = ({ match }) => {
    return (
        <div>
            <CounterMobx />
        </div>
    )
}

export default Home