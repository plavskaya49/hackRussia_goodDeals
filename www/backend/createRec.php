<?php
    require_once 'dbLogic.php';
    $db = new Database();
    var_dump($_POST);
    $type = $_POST['type'];
    if (isset($_SESSION))
        $user_id = $_SESSION['id'];
    else
    {
        
    }
    $pub_time = date('Y-m-d H:i:s');

    $db->addRecord($type, $user_id, $pub_time, null, $descr);