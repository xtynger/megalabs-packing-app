<?php
	require_once("config.php");

    //$id = $_POST[uniqid()]  ;
    //$idDetalleOrden = $_REQUEST[uniqid()];
    $pedidoDeVentas = $_REQUEST["pedidoDeVentas"];
    $codigoArticulo = $_REQUEST["codigoArticulo"];
    $descripcion = $_REQUEST["descripcion"];
    $numeroLote = $_REQUEST["numeroLote"];
    $ubicacion = $_REQUEST["ubicacion"];
    $idPallet = $_REQUEST["idPallet"];
    $fechaCaducidad = $_REQUEST["fechaCaducidad"];
    $cantidad = $_REQUEST["cantidad"];
       
    //$date = getdate();
     //echo $date[year],'-',$date[mon],'-',$date[mday],' ',$date[hours],':',$date[minutes],':',$date[seconds];

	$rs = mysqli_query($cn,
		"insert into Detalle_Orden (pedidoDeVentas,codigoArticulo,descripcion,numeroLote,
        ubicacion,idPallet,fechaCaducidad,cantidad) 
        values('".$pedidoDeVentas."','".$codigoArticulo."','".$descripcion."',
        '".$numeroLote."','".$ubicacion."','".$idPallet."',
        '".$fechaCaducidad."','".$cantidad."')");

	echo mysqli_insert_id($cn); 
	mysqli_close($cn);
?>