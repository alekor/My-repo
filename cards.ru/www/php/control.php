<?php

	mysql_connect('localhost', 'Alekor', '111') or die ('Произошла ошибка1'.mysql_error());
	mysql_select_db('alekor') or die ('Произошла ошибка2'.mysql_error());

	$query=mysql_query("SELECT * FROM `table`") or die ('Произошла ошибка3'.mysql_error());
	
	while($row=mysql_fetch_array($query))
        {
            $data[$row[id]] = array (
                "id"=>$row[id], 
                "company"=>$row[company],
                "name"=>$row[name],
                "position"=>$row[position],
                "email"=>$row[email],
                "tel"=>$row[tel],
                );
        };

        $json =  json_encode($data); 
        echo $json;

?>