-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 16, 2022 at 07:40 PM
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
-- Table structure for table `chapter`
--

CREATE TABLE `chapter` (
  `Chapter_id` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Chapter_name` text NOT NULL,
  `Unit_id` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `chapter`
--

INSERT INTO `chapter` (`Chapter_id`, `Chapter_name`, `Unit_id`) VALUES
('1001', 'Bisection Method', '001'),
('1002', 'False Position Method', '001'),
('1003', 'Onepoint Iteration', '001'),
('1004', 'Newton Raphson', '001'),
('1005', 'Secant Method', '001'),
('2001', 'Cramers Rules', '002'),
('2002', 'Gauss Elimination', '002'),
('2003', 'Matrics Invertion ', '002'),
('2004', 'Jacobi Iteration', '002'),
('2005', 'Gauss Seidel Method', '002'),
('2006', 'Conjugate Gradient Method', '002'),
('3001', 'Newton divided', '003'),
('3002', 'Lagrange Interpolation', '003'),
('3003', 'Spline Interpolation', '003');

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
(66, '1005', '{\"Fx\": \"x^5-50\"}');

-- --------------------------------------------------------

--
-- Table structure for table `unit`
--

CREATE TABLE `unit` (
  `Unit_id` varchar(3) NOT NULL,
  `Unit_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `unit`
--

INSERT INTO `unit` (`Unit_id`, `Unit_name`) VALUES
('001', 'Root of equation'),
('002', 'Linear algebra'),
('003', 'Interpolation'),
('004', 'Extrapolation');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chapter`
--
ALTER TABLE `chapter`
  ADD PRIMARY KEY (`Chapter_id`,`Unit_id`),
  ADD KEY `Unit-Chapter` (`Unit_id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`Question_id`,`Chapter_id`),
  ADD KEY `Question_chapter` (`Chapter_id`);

--
-- Indexes for table `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`Unit_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `Question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chapter`
--
ALTER TABLE `chapter`
  ADD CONSTRAINT `Unit-Chapter` FOREIGN KEY (`Unit_id`) REFERENCES `unit` (`Unit_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `Question_chapter` FOREIGN KEY (`Chapter_id`) REFERENCES `chapter` (`Chapter_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
