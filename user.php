<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn = mysqli_connect("localhost", "root", "", "reactphp");
if ($db_conn === false) {
    die("Error: Could not connect" . mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];

// echo "test----".$method; die;
switch ($method) {
    case "GET":
        $path = explode('/', $_SERVER['REQUEST_URI']);

        if (isset($path[4]) && is_numeric($path[4])) {
            $json_array = array();
            $userid = $path[4];

            $getuserrow = mysqli_query($db_conn, "SELECT * FROM tbl_user WHERE userid = '$userid' ");
            while ($userrow = mysqli_fetch_array($getuserrow)) {
                $json_array["rowUserdata"] = array("id" => $userrow['userid'], "name" => $userrow['name'], "email" => $userrow['email'], "password" => $userrow['password'], "dob" => $userrow['dob']);
            }
            echo json_encode($json_array["rowUserdata"]);
            return;
        } else {

            $alluser = mysqli_query($db_conn, "SELECT * FROM tbl_user");
            if (mysqli_num_rows($alluser) > 0) {
                while ($row = mysqli_fetch_array($alluser)) {
                    $json_array["userdata"][] = array("id" => $row['userid'], "name" => $row['name'], "email" => $row['email'], "password" => $row['password'], "dob" => $row['dob']);
                }
                echo json_encode($json_array["userdata"]);
                return;
            } else {
                echo json_encode(["result" => "Please check the data"]);
                return;
            }
        }
        break;

    case "POST":
        $userpostdata = json_decode(file_get_contents("php://input"));
        // echo "success data";
        // print_r($userpostdata); die;
        $name = $userpostdata->name;
        $email = $userpostdata->email;
        $password = $userpostdata->password;
        $dob = $userpostdata->dob;
        $result = mysqli_query($db_conn, "INSERT INTO tbl_user (name, email, password, dob)
        VALUES('$name', '$email', '$password', '$dob')");

        if ($result) {
            echo json_encode(["success" => "Data inserted successfully"]);
            return;
        } else {
            echo json_encode(["success" => "Please check the user data"]);
            return;
        }


        break;

    case "PUT":
        $userUpdate = json_decode(file_get_contents("php://input"));
        $userid = $userUpdate->id;
        $name = $userUpdate->name;
        $email = $userUpdate->email;
        $password = $userUpdate->password;
        $dob = $userUpdate->dob;

        $updateData = mysqli_query($db_conn, "UPDATE tbl_user SET name = '$name', email = '$email', password = '$password', dob = '$dob' WHERE userid = '$userid' ");
        if ($updateData) {
            echo json_encode(["success" => "User record updated successfully"]);
            return;
        } else {
            echo json_encode(["success" => "Please check the user data"]);
            return;
        }

        // print_r($userUpdate); die;
        break;

    case "DELETE":
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $result = mysqli_query($db_conn, "DELETE FROM tbl_user WHERE userid = '$path[4]' ");
        if ($result) {
            echo json_encode(["success" => "User record deleted successfully"]);
            return;
        } else {
            echo json_encode(["success" => "Please check the user data"]);
            return;
        }

        break;
}
