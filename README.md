# Blog
Turtuvshin

Node-moduls татах-npm i node_modules;
package.json дээр бүх өгөгдлүүдийг татаж суулгах

Acount table:
CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `nodelogin`;

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');
INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (2, 'DDD', 'DDDD', 'DDD@DDDD.com');

ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
SELECT * FROM nodelogin.accounts;


post table:
CREATE TABLE  `post` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `about` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
); 



ALTER TABLE `Post` ADD PRIMARY KEY (`id`);
ALTER TABLE `Post` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
SELECT * FROM nodelogin.post;

Server асаах- npm start
