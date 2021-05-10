<?php

include 'controller.php';

class upload extends controller
{
    private array $db = [];

    private function setdb ($config, $post, $action = 'catalog') {
        $msql = new mysql();
        $msql->connect($config['db']['local']);
        $msql->querySelect("INSERT INTO $action (
                   title, 
                   img, 
                   brand, 
                   colors, 
                   category, 
                   price, 
                   available, 
                   img_url) 
                   values ('$post[title]',
                           '$post[img]',
                           '$post[brand]',
                           '$post[colors]',
                           '$post[category]',
                           '$post[price]',
                           '$post[available]',
                           '$post[img_url]');");
    }

    public function startAction ($config, $post, $id, $action)
    {
        if (!$_FILES['img']['error']) {
            $tmp_name = $_FILES['img']['tmp_name'];
            list(, $type) = explode("/", $_FILES['img']['type']);
            $new_name = md5_file($tmp_name);
            $post['img_url'] = "$new_name".'.'.$type;
            echo "НОВОЕ ИМЯ ФАЙЛА = >".$post['img_url'];
            printArr($_REQUEST);
            printArr($_SERVER);
            move_uploaded_file($tmp_name, '././imgs'.DIRECTORY_SEPARATOR.$post['img_url']);
        } else { if ($_FILES['img']['error'] == 4) {
            $post['img_url'] = '';
        } else {
            echo "Произошла ошибка в загрузке файла";
        }
        }
        $this->setdb($config, $post, $action);
        ob_start();
        header('Location: '.$_SERVER['HTTP_REFERER']);
        ob_end_flush();
    }
}