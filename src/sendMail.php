<?php
try{
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if( isset($_POST['name']) && isset($_POST['from']) &&  isset($_POST['subject']) &&  isset($_POST['message'])){
            if( !empty($_POST['name']) && !empty($_POST['from']) && !empty($_POST['subject']) &&  !empty($_POST['message'])){
                extract($_POST_POST);
                $to = "joshuaayomikun@gmail.com";
                $subject = "HTML email";
                $body = file_get_contents("MessageTemplate.html");
                $body = str_replace("{message}", $message, $body);
                $body = str_replace("{title}", $subject, $body);
                $body = str_replace("{subject}", $subject, $body);
                $body = str_replace("{from}", $from, $body);
                $body = str_replace("{name}", $name, $body);

                // Always set content-type when sending HTML email
                $headers = "MIME-Version: 1.0" . "\r\n";
                $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

                // More headers
                $headers .= "From: joshuaayomikun@gmail.com" . "\r\n";
                $headers .= 'Cc: anthonyoluitan@gmail.com' . "\r\n";

                if(mail($to,$subject,$body,$headers)){
                    echo "Mail sent";
                }else{
                    echo "mail not sent";
                }
            }else{
                echo "Incomplete data sent";
            }
        }else{
            echo "No header";
        }
    }else{
        print_r($_SERVER);
        echo "No headers";
    }
}
catch (Exception $ex){
    echo 'Message: ' .$e->getMessage();
}
?>

