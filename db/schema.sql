### Schema

USE ticketMaster;

CREATE TABLE events
(
	id int NOT NULL AUTO_INCREMENT primary key,
	account_name varchar(255) NOT NULL,
	event_name varchar(255) NOT NULL,
	event_location varchar(255) NOT NULL,
	event_time datetime
);
