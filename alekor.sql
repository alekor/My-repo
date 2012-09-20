-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Июл 18 2012 г., 20:06
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `alekor`
--

-- --------------------------------------------------------

--
-- Структура таблицы `table`
--

CREATE TABLE IF NOT EXISTS `table` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `company` varchar(99) NOT NULL,
  `name` varchar(99) NOT NULL,
  `position` varchar(99) NOT NULL,
  `email` varchar(99) NOT NULL,
  `tel` int(99) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `table`
--

INSERT INTO `table` (`id`, `company`, `name`, `position`, `email`, `tel`) VALUES
(1, 'PupkinCompany', 'Ivan Pupkin', 'director', 'ivan@gmail.com', 985673421),
(2, 'The Best Company', 'Johny Good', 'president', 'good@gmail.com', 983456211),
(3, 'Nice Industries', 'Peter Jonson', 'engineer', 'peter@i.ua', 983457722),
(4, 'Funny Inc.', 'Bobby Jocker', 'funny guy', 'guy@gmail.com', 994352312),
(5, 'Amazing Enterpirse', 'Billy Fly', 'consultant', 'fly@gmail.com', 943532312);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
