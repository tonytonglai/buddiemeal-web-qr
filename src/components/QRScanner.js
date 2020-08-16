import React, { useState } from 'react';
import QRReader from 'react-qr-reader';
import Modal from './Modal';

//string "pee pee" is chosen as placeholder text. can swap this to whatever
const QRScanner = () => {

    const [result, setResult] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [scanBool, setScanBool] = useState(true);

    const ToggleTrue = () => {
        //disabled timeout so that users HAVE to click on the modal to get rid of it. 
        //Looking into whether or not I want to change this.

        // setTimeout(() => {
        //     setModalVisible(false);
        //     setScanBool(true);
        // }, 5000);

        setModalVisible(true);
    }

    const handleScan = data => {
        if (data) {
            setResult(data);
            checkData(result);
        }
        console.log("scanning");  
    }

    const checkData = (data) => {
        //*CHANGE TO DATA YOU WANT*
        if (data === 'pee pee') {
            ToggleTrue();
            setScanBool(false);
        } else {
            setModalVisible(false);
        }
    }

    const handleError = err => {
        console.log(err);
    }

    //define a function that will be passed as a prop into Modal
    //this function will disable the delay scan until the user taps the modal
    //then, it will re-enable the scan by removing delay as a value.

    const whatToRender = () => {
        if (scanBool) {
            return (
                <div>
                    <QRReader 
                    delay={(scanBool? 500: false)}
                    onError={(err) => handleError(err)}
                    onScan={(data) => handleScan(data)}
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '100%',
                        maxWidth: '600px'
                    }}
                    /> 
                </div>
            );
        } else {
            return (
            <div>
                <div
                    style={
                        {
                            backgroundColor:'lightgray',
                            width: '100%',
                            height: 'calc(100vw)',
                            maxHeight: '600px',
                            maxWidth: '600px',
                            justifyContent:'center',
                            margin:'auto',
                            // borderRadius:'100%',
                            textAlign: "center"
                        }
                    }
                    >
                </div>
            </div>
            )
        }
    }
    // const isScan = (scanBool) => {
    //     return scanBool? 500 : false;
    // }
    return (
        <div>
            <div style={{backgroundColor: 'lightgray', padding: '40px 0px', boxShadow: "inset 0px 1px 10px 5px grey"}}>
                {whatToRender()}
            </div>
            <Modal modalVisible={modalVisible} scanBool={scanBool} setScanBool={setScanBool} setModalVisible={setModalVisible}/>
        </div>
    ) 
}

export default QRScanner;