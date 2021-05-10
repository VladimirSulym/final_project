<?php

include 'controller.php';

class change extends controller
{
    private array $db = [];

    private function getdb ($config, $action = 'catalog') {
        $msql = new mysql();
        $msql->connect($config['db']['local']);
        $this->db = $msql->querySelect("SELECT * FROM $action");
    }

    private function setdb ($config, $post, $action = 'catalog') {
        $msql = new mysql();
        $msql->connect($config['db']['local']);
        $msql->querySelect("UPDATE $action SET 
                 title = '$post[title]', 
                 img = '$post[img]', 
                 brand = '$post[brand]', 
                 colors = '$post[colors]', 
                 category = '$post[category]', 
                 price = '$post[price]', 
                 available = '$post[available]', 
                 img_url = '$post[img_url]'
                WHERE id = '$post[id]'");
    }

    public function startAction ($config, $post, $id, $action)
    {
        $this->getdb($config, $action);
        $flag = false;
        $res = [];
        foreach ($this->db as $item) {
            if ($item['id'] == $post['id']) {

                if (!$_FILES['img']['error']) {
                    $tmp_name = $_FILES['img']['tmp_name'];
                    list(, $type) = explode("/", $_FILES['img']['type']);
                    $new_name = md5_file($tmp_name);
                    $new_name = "$new_name".'.'.$type;
                    move_uploaded_file($tmp_name, '././imgs'.DIRECTORY_SEPARATOR.$new_name);
                    if ($item['img_url']){
                        unlink('././imgs'.DIRECTORY_SEPARATOR.$item['img_url']);
                    }
                    $item['img_url'] = $new_name;
                } else { if ($_FILES['img']['error'] !== 4) {
                    echo "Произошла ошибка в загрузке файла";
                }
                }
                $post = array_diff($post, array(''));
                $res = array_merge($item, $post);

                $this->setdb($config, $res, $action);
                $flag = true;
                break;
            }
        }
        if ($flag == false) {
            echo json_encode(['error' => "NO FOUND ID = $post[id]"]);
        } else {echo json_encode(['OK' => "ID = $post[id] from catalog CHANGE"]);
            ob_start();
            header('Location: '.$_SERVER['HTTP_REFERER']);
            ob_end_flush();
        }
    }
}