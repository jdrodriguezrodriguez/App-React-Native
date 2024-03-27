create database myapp;

use myapp;

create table users(
    Id bigint primary key auto_increment,
    name varchar (50),
    lastname varchar (50),
    password varchar (50), -- Corregido el nombre de la columna
    email varchar(60) not null unique,
    phone varchar (50),
    Img varchar(256) null,
    Create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    Update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

show tables;
select *from users;