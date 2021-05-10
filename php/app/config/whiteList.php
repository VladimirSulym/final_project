<?php


class whiteList
{
    public $whiteList =
        [
            'maincontroller' => ['actionindex', 'actioninfo'],
            'secondcontroller' => ['actiontopindex', 'actionmenu'],
            'errorcontroller' => ['action404'],
            'restcontroller' => [
                'catalog',
                'category',
                'color',
                'brand',
                'users',
                'pricerange',
                'actionview',
                'actioncreate',
                'actionupdate',
                'actiondelete'],
            'get' => [
                'catalog',
                'category',
                'color',
                'brand',
                'pricerange',
                'users'],
            'delete' => [
                'catalog',
                'category',
                'color',
                'brand',
                'pricerange',
                'users'],
            'upload' => [
                'catalog',
                'category',
                'color',
                'brand',
                'pricerange',
                'users'],
            'change' => [
                'catalog',
                'category',
                'color',
                'brand',
                'pricerange',
                'users']
        ];

    public function getWhiteList(): array
    {
        return $this->whiteList;
    }
}