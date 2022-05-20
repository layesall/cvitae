<?php
/*
    Name        : Sendmail.php
    Description : help for sending mail
    AuthorName  : Layesall
    Version     : 1.0.0
    Date        : 05-05-2022
*/

function sendmail() {

    /**
     * Header accessibility
     */
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Method: GET, POST');
    
    $mailData = json_decode( file_get_contents('php://input') );

    $isSend = [];

    if( isset($mailData) && !empty($mailData) || $mailData !== null  ){

        ini_set('SMTP', 'send.one.com');
        ini_set('smtp_port', 465);
        $to         = "contact@layesall.com";
        $from_name  = strip_tags($mailData->name);
        $from_email = strip_tags($mailData->email);
        $subject    = strip_tags($mailData->subject);
        $message    = wordwrap(strip_tags($mailData->body), 70, "\r\n");
        $headers    =   "From           : $from_name | $from_email \r\n" .
                        "Reply-To       : $from_email \r\n" .
                        "X-Mailer       : PHP/" . phpversion() . "\r\n" . 
                        "Content-Type   : text/html; application/json; charset=UTF-8";

        try{
            if( mail($to, $subject, $message, $headers) ){ 

                http_response_code(200);
                $mailData->isSend  = true;
            }

        }catch(\Throwable $err){
            http_response_code(404);
            $mailData->isSend  = false;
            echo $err;

        }
    }

    array_push($isSend, ["isSend" => true]);

    json_encode( $isSend );

}

sendmail();
