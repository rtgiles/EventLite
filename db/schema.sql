CREATE DATABASE events_db;

USE events_db;

CREATE TABLE events (
	id int NOT NULL AUTO_INCREMENT,
	event_creator VARCHAR(500) NOT NULL,
	event_name VARCHAR(500) NOT NULL,
	event_venue VARCHAR(500) NOT NULL,
	event_date DATETIME,
	PRIMARY KEY (id) 
);