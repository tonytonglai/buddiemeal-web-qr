import React from 'react';
import QRScanner from './QRScanner';

//declare something here to pass into QRScanner as a prop, so 
//other components can access the data

const App = () => {
    return (
    <div>
        <h1 className="" style={{padding: '20px', paddingTop:'40px', textAlign:'center', boxShadow:"0px 10px 0px 0px black blur"}}>BuddieMeal QR Code Scanner</h1>
        <QRScanner />
    </div>
        );
}

export default App;