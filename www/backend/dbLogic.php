<?php
    class Database
    {
        private $dbhandle;
        function __construct() {
            $username = "alex";
            $password = "aaa123123";
            $hostname = "localhost";
            $db = "db_goodDeals";

            //connection to the database
            $this->dbhandle = mysqli_connect($hostname, $username, $password, $db)
            or die("Unable to connect to MySQL");
            //echo "Connected to MySQL<br>";
        }

        public function getAllUsers()
        {
            // Performing SQL query
            $query = 'SELECT * FROM `users`';
            $result = mysqli_query($this->dbhandle, $query) or die('Query failed: ' . mysqli_error());

            // Printing results in HTML
            echo "<table>\n";
            while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {
                echo "\t<tr>\n";
                foreach ($line as $col_value) {
                    echo "\t\t<td>$col_value</td>\n";
                }
                echo "\t</tr>\n";
            }
            echo "</table>\n";
        }

        public function getUserInfo($id)
        {
            // Performing SQL query
            $query = 'SELECT * FROM `users` WHERE `id` ='.$id;
            $result = mysqli_query($this->dbhandle, $query) or die('Query failed: ' . mysqli_error());

            // Printing results in HTML
            echo "<table>\n";
            while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {
                echo "\t<tr>\n";
                foreach ($line as $col_value) {
                    echo "\t\t<td>$col_value</td>\n";
                }
                echo "\t</tr>\n";
            }
            echo "</table>\n";
        }

        public function getHopes()
        {
            $query = 'SELECT * FROM `records`';
            $result = mysqli_query($this->dbhandle, $query) or die('Query failed: ' . mysqli_error());

            // Printing results in HTML
            //echo "<table>\n";
            while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {
                echo "\t<tr>\n";
                foreach ($line as $col_value) {
                    echo "\t\t<td>$col_value</td>\n";
                }
                echo "\t</tr>\n";
            }
            //echo "</table>\n";
        }

        public function getHopeInfo($id)
        {
            $query = 'SELECT * FROM `records` WHERE `id`='.$id;
            $result = mysqli_query($this->dbhandle, $query) or die('Query failed: ' . mysqli_error());

            // Printing results in HTML
            echo "<table>\n";
            while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {
                echo "\t<tr>\n";
                foreach ($line as $col_value) {
                    echo "\t\t<td>$col_value</td>\n";
                }
                echo "\t</tr>\n";
            }
            echo "</table>\n";
        }

        public function addRecord($type, $user_id, $pub_time, $comfort_time = null, $description)
        {
            $query = 'INSERT INTO  `records` (`record_id` ,`type` ,`user_id` ,`public_time` ,`hope_time` ,`description`) VALUES (\'\', \'%s\', %d, \'%s\', \'%s\', \'%s\')';
            $query = sprintf($query, $type, $user_id, $pub_time, $comfort_time, $description);
            $result = mysqli_query($this->dbhandle, $query) or die('Query failed: ' . mysqli_error($this->dbhandle));
            $this->getHopes();
        }

        public function registerUser($name, $town, $address)
        {
            $query = 'INSERT INTO  `users` (`name` ,`town` ,`address`) VALUES (\'%s\', \'%s\', \'%s\')';
            $query = sprintf($query, $name, $town, $address);
            $result = mysqli_query($this->dbhandle, $query) or die('Query failed: ' . mysqli_error($this->dbhandle));
            $this->getAllUsers();
        }

        public function CloseRecord($id)
        {
            $query = 'UPDATE `records` SET `is_closed` = 1 WHERE `record_id` = '.$id;
            $result = mysqli_query($this->dbhandle, $query) or die('Query failed: ' . mysqli_error($this->dbhandle));
            $this->getHopes();
        }
    }
