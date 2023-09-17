<?php
$con=('loacalhost');
$username="Pacifique";
$password="SMART2001";
const busnuner=$_POST['Busnumber'];
const capacity=$_POST['Capacity'];
const company=$_POST['Company'];

if(isset($_POST['Busnumber && Capacity && Company'])){
    echo" Bus added suucessfuly"
}
die(" could not add new bus", mysql_error())
?>