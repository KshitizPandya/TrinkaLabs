// function updateOutput() {
//     const inputElement = document.getElementById('input');
//     const outputElement = document.getElementById('output');
//     outputElement.innerText = inputElement.value;
//   }
  
  // const languageSelect = document.getElementById('language-select');
  // languageSelect.addEventListener('change', () => {
  //   const outputElement = document.getElementById('output');
  //   outputElement.lang = languageSelect.value;
  // });
  

// function updateOutput() {
//     const inputElement = document.getElementById('input');
//     const outputElement = document.getElementById('output');
//     const apiUrl = 'http://93.115.26.69:9456/paraphrase';

//     // Build the request data
//     const requestData = {
//         sentence_info_list: [
//             {
//                 sentence: inputElement.value,
//                 lang_type: 'US',
//                 file_id: null
//             }
//         ]
//     };

//     // Send the API request
//     fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Display the API response in the output pane
//         outputElement.innerText = data.result[0].output_sentence_list[0];
//     })
//     .catch(error => {
//         console.error('API request error:', error);
//     });
// }


// function updateOutput() {
//     const inputElement = document.getElementById('input');
//     const outputElement = document.getElementById('output');
//     // const languageSelect = document.getElementById('language-select');
    
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         sentence_info_list: [
//           {
//             sentence: inputElement.value,
//             lang_type: "US",
//             file_id: null
//           }
//         ]
//       })
//     };
    
//     fetch('http://93.115.26.69:9456/paraphrase', requestOptions)
//       .then(response => response.json())
//       .then(data => {
//         outputElement.innerText = data.result[0].output_sentence_list[0];
//       })
//       .catch(error => console.log(error));
//   }
  
//   const languageSelect = document.getElementById('language-select');
//   languageSelect.addEventListener('change', () => {
//     const outputElement = document.getElementById('output');
//     outputElement.lang = languageSelect.value;
//   });


function updateOutput() {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');
  
    const data = {
      "sentence_info_list": [
        {"sentence": inputElement.value, "lang_type": "US", "file_id": null}
      ]
    }
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      mode: 'cors' // Add this line
    };

  
    fetch('http://93.115.26.69:9456/paraphrase', requestOptions)
      .then(response => response.json())
      .then(data => {
        const output = data.result[0].output_sentence_list[0];
        outputElement.innerText = output;
      })
      .catch(error => console.log('error', error));
}
  