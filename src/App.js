import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [jsonInput, setJsonInput] = useState('');
    const [response, setResponse] = useState(null);

    const handleInputChange = (e) => {
        setJsonInput(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const parsedInput = JSON.parse(jsonInput);
            const result = await axios.post('https://bajaj-1-t60j.onrender.com', parsedInput);  // Backend URL
            setResponse(result.data);
        } catch (error) {
            alert('Invalid JSON or Error in API call');
        }
    };

    return (
        <div>
            <h1>BFHL Challenge</h1>
            <textarea 
                value={jsonInput} 
                onChange={handleInputChange} 
                placeholder='Enter JSON here'
                rows="10"
                cols="50"
            />
            <button onClick={handleSubmit}>Submit</button>
            
            {response && (
                <div>
                    <h3>Response:</h3>
                    <p>Numbers: {JSON.stringify(response.numbers)}</p>
                    <p>Alphabets: {JSON.stringify(response.alphabets)}</p>
                    <p>Highest Lowercase Alphabet: {JSON.stringify(response.highest_lowercase_alphabet)}</p>
                </div>
            )}
        </div>
    );
}

export default App;
