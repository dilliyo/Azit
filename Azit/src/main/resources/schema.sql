CREATE TABLE IF NOT EXISTS nav
(
nav_no int primary key,
nav_name_kr varchar(100) not null,
nav_name_en varchar(100) not null
);

CREATE TABLE IF NOT EXISTS user
(
user_name varchar(100) not null,
user_email varchar(100) not null primary key,
user_password varchar(100) not null,
user_birthday varchar(100) not null,
user_phone varchar(100) not null,
user_location varchar(100),
user_date timestamp default now()

);