<?php

spl_autoload_register(function ($controllerName){
    if (file_exists('./app/controllers'.DIRECTORY_SEPARATOR."$controllerName.php")) {
        include './app/controllers'.DIRECTORY_SEPARATOR."$controllerName.php";
    } else echo "нет такого файла ---";
});
//include './app/config/main.php';

class core
{
    public static $config = [];

    public function __construct ($config=[])
    {
        self::$config = $config;
    }

    public function run ($method, $controller, $action, $id, $requestPayload, $post)
    {
        try {
            switch ($method) {
                case 'GET':
                    include './app/config/whiteList.php';
                    $whiteList = new whiteList();
                    $whiteList = $whiteList->getWhiteList();
                    $this->getCheck($whiteList, $controller, $action, $id);
                    break;
                case 'POST':
                    include './app/config/whiteList.php';
                    $whiteList = new whiteList();
                    $whiteList = $whiteList->getWhiteList();
                    if (array_key_exists($controller, $whiteList)){
                        if ((in_array($action, $whiteList[$controller]))) {
                            $getController = new $controller();
                            $getController->startAction(self::$config, $post, $id, $action);
                        } else {
                            http_response_code(404);
                            throw new Exception('Action or ID '.$action.' NOT exist');
                        }
                    } else {
                        http_response_code(404);
                        throw new Exception('Invalid controller name');
                    }
                    break;
//                case 'PUT':
//                    break;
//                case 'DELETE':
//                    break;
            }
        } catch (Exception $e) {
            echo json_encode(['error' => $e->getMessage()]);
        }

    }

    public function getCheck ($whiteList, $controller, $action, $id)
    {
        if (array_key_exists($controller, $whiteList)){
            if ((in_array($action, $whiteList[$controller]))) {
                $getController = new $controller();
                $getController->startAction(self::$config, $action, $id);
            } else {if ($id != '') {
                $getController = new $controller();
                $getController->actionView(self::$config, $id);
            } else {
                http_response_code(404);
                throw new Exception('Action or ID '.$action.' NOT exist');
            }
            }
        }  else {
            $getController = new errorcontroller();
            $getController->action404();
            http_response_code(404);
            throw new Exception('Controller '.$controller.' NOT exist');
        }
    }
}