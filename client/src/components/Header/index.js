import React from 'react';

const styles = {
    HeaderColor: {
        background: '#909595'
    },
    headerStyle: {
        textAlign: 'left',
        paddingTop: 20
    }
}
function Header(props) {
    return (
        <header style={styles.HeaderColor}>
            <h1 style={styles.headerStyle}>TheL.P.U.</h1>
            {props.children}
        </header>
    )
}

export default Header;