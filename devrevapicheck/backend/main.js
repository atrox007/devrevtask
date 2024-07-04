import path from "path";
import express from "express";
import dotenv from "dotenv";
import axios from 'axios'; 

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)


async function apicall(){

    const url = 'https://api.devrev.ai/dev-users.self';
    const token = 'PAT';  // Replace <PAT> with your actual personal access token

    const response = await axios.get(url, {
    headers: {
        'Authorization': token,
    }
    })
    .then(response => {
        console.log("Hello " + response.data.full_name);
    })
    .catch(error => {
        console.error(error);
    });

}

apicall(); 

server.listen(PORT, () => {
	console.log(`Server Running on port ${PORT}`);
});
