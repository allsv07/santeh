<?php

$name = htmlspecialchars($_POST['name-callback']);
$phone = htmlspecialchars($_POST['phone-callback']);

if (!empty($name) && !empty($phone)) {

    /*** код отправления сообщения в Telegram ***/
    
    echo 'success';
} else {
    echo 'empty-inputs';
}