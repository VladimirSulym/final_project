<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: OPTIONS, GET, POST, PUT, PATCH, DELETE');

ini_set('display_errors', 1);
error_reporting(E_ALL);

include 'app' . DIRECTORY_SEPARATOR . 'function' . DIRECTORY_SEPARATOR . 'view_function.php';
$config = include __DIR__ . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'main.php';

spl_autoload_register(function ($name){
    if (file_exists('classes'.DIRECTORY_SEPARATOR."$name.php")) {
        include 'classes'.DIRECTORY_SEPARATOR."$name.php";
    } else {
        if (file_exists('app' . DIRECTORY_SEPARATOR . 'controllers' . DIRECTORY_SEPARATOR . "$name.php")) {
            include 'app' . DIRECTORY_SEPARATOR . 'controllers' . DIRECTORY_SEPARATOR . "$name.php";
        } else echo "нет такого файла ------- $name";
    }
});
//echo ($_REQUEST == $_GET) ?  "GET" : "POST";br();

if ($_REQUEST) {
    $r = request::getInstance();
    $app = new core($config);
//    printArr($_REQUEST);
//    printArr($r->post);
//    var_dump($r->requestPayload);
    $app->run($r->method, $r->controller, $r->action, $r->id, $r->requestPayload, $r->post);
};