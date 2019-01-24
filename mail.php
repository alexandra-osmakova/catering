<?php
header();
  header('Refresh: 5; url=../index.html', true, 301);
  readfile("huge_document.pdf");

 if(isset($_POST['submit'])) {
 	$name = $_POST['name'];
 	$phone = $_POST['phone'];
 	$to = "niaz230898@gmail.com";
 	$subject = 'Заявка с сайта шеф';
 	$msg = "<html>
				<h1 style=font-size:20px>Пришла заявка с сайта</h1>
				 <hr style=width:250px;margin-left:0 />
				Имя: $name
				 <hr style=width:250px;margin-left:0 />
				Телефон: $phone
				 <hr style=width:250px;margin-left:0 />
			</html>";
		
	$headers  = "Content-type: text/html; charset=UTF-8 \r\n";
 	$headers .= "From: no-reply@drim.agency";
 	mail($to, $subject, $msg, $headers);
 }
?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style>
        #zay-allowed-modal-overlay{transition: 0.5s;top: 0;left:0;background-color: rgba(0,0,0,0.7);position: fixed;width: 100%;height: 100%;z-index: 10000;opacity: 1;display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;-webkit-box-pack: center;-ms-flex-pack: center; -webkit-justify-content: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;-webkit-align-items: center;align-items: center;}
        .zay-allowed-modal-container{background-color: #fff;padding: 80px;width: 50%;text-align: center;position: relative;}
        #zay-modal-overlay h3, #zay-allowed-modal-overlay h3, #zay-menu-overlay h3{font-size: 24px;font-weight: 600;position: relative;}
        #zay-modal-overlay h3:after, #zay-allowed-modal-overlay h3:after, #zay-menu-overlay h3:after{content: "";position: absolute;width: 20%;height: 5px;bottom: -25px;border-top: 2px solid #000;left: 40%;right: 40%}
        #zay-modal-overlay h4, #zay-allowed-modal-overlay h4, #zay-menu-overlay h4{font-size: 14px;margin-top: 40px;}
        .zay-allowed-modal-container{width: 30%}
        .zay-allowed-modal-container{text-align: center;}
        .zay-allowed-modal-container svg{width: 80px;}
        .zay-modal-cls{position: absolute;line-height: 10px;font-size: 36px;right: 15px;top: 15px;cursor: pointer;}

    </style>
<section id="zay-allowed-modal-overlay" >
    <div class="zay-allowed-modal-container">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve">
	<path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
		S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/>
	<path d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406
		l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411
		C39.251,14.885,38.62,14.922,38.252,15.336z"/></svg>
        <div class="zay-modal-inner">
            <h3>Заявка принята</h3>
            <h4>Мы свяжемся с Вами в ближайшее время</h4>
        </div>
    </div>
</section>