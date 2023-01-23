import React, {Component} from 'react'
import {AsyncStorage} from 'react-native'
import { PushNotification } from 'react-native-push-notification'
import firebase from 'fire'

export const test = () => {

const sendNotification=  ()=> {
    const FIREBASE_API_KEY = "AAAABoH0kAI:APA91bFSYMdWvPteDQeRAk5WUSgN1me-wvDhgliPP6J9y7BrGHVtQnEJKz6wyiQwPkCPt6xmcQfjALBsV7MLvayYZgV6x42OKOcTC1ig8UZA3An5IL7oekYCKVRVFsci66BrChBRj_0z";
    const message = {
        rergistration_ids: ["cKyi_YhVQhaNQQvPSKoRQi:APA91bGs21XnxkENsWSf0z81ASGeJ9bv8fih6AVMn56snEJJOI7WKx53za5UtbgzEen45OEijD_DjKchTmRtYG-3nIJS1tZfPIQvRgrZvoRMkjSm17Mv-11i7B81El3GSdN97BfW0H1Q"],
        notification:{
            title:"Developers",
            body: "Enviado de app envios",
            image: "https://th.bing.com/th/id/OIP._Gcc0mpOVL1ck_f0QqKeOAHaFj?pid=ImgDet&rs=1",
            "vibrate":1,
        }
    }
    let headers = new Headers ({
        "ContentType": "application/json",
        "Authorization": "key=" + FIREBASE_API_KEY
    });
    let response =  fetch("'https://fcm.googleapis.com/fcm/send/", {method:"POST", headers, body:JSON.stringify (message) })
    response =  response.json();
    console.log(response);
}

  return (
    <div>test</div>
  )
}

//npm i react-native-push-notification
// import React, { useState } from 'react'
// import { Button, TextInput, View } from 'react-native'




// export const App = () => {

//   const enviardatos = () => {
//     fetch('https://fcm.googleapis.com/fcm/send/',{ 
//       method:'POST',
//       headers:{'Authorization': 'key=AAAABoH0kAI:APA91bFSYMdWvPteDQeRAk5WUSgN1me-wvDhgliPP6J9y7BrGHVtQnEJKz6wyiQwPkCPt6xmcQfjALBsV7MLvayYZgV6x42OKOcTC1ig8UZA3An5IL7oekYCKVRVFsci66BrChBRj_0z'},
//       headers:{'ContentType':'application/json'},
//       body: JSON.stringify
//     ({
//         "registration_ids" :["cKyi_YhVQhaNQQvPSKoRQi:APA91bGs21XnxkENsWSf0z81ASGeJ9bv8fih6AVMn56snEJJOI7WKx53za5UtbgzEen45OEijD_DjKchTmRtYG-3nIJS1tZfPIQvRgrZvoRMkjSm17Mv-11i7B81El3GSdN97BfW0H1Q"],
//           "notification":{
//             "title": "TEST-AppEnviar 🐱‍🏍",
//             "body": "Soy una notificación enviada por AppEnviar",
//             "image": "https://th.bing.com/th/id/OIP._Gcc0mpOVL1ck_f0QqKeOAHaFj?pid=ImgDet&rs=1"
//           }
//     })
//   })}

//   return (
//     <View style={{flex:1, justifyContent:'center'}}>
//             <Button onPress={enviardatos}  title='enviar mensaje'/>
//     </View>
//   )
// }
// export default App;

// //https://jasonwatmore.com/post/2021/09/27/react-fetch-logout-on-401-unauthorized-or-403-forbidden-http-response
// //https://reactnative.dev/docs/network
// //https://rnfirebase.io/messaging/usage