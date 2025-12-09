b
-- Crear la base de datos
CREATE DATABASE blog_recetas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE blog_recetas;

-- Crear la tabla de recetas
CREATE TABLE recetas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    ingredientes TEXT NOT NULL,
    instrucciones TEXT NOT NULL,
    tiempo_preparacion INT NOT NULL,
    imagen_url VARCHAR(500),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);