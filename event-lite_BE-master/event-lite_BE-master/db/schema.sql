### Schema

USE ticketMaster;

CREATE TABLE events
(
	id int NOT NULL AUTO_INCREMENT primary key,
	account_name varchar(255) NOT NULL,
	title varchar(255) NOT NULL,
	organizer varchar(255) NOT NULL,
	short_desc TEXT NOT NULL,
	full_desc TEXT NOT NULL,
	event_date datetime,
	event_time datetime,
	event_address VARCHAR(350) NOT NULL,
	eventLinkPic VARCHAR(1000) NOT NULL,
	eventCategoryOne VARCHAR(20) NOT NULL,
	eventCategoryTwo VARCHAR(20) NOT NULL
);
