-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-02-24 10:44:13
-- 伺服器版本： 10.4.24-MariaDB
-- PHP 版本： 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `exam2`
--

-- --------------------------------------------------------

--
-- 資料表結構 `account`
--

CREATE TABLE `account` (
  `account_num` int(11) NOT NULL,
  `account_name` varchar(255) NOT NULL,
  `account_password` varchar(255) NOT NULL,
  `account_permission` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `account`
--

INSERT INTO `account` (`account_num`, `account_name`, `account_password`, `account_permission`) VALUES
(1, 'Ac01', 'dc483e80a7a0bd9ef71d8cf973673924', '1'),
(2, 'Ac02', 'd802bec975f053214d2bcac29df9c8d6', '0'),

-- --------------------------------------------------------

--
-- 資料表結構 `permission`
--

CREATE TABLE `permission` (
  `permission_num` varchar(20) NOT NULL,
  `permission_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `permission`
--

INSERT INTO `permission` (`permission_num`, `permission_name`) VALUES
('0', '管理員'),
('1', '一級會員');

-- --------------------------------------------------------

--
-- 資料表結構 `sex`
--

CREATE TABLE `sex` (
  `sex_num` varchar(20) NOT NULL,
  `sex_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `sex`
--

INSERT INTO `sex` (`sex_num`, `sex_name`) VALUES
('0', '女'),
('1', '男');

-- --------------------------------------------------------

--
-- 資料表結構 `user1`
--

CREATE TABLE `user1` (
  `user_num` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_sex` varchar(255) NOT NULL,
  `user_mail` varchar(255) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  `user_address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `user1`
--

INSERT INTO `user1` (`user_num`, `user_name`, `user_sex`, `user_mail`, `user_phone`, `user_address`) VALUES
(1, '大漂亮', '0', 'aaa@gmail.com', '0988686886', '台北市中正區忠孝西路一段999號1樓'),
(2, '卡了米', '1', 'bbb@gmail.com', '0987487987', ''),
--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`account_num`);

--
-- 資料表索引 `user1`
--
ALTER TABLE `user1`
  ADD PRIMARY KEY (`user_num`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `account`
--
ALTER TABLE `account`
  MODIFY `account_num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user1`
--
ALTER TABLE `user1`
  MODIFY `user_num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
