<?php
    $data = [
        "notification" => [
            "title"  => "TEST-PHP 🎁",
            "body" => "Soy una notificacion enviada por php",
            "image" => "https://th.bing.com/th/id/OIP._Gcc0mpOVL1ck_f0QqKeOAHaFj?pid=ImgDet&rs=1"
        ],
        // token fcm de aplicacion
        "registration_ids" => ["fAxQm7ErTSyJVMRVd-AuqR:APA91bF6sYNT735ASg9HR8JvLYbTZ_hE2Yu8ZCDLGUeuZq90W7xjQqq93Xsewib4tg5vG4nRRe-IbvShq566uH41YskQ_O5bjsE2btsi65fXIQWxZYltJJCsytExPJQPmGpxw_N237IM"]
    ];

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_POST, 1);
    $headers = array();
    $headers[] = 'Content-Type: application/json';
    // Clave del servidor token de firebase
    $headers[] = 'Authorization: key=AAAABoH0kAI:APA91bFSYMdWvPteDQeRAk5WUSgN1me-wvDhgliPP6J9y7BrGHVtQnEJKz6wyiQwPkCPt6xmcQfjALBsV7MLvayYZgV6x42OKOcTC1ig8UZA3An5IL7oekYCKVRVFsci66BrChBRj_0z';
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    $result = curl_exec($ch);
    curl_close ($ch);
    echo "Solicitud enviada";
?>

