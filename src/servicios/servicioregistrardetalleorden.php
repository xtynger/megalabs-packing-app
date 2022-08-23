<?php
	require_once("config.php");

    //$id = $_POST[uniqid()]  ;
    //$idDetalleOrden = $_REQUEST[uniqid()];
    $idDetalleOrden = $_REQUEST["idDetalleOrden"];
    $nombreCliente = $_REQUEST["nombreCliente"];
    $pedidoVenta = $_REQUEST["pedidoVenta"];
    $asignadoPor = $_REQUEST["asignadoPor"];
    $completadoPor = $_REQUEST["completadoPor"];
    $Seleccionar = $_REQUEST["Seleccionar"];
    $Iddeloteinterno = $_REQUEST["Iddeloteinterno"];
    $Codigodearticulo = $_REQUEST["Codigodearticulo"];
    $Almacen = $_REQUEST["Almacen"];
    $Numerodelote = $_REQUEST["Numerodelote"];
    $Ubicacion = $_REQUEST["Ubicacion"];
    $Iddepallet = $_REQUEST["Iddepallet"];
    $Sublotedecalidad = $_REQUEST["Sublotedecalidad"];
    $Fechadeentrega = $_REQUEST["Fechadeentrega"];
    $CantidadCWdeseleccion = $_REQUEST["CantidadCWdeseleccion"];
    $Seleccionarcantidad = $_REQUEST["Seleccionarcantidad"];
    $Reservado = $_REQUEST["Reservado"];

    
    //$date = getdate();
     //echo $date[year],'-',$date[mon],'-',$date[mday],' ',$date[hours],':',$date[minutes],':',$date[seconds];

	$rs = mysqli_query($cn,
		"insert into Detalle_Orden (idDetalleOrden,nombreCliente,pedidoVentas,asignadoPor,
        completadoPor,Seleccionar,Iddeloteinterno,Codigodearticulo,Almacen,
        Numerodelote,Ubicacion,Iddepallet,Sublotedecalidad,Fechadeentrega,
        CantidadCWdeseleccion,Seleccionarcantidad,Reservado) 
        values('".$idDetalleOrden."','".$nombreCliente."','".$pedidoVenta."',
        '".$asignadoPor."','".$completadoPor."','".$Seleccionar."','".$Iddeloteinterno."',
        '".$Codigodearticulo."','".$Almacen."','".$Numerodelote."','".$Ubicacion."',
        '".$Iddepallet."','".$Sublotedecalidad."','".$Fechadeentrega."','".$CantidadCWdeseleccion."',
        '".$Seleccionarcantidad."','".$Reservado."')");

	echo mysqli_insert_id($cn); 
	mysqli_close($cn);
?>