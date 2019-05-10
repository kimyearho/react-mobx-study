import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "mobx-react";

import Socket from "./components/Commons/Socket"
import RootStore from "./store/root"

// Mobx에서 프로젝트에 스토어를 적용 할 때는, Redux 처럼 Provider 라는 컴포넌트를 사용함.
// 프로젝트의 엔트리파일인 index.js 파일에서 아래와 같이 Provider를 추가하고 prop으로 counter를 추가함
ReactDOM.render(
  <Provider app={RootStore} socket={Socket} >
    {/* Provider 에 props 로 넣어줍니다. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
