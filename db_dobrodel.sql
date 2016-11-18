-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 19 2016 г., 03:36
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `db_dobrodel`
--

-- --------------------------------------------------------

--
-- Структура таблицы `t_business`
--

CREATE TABLE IF NOT EXISTS `t_business` (
  `id_business` int(11) NOT NULL AUTO_INCREMENT,
  `town` text NOT NULL,
  `id_client` int(11) NOT NULL,
  `id_worker` int(11) NOT NULL,
  `date_begin` date NOT NULL,
  `isClosed` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_business`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Структура таблицы `t_client`
--

CREATE TABLE IF NOT EXISTS `t_client` (
  `id_client` int(11) NOT NULL AUTO_INCREMENT,
  `fio_client` text NOT NULL,
  `mail_client` text,
  `phone_client` text,
  PRIMARY KEY (`id_client`),
  UNIQUE KEY `id_client` (`id_client`),
  UNIQUE KEY `id_client_2` (`id_client`),
  KEY `id_client_3` (`id_client`),
  KEY `id_client_4` (`id_client`),
  KEY `id_client_5` (`id_client`),
  KEY `id_client_6` (`id_client`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Те, кому нужна помощь' AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Структура таблицы `t_hopes`
--

CREATE TABLE IF NOT EXISTS `t_hopes` (
  `id_hope` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  `hope_name` text NOT NULL,
  `hope_descr` text NOT NULL,
  PRIMARY KEY (`id_client`),
  KEY `id_client` (`id_client`),
  KEY `id_client_2` (`id_client`),
  KEY `id_client_3` (`id_client`),
  KEY `id_client_4` (`id_client`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `t_worker`
--

CREATE TABLE IF NOT EXISTS `t_worker` (
  `id_worker` int(11) NOT NULL AUTO_INCREMENT,
  `fio_worker` text NOT NULL,
  `mail_worker` text NOT NULL,
  `phone_worker` text NOT NULL,
  PRIMARY KEY (`id_worker`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Исполнители' AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Структура таблицы `t_works`
--

CREATE TABLE IF NOT EXISTS `t_works` (
  `id_work` int(11) NOT NULL AUTO_INCREMENT,
  `id_worker` int(11) NOT NULL,
  `name_work` text NOT NULL,
  `descr_work` text NOT NULL,
  PRIMARY KEY (`id_work`),
  UNIQUE KEY `id_work` (`id_work`),
  UNIQUE KEY `id_work_2` (`id_work`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='"Что готов сделать"' AUTO_INCREMENT=1 ;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `t_hopes`
--
ALTER TABLE `t_hopes`
  ADD CONSTRAINT `t_hopes_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `t_client` (`id_client`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
