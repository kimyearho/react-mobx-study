import io from 'socket.io-client';

/**
 * 소켓 클라이언트 클래스
 * 소켓통신 관련된 기능들은 이곳에서 정의한다.
 */
class Socket {

    constructor({ userStore }) {
        this.io = null;
        this.state = userStore
    }

    login = () => {
        const socketServer = 'http://localhost:4001'
        return new Promise((resolve, reject) => {

            console.log('Login Promise !')

            // this.io = io(socketServer);
            // this.io.once('logined', (userData) => {
            //     console.log('logined', userData);
            //     this.state.setUser(userData);
            //     resolve(this.state.user);
            // })
        })
    }
}

export default Socket