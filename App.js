import React from 'react'
import { Button, View } from 'react-native'



export const App = () => {

  const enviardatos = () => {

    fetch( 'https://fcm.googleapis.com/fcm/send/',requestOption)}

     const requestOption = {
       method:'POST',
       headers:{
         'Authorization': 'key=AAAABoH0kAI:APA91bFSYMdWvPteDQeRAk5WUSgN1me-wvDhgliPP6J9y7BrGHVtQnEJKz6wyiQwPkCPt6xmcQfjALBsV7MLvayYZgV6x42OKOcTC1ig8UZA3An5IL7oekYCKVRVFsci66BrChBRj_0z',
       },
       headers:{
        'ContentType':'application/json',
       },
     body: JSON.stringify(
      {
        "registration_ids" :["cKyi_YhVQhaNQQvPSKoRQi:APA91bGs21XnxkENsWSf0z81ASGeJ9bv8fih6AVMn56snEJJOI7WKx53za5UtbgzEen45OEijD_DjKchTmRtYG-3nIJS1tZfPIQvRgrZvoRMkjSm17Mv-11i7B81El3GSdN97BfW0H1Q"],
            "notification":{
            "title": "TEST-Thunder 🐱‍🏍",
            "body": "Soy una notificacion enviada por thunder",
            "image": "https://th.bing.com/th/id/OIP._Gcc0mpOVL1ck_f0QqKeOAHaFj?pid=ImgDet&rs=1"
        }
    }
       )
 }

  return (
    <View style={{flex:1, justifyContent:'center'}}>
        {/* <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}> */}
            <Button onPress={enviardatos}  title='enviar mensaje'/>
        {/* </View> */}
    </View>
  )
}
export default App;
