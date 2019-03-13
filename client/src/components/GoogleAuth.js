import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '600824778402-m5ppkpfk4bh4ir4g4jm8nvmnqof6vf18.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div>GoogleAuth</div>
        )
    }
}

export default GoogleAuth;