-- MySQL Script generated by MySQL Workbench
-- Mon Nov 27 21:55:44 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema test
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema test
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8 ;
USE `test` ;

-- -----------------------------------------------------
-- Table `test`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test`.`products` (
                                                 `idproducts` INT UNSIGNED NOT NULL,
                                                 `name` VARCHAR(45) NOT NULL,
    `montant` DECIMAL(2) NOT NULL,
    `imageUrl` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`idproducts`))
    ENGINE = InnoDB;

CREATE UNIQUE INDEX `idproducts_UNIQUE` ON `test`.`products` (`idproducts` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;