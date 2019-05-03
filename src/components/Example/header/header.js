import React from "react"

// Function Component
const Header = ({name}) => {
    return (
        <div>
            { name } 
        </div>
    )
}

// default props
Header.defaultProps ={
    name: '이건 Header 컴포넌트 입니다'
}

export default Header