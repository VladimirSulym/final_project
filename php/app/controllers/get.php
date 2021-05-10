<?php

include 'controller.php';

class get extends controller
{
    private array $db = [];

    private function getdb ($config, $action = 'catalog') {
        $msql = new mysql();
        $msql->connect($config['db']['local']);
        $this->db = $msql->querySelect("SELECT * FROM $action");
    }

    // GET  /rest
    // GET  /?controller=rest
    public function startAction ($config, $action)
    {
        $this->getdb($config, $action);
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
}