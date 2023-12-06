import axios from "axios";
import { useState } from "react";

import "../../../styles/UserProfile/UserContents/Chat.css"

function Chat() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log("sending..");
            const response = await axios.post('http://127.0.0.1:5000/predict', {
                input_data: userInput,
            });

            setChatHistory(prevChatHistory => [
                ...prevChatHistory,
                { question: userInput, answer: response.data.output_data.result}
            ]);
            console.log(response.data.output_data.result);
            setUserInput('');
        } 
        catch (error) {
            console.log('Error processing user input:', error);
        }
    };

    const downloadFile = async (event, fileType) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://127.0.0.1:5000/download_pdf?type=${fileType}`, {
                responseType: 'arraybuffer',
            });
    
            let fileExtension, mimeType;
    
            if (fileType === 'pdf') {
                fileExtension = 'pdf';
                mimeType = 'application/pdf';
            } else if (fileType === 'text') {
                fileExtension = 'txt';
                mimeType = 'text/plain';
            } else {
                console.error('Unsupported file type');
                console.log(fileType);
                return;
            }
    
            // Create a Blob from the file data
            const blob = new Blob([response.data], { type: mimeType });
    
            // Create a download link
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `downloaded_file.${fileExtension}`);
    
            // Append the link to the body and trigger the download
            document.body.appendChild(link);
            link.click();
    
            // Clean up: remove the link and revoke the URL
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error(error);
        }
    };
    

    
    return (
        <>  
            <div className="chat">
                <div className="prevChat">
                    <p>No recent chats yet</p>
                    <button onClick={downloadFile}>Download Pdf</button>
                </div>
                
                <div className="currChat">
                    <div className="chatHistory">
                        {chatHistory.map((entry, index) => (
                            <div key={index} className="singleChat">
                                <div className="question">
                                    <p>{entry.question}</p>
                                </div>
                                <div className="answer">
                                    {/* <p>{entry.answer}</p> */}
                                    <p>{entry.answer.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="chatForm">
                        <input
                            type="text"
                            value={userInput}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            
            
        </>
    );
}

export default Chat;
