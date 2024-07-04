import { client, publicSDK } from "@devrev/typescript-sdk";
import axios from 'axios' ; 

export async function handleEvent(
  event: any,
) {
  // const devrevPAT = event.context.secrets.service_account_token;
  // const APIBase = event.execution_metadata.devrev_endpoint;
  // const devrevSDK = client.setup({
  //   endpoint: APIBase,
  //   token: devrevPAT,
  // })
  // try {
  //   const response = await devrevSDK.worksList({
  //     limit: 1,
  //     type: [publicSDK.WorkType.Ticket]
  //   });
  //   return response;
  // } catch (error) {
  //   console.log(error);
  //   return error;
  // }

  //const axios = require('axios');
  
  const url = 'https://api.devrev.ai/works.get' ;  
  const token = 'PAT' ;     // '<PAT>'; // Replace <PAT> with your actual personal access token
  
  let dat = 'k' ; 

  //  fetch n store issue 
  const response = await axios.get(url, {
  headers: {
    'Authorization': token,
  },
  params: {
    'id': 'ISS-8'
  }
  })
  .then(response => {
    //console.log(response.data);
    dat = response.data ; 
  })
  .catch(error => {
    console.error(error);
  });

  const data = JSON.parse(dat);


  // create a copy 

  const res = await axios.post(
    'https://api.devrev.ai/works.create',
    {
      'type': 'issue',
      'applies_to_part': data.work.applies_to_part.id,
      'owned_by': [
        data.work.owned_by[0].id
      ],
      'title': 'ISS-20',
      'reported_by': [
        data.work.reported_by[0].id
      ],
      "target_close_date": data.work.target_close_date,
    },
    {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    }
  );
}

export const run = async (events: any[]) => {

  console.log("Hello World") ; 

  for (let event of events) {
    await handleEvent(event);
  }
};

export default run;
