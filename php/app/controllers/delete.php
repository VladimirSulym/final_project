<?php

include 'controller.php';

class delete extends controller
{
    private array $db = [];
    private $msql = '';

    private function getdb ($config, $action = 'catalog') {
        $this->msql = new mysql();
        $this->msql->connect($config['db']['local']);
        $this->db = $this->msql ->querySelect("SELECT * FROM $action");
    }

    private function deletebd ($action, $id) {
        $this->msql->querySelect("DELETE FROM $action WHERE id=$id");
    }

    public function startAction ($config, $action, $id)
    {
        $this->getdb($config, $action);
        $flag = false;
        foreach ($this->db as $item) {
            if ($item['id'] == $id) {
                $this->deletebd($action, $id);
                if ($item['img_url']){
                    unlink('././imgs'.DIRECTORY_SEPARATOR.$item['img_url']);
                }
                $flag = true;
                break;
            }
        }
        if ($flag == false) {
            echo json_encode(['error' => "NO FOUND ID = $id"]);
        } else {
            echo json_encode(['OK' => "ID = $id from $action DELETE"]);
            ob_start();
            header('Location: '.$_SERVER['HTTP_REFERER']);
            ob_end_flush();
        }
    }
}