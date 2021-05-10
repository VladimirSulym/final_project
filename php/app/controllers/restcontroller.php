<?php

include 'controller.php';
//$config = include __DIR__ . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'main.php';
$config = include './app/config/main.php';
class restcontroller extends controller
{
    private array $db = [];

//    private function getdb ($config, $action = 'catalog') {
//        $msql = new mysql();
//        $msql->connect($config['db']['local']);
//        $this->db = $msql->querySelect("SELECT * FROM $action");
//    }

    // GET  /rest
    // GET  /?controller=rest
    public function catalog ($config)
    {
        $this->getdb($config);
        echo json_encode($this->db);
    }

    public function category ($config)
    {
        $this->getdb($config, 'category');
        echo json_encode($this->db);
    }

    public function color ($config)
    {
        $this->getdb($config, 'color');
        echo json_encode($this->db);
    }

    public function brand ($config)
    {
        $this->getdb($config, 'brand');
        echo json_encode($this->db);
    }

    public function users ($config)
    {
        $this->getdb($config, 'users');
        echo json_encode($this->db);
    }

    // GET  /rest/10
    // GET  /?controller=rest&id=10
    public function actionView ($config, $id)
    {
        $this->getdb($config);
        $flag = false;
        foreach ($this->db as $item) {
            if ($item['id'] == $id) {
                echo json_encode($item);
                $flag = true;
                break;
            }
        }
        if ($flag == false) {
            http_response_code(404);
            echo json_encode(['error' => "NO FOUND ID = $id"]);
        }
    }
    // POST /rest               | request payload (POST_DATA): {"name":"SSD","vendor":"seagate","model":"dsfg34"}
    // POST /?controller=rest   | request payload (POST_DATA): {"name":"SSD","vendor":"seagate","model":"dsfg34"}
    public function actionCreate ($requestPayload)
    {
        file_put_contents('./log.txt', $requestPayload);
//        array_push($this->db, json_decode($requestPayload, true));
        array_push($this->db, $requestPayload);
        end($this->db);
        echo json_encode($this->db);
//        echo json_encode(['id' => key($this->db)]);
    }
    // PUT  /rest/10                | request payload (POST_DATA): {"model":"Barracuda 90"}
    // PUT  /?controller=rest&id=10 | request payload (POST_DATA): {"model":"Barracuda 90"}
    public function actionUpdate ()
    {
        $data = getRequestPayload ();
        $data = json_decode($data, true);
        $this->db[$_GET['id']] = array_merge($this->db[$_GET['id']], $data);
    }
    // DELETE   /rest/10
    // DELETE   /?controller=rest&id=10
    public function actionDelete ()
    {
        unset($this->db[$_GET['id']]);
    }
}