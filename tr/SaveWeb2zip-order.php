<?php
    const API_URL = "https://api.adcombo.com/api/v2/order/create/";
    $isCurlEnabled = function(){
        return function_exists('curl_version');
    };
    if (!$isCurlEnabled) {
        echo "<pre>";
        echo "pls install curl
";
        echo "For *unix open terminal and type this:
";
        echo 'sudo apt-get install curl && apt-get install php-curl';
        die;
    }
    
    $base_url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $base_url = explode('?', $base_url);
    $base_url = $base_url[0];
    
    
    $args = [
        'api_key' => '#apiKey', //api-ключ из кабинета ПП
        'name' => $_POST['name'],
        'phone' => $_POST['phone'],
        'offer_id' => '#offerId', // id оффера
        'country_code' => '#countryCode', // код страны по ISO 3166
        'price' => '#price', // цена товара
        'base_url' => $base_url,
        'ip' => $_SERVER['REMOTE_ADDR'],
        'referrer' => isset($_SERVER["HTTP_REFERER"]) ? $_SERVER["HTTP_REFERER"] : "",
        'subid' => ''
    ];
    $url = API_URL.'?'.http_build_query($args);
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true
    ));
    $res = curl_exec($curl);
    curl_close($curl);
    $res = json_decode($res, true);
    if ($res['code'] == 'ok') {
        //    echo $res['msg'] . ": " . $res['order_id'];
        include 'confirm.html'; // ссылка на страницу спасибо - link to confirm page
    } else {
        include 'confirm.html'; // ссылка на страницу при ошибке в ответе ПП - link to error page
    }
  ?>