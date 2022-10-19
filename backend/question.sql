-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 19, 2022 at 09:31 PM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `numerical_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `Question_id` int(11) NOT NULL,
  `Chapter_id` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Question_JSON` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`Question_id`, `Chapter_id`, `Question_JSON`) VALUES
(1, '1001', '{\"root\": 4, \"number\": 13}'),
(2, '1001', '{\"root\": 2, \"number\": 25}'),
(10, '1001', '{\"root\": 2, \"number\": 9}'),
(16, '1001', '{\"root\": 2, \"number\": 100}'),
(27, '1001', '{\"root\": 2, \"number\": 1000}'),
(36, '1002', '{\"Fx\": \"43*x-1\"}'),
(37, '1002', '{\"Fx\": \"5*x-2\"}'),
(38, '1002', '{\"Fx\": \"100*x-1\"}'),
(39, '1002', '{\"Fx\": \"99*x-9\"}'),
(40, '1002', '{\"Fx\": \"25*x-5\"}'),
(42, '1003', '{\"Fx\": \"((1/2)*x)^(1/2)\"}'),
(43, '1003', '{\"Fx\": \"((1/5)*x)^(1/2)\"}'),
(44, '1003', '{\"Fx\": \"((2/5)*x)^(1/2)\"}'),
(45, '1003', '{\"Fx\": \"((3/5)*x)^(1/2)\"}'),
(46, '1003', '{\"Fx\": \"((4/5)*x)^(1/2)\"}'),
(57, '1004', '{\"Fx\": \"x^2-7\", \"DFx\": \"2*x\"}'),
(58, '1004', '{\"Fx\": \"x^2-9\", \"DFx\": \"2*x\"}'),
(59, '1004', '{\"Fx\": \"x^3-8\", \"DFx\": \"3*x^2\"}'),
(60, '1004', '{\"Fx\": \"x^9-1048\", \"DFx\": \"9*x^8\"}'),
(61, '1004', '{\"Fx\": \"x^5-50\", \"DFx\": \"5*x^4\"}'),
(62, '1005', '{\"Fx\": \"x^2-7\"}'),
(63, '1005', '{\"Fx\": \"x^2-9\"}'),
(64, '1005', '{\"Fx\": \"x^3-8\"}'),
(65, '1005', '{\"Fx\": \"x^9-1048\"}'),
(66, '1005', '{\"Fx\": \"x^5-50\"}'),
(67, '2001', '{\"size\": \"3\", \"metans\": [[9], [0], [-4]], \"metrics\": [[-2, 3, 1], [3, 4, -5], [1, -2, 1]]}'),
(68, '2001', '{\"size\": \"3\", \"metans\": [[13], [4], [-8]], \"metrics\": [[-6, 7, 5], [7, 8, -9], [5, -6, 5]]}'),
(69, '2001', '{\"size\": \"3\", \"metans\": [[10], [1], [-5]], \"metrics\": [[-3, 4, 2], [4, 5, -6], [2, -3, 2]]}'),
(70, '2001', '{\"size\": \"3\", \"metans\": [[11], [2], [-6]], \"metrics\": [[-4, 5, 3], [5, 6, -7], [3, -4, 3]]}'),
(71, '2001', '{\"size\": \"3\", \"metans\": [[12], [3], [-7]], \"metrics\": [[-5, 6, 4], [6, 7, -8], [4, -5, 4]]}'),
(72, '2002', '{\"size\": \"3\", \"metans\": [[9], [0], [-4]], \"metrics\": [[-2, 3, 1], [3, 4, -5], [1, -2, 1]]}'),
(73, '2002', '{\"size\": \"3\", \"metans\": [[13], [4], [-8]], \"metrics\": [[-6, 7, 5], [7, 8, -9], [5, -6, 5]]}'),
(74, '2002', '{\"size\": \"3\", \"metans\": [[10], [1], [-5]], \"metrics\": [[-3, 4, 2], [4, 5, -6], [2, -3, 2]]}'),
(75, '2002', '{\"size\": \"3\", \"metans\": [[11], [2], [-6]], \"metrics\": [[-4, 5, 3], [5, 6, -7], [3, -4, 3]]}'),
(76, '2002', '{\"size\": \"3\", \"metans\": [[12], [3], [-7]], \"metrics\": [[-5, 6, 4], [6, 7, -8], [4, -5, 4]]}'),
(77, '2003', '{\"size\": \"3\", \"metans\": [[9], [0], [-4]], \"metrics\": [[-2, 3, 1], [3, 4, -5], [1, -2, 1]]}'),
(78, '2003', '{\"size\": \"3\", \"metans\": [[13], [4], [-8]], \"metrics\": [[-6, 7, 5], [7, 8, -9], [5, -6, 5]]}'),
(79, '2003', '{\"size\": \"3\", \"metans\": [[10], [1], [-5]], \"metrics\": [[-3, 4, 2], [4, 5, -6], [2, -3, 2]]}'),
(80, '2003', '{\"size\": \"3\", \"metans\": [[11], [2], [-6]], \"metrics\": [[-4, 5, 3], [5, 6, -7], [3, -4, 3]]}'),
(81, '2003', '{\"size\": \"3\", \"metans\": [[12], [3], [-7]], \"metrics\": [[-5, 6, 4], [6, 7, -8], [4, -5, 4]]}'),
(82, '2004', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[5, 2, 0, 0], [2, 5, 2, 0], [0, 2, 5, 2], [0, 0, 2, 5]]}'),
(83, '2004', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[9, 2, 1, 1], [2, 9, 2, 1], [1, 2, 9, 2], [1, 1, 2, 9]]}'),
(84, '2004', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[7, 2, 1, 1], [2, 7, 2, 1], [1, 2, 7, 2], [1, 1, 2, 7]]}'),
(85, '2004', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[8, 2, 1, 1], [2, 8, 2, 1], [1, 8, 5, 2], [1, 1, 8, 5]]}'),
(86, '2004', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[3, 2, 0, 0], [2, 3, 2, 0], [0, 2, 3, 2], [1, 1, 2, 0]]}'),
(87, '2005', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[5, 2, 0, 0], [2, 5, 2, 0], [0, 2, 5, 2], [0, 0, 2, 5]]}'),
(88, '2005', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[9, 2, 1, 1], [2, 9, 2, 1], [1, 2, 9, 2], [1, 1, 2, 9]]}'),
(89, '2005', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[7, 2, 1, 1], [2, 7, 2, 1], [1, 2, 7, 2], [1, 1, 2, 7]]}'),
(90, '2005', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[8, 2, 1, 1], [2, 8, 2, 1], [1, 8, 5, 2], [1, 1, 8, 5]]}'),
(91, '2005', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[3, 2, 0, 0], [2, 3, 2, 0], [0, 2, 3, 2], [1, 1, 2, 0]]}'),
(92, '2006', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[5, 2, 0, 0], [2, 5, 2, 0], [0, 2, 5, 2], [0, 0, 2, 5]]}'),
(93, '2006', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[9, 2, 1, 1], [2, 9, 2, 1], [1, 2, 9, 2], [1, 1, 2, 9]]}'),
(94, '2006', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[7, 2, 1, 1], [2, 7, 2, 1], [1, 2, 7, 2], [1, 1, 2, 7]]}'),
(95, '2006', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[8, 2, 1, 1], [2, 8, 2, 1], [1, 8, 5, 2], [1, 1, 8, 5]]}'),
(96, '2006', '{\"size\": \"4\", \"metans\": [[12], [17], [14], [7]], \"metrics\": [[3, 2, 0, 0], [2, 3, 2, 0], [0, 2, 3, 2], [1, 1, 2, 0]]}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`Question_id`,`Chapter_id`),
  ADD KEY `Question_chapter` (`Chapter_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `Question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `Question_chapter` FOREIGN KEY (`Chapter_id`) REFERENCES `chapter` (`Chapter_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
