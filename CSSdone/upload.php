<?php

$file = $_FILES["file"];

move_uploaded_file($file["tmp_name"], "fashion/" . $file["name"] );

header("Location: products.html");

extract($_REQUEST);

$files=fopen("form-save.txt" , "a");

fwrite($files, "name :");
fwrite($files, $ 
)

?>