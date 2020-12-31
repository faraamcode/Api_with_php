<?php 
include('config.php');
$query = "SELECT * FROM users";
$users = array();
$result = $connection->query($query);
while($row = mysqli_fetch_array($result)){
 $users[] = array(
  'id' => $row['id'],
  'name' => $row['name'],
   'image' => $row['image']
 );
}
echo json_encode($users);

?>