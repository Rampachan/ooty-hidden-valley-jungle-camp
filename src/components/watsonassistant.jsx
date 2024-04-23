import axios from 'axios';

const watsonassistant = {
    sendMessage: async (message) => {
        const response = await axios.post(
            'https://api.au-syd.assistant.watson.cloud.ibm.com/instances/cfff9158-cc52-44ef-a884-08bcc99cf5c5',
            {
                input: {
                    text: message
                }
            },
            {
                headers: {
                    'Authorization': 'QSFUtOe9MW_h7odyshlMcffJz7rexrX5GoDGFznd31Py'
                }
            }
        );
        return response.data;
    }
};

export default watsonassistant;
