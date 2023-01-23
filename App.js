
import React from 'react'
import {View, Button} from 'react-native'
export const test = () => {

  const sendNotification=  ()=> {
       FIREBASE_API_KEY = "AAAABoH0kAI:APA91bFSYMdWvPteDQeRAk5WUSgN1me-wvDhgliPP6J9y7BrGHVtQnEJKz6wyiQwPkCPt6xmcQfjALBsV7MLvayYZgV6x42OKOcTC1ig8UZA3An5IL7oekYCKVRVFsci66BrChBRj_0z";
       message = {
          rergistration_ids: ["cKyi_YhVQhaNQQvPSKoRQi:APA91bGs21XnxkENsWSf0z81ASGeJ9bv8fih6AVMn56snEJJOI7WKx53za5UtbgzEen45OEijD_DjKchTmRtYG-3nIJS1tZfPIQvRgrZvoRMkjSm17Mv-11i7B81El3GSdN97BfW0H1Q"],
          notification:{
              title:"Developers",
              body: "Enviado de app envios",
              image: "https://th.bing.com/th/id/OIP._Gcc0mpOVL1ck_f0QqKeOAHaFj?pid=ImgDet&rs=1",
              "vibrate":1,
          }
      }
       headers = new Headers ({
          "ContentType": "application/json",
          "Authorization": "key=" + FIREBASE_API_KEY
      });
      const response =  fetch("'https://fcm.googleapis.com/fcm/send/", {method:"POST", headers, body:JSON.stringify (message) })
      response =  response.json();
      console.log(response);
  }
  
    return (
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Button title="Enviar notificación" onPress={sendNotification}/>
        </View>
    )
  }


//npm i react-native-push-notification