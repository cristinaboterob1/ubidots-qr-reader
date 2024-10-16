import React, { useRef, useEffect, useState } from 'react';
import QrScanner from 'qr-scanner'; // Import the QR scanner library

function App() {
  const videoRef = useRef(null);  // Reference for the video element
  const [qrCodeData, setQrCodeData] = useState(null);  // State to store scanned data

  useEffect(() => {
    const videoElem = videoRef.current;

    // Initialize the QR scanner with the video element and worker path
    const qrScanner = new QrScanner(videoElem, (result) => {
      setQrCodeData(result);  // Update the state with the scanned result
      window.open(result, '_blank');  // Automatically open the QR code in a new tab
    });

    qrScanner.start();  // Start the scanner when the component mounts

    return () => {
      qrScanner.stop();  // Stop the scanner when the component unmounts
    };
  }, []);

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <video ref={videoRef} style={{ width: '300px', height: '300px' }}></video>  {/* Video element to show camera feed */}
    </div>
  );
}

export default App;

