<?php
<form action="/.php" method="post">
Full name:
<input type="text" namne="Fullname">
Email:
<input type="email" namne="email">
</form>
$name=$_POST['Fullname'];
$email=$_POST['email'];
if(isset"($_POST['Fullname'])){
    echo"My name is:".$name;
}
echo"Hello my friend";
?>