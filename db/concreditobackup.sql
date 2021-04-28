-- MariaDB dump 10.17  Distrib 10.4.13-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: concredito
-- ------------------------------------------------------
-- Server version	10.4.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `documentos`
--

DROP TABLE IF EXISTS `documentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `documentos` (
  `id_documento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `path` varchar(100) NOT NULL,
  `prospectos_id_prospecto` int(11) NOT NULL,
  PRIMARY KEY (`id_documento`),
  KEY `fk_documentos_prospectos1_idx` (`prospectos_id_prospecto`),
  CONSTRAINT `fk_documentos_prospectos1` FOREIGN KEY (`prospectos_id_prospecto`) REFERENCES `prospectos` (`id_prospecto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos`
--

LOCK TABLES `documentos` WRITE;
/*!40000 ALTER TABLE `documentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `documentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prospectos`
--

DROP TABLE IF EXISTS `prospectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prospectos` (
  `id_prospecto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `primer_apellido` varchar(45) NOT NULL,
  `segundo_apellido` varchar(45) DEFAULT NULL,
  `calle` varchar(45) NOT NULL,
  `numero` varchar(6) NOT NULL,
  `colonia` varchar(45) NOT NULL,
  `cp` varchar(10) NOT NULL,
  `tel` char(10) NOT NULL,
  `rfc` varchar(13) NOT NULL,
  `observaciones` varchar(200) DEFAULT NULL,
  `status_id_status` int(11) NOT NULL,
  PRIMARY KEY (`id_prospecto`),
  KEY `fk_prospectos_status_idx` (`status_id_status`),
  CONSTRAINT `fk_prospectos_status` FOREIGN KEY (`status_id_status`) REFERENCES `status` (`id_status`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prospectos`
--

LOCK TABLES `prospectos` WRITE;
/*!40000 ALTER TABLE `prospectos` DISABLE KEYS */;
INSERT INTO `prospectos` VALUES (1,'Leeroy','Garcia','Gonzalez','19','330','Fidel Velazquez','35025','8712510748','GAGL981104','No tiene para pagar ',3),(2,'Uziel','Perez','Torres','19','330','alamos','35025','8712151617','GAGL981104JU5','Tiene con que pagar el chavito',2);
/*!40000 ALTER TABLE `prospectos` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger InsertStatus
before insert on prospectos
	for each row 
    begin 
		set new.status_id_status = 1;
	end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id_status` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id_status`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Enviado'),(2,'Autorizado'),(3,'Rechazado');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `vgetoneprospect`
--

DROP TABLE IF EXISTS `vgetoneprospect`;
/*!50001 DROP VIEW IF EXISTS `vgetoneprospect`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `vgetoneprospect` (
  `id_prospecto` tinyint NOT NULL,
  `nombre` tinyint NOT NULL,
  `primer_apellido` tinyint NOT NULL,
  `segundo_apellido` tinyint NOT NULL,
  `calle` tinyint NOT NULL,
  `numero` tinyint NOT NULL,
  `colonia` tinyint NOT NULL,
  `cp` tinyint NOT NULL,
  `tel` tinyint NOT NULL,
  `rfc` tinyint NOT NULL,
  `observaciones` tinyint NOT NULL,
  `status` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `vgetprospectos`
--

DROP TABLE IF EXISTS `vgetprospectos`;
/*!50001 DROP VIEW IF EXISTS `vgetprospectos`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `vgetprospectos` (
  `id_prospecto` tinyint NOT NULL,
  `nombre` tinyint NOT NULL,
  `primer_apellido` tinyint NOT NULL,
  `segundo_apellido` tinyint NOT NULL,
  `status` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vgetoneprospect`
--

/*!50001 DROP TABLE IF EXISTS `vgetoneprospect`*/;
/*!50001 DROP VIEW IF EXISTS `vgetoneprospect`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vgetoneprospect` AS select `prospectos`.`id_prospecto` AS `id_prospecto`,`prospectos`.`nombre` AS `nombre`,`prospectos`.`primer_apellido` AS `primer_apellido`,`prospectos`.`segundo_apellido` AS `segundo_apellido`,`prospectos`.`calle` AS `calle`,`prospectos`.`numero` AS `numero`,`prospectos`.`colonia` AS `colonia`,`prospectos`.`cp` AS `cp`,`prospectos`.`tel` AS `tel`,`prospectos`.`rfc` AS `rfc`,`prospectos`.`observaciones` AS `observaciones`,`prospectos`.`status_id_status` AS `status` from `prospectos` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vgetprospectos`
--

/*!50001 DROP TABLE IF EXISTS `vgetprospectos`*/;
/*!50001 DROP VIEW IF EXISTS `vgetprospectos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vgetprospectos` AS select `p`.`id_prospecto` AS `id_prospecto`,`p`.`nombre` AS `nombre`,`p`.`primer_apellido` AS `primer_apellido`,`p`.`segundo_apellido` AS `segundo_apellido`,`s`.`status` AS `status` from (`prospectos` `p` join `status` `s`) where `s`.`id_status` = `p`.`status_id_status` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-28 17:10:24
