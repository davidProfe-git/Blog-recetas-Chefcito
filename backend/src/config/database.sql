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

-- Insertar datos de ejemplo
INSERT INTO recetas (titulo, ingredientes, instrucciones, tiempo_preparacion, imagen_url) VALUES
('Tarta de Manzana', 'Manzanas, Harina, Azúcar, Mantequilla, Huevos', '1. Precalentar el horno a 180°C. 2. Preparar la masa...','60','http://example.com/tarta_manzana.jpg'),
('Ensalada César', 'Lechuga, Pollo, Queso Parmesano, Crutones, Aderezo César', '1. Lavar y cortar la lechuga...','20','http://example.com/ensalada_cesar.jpg');
('Spaghetti Carbonara', 'Spaghetti, Huevos, Queso Pecorino, Panceta, Pimienta Negra', '1. Cocinar el spaghetti...','30','http://example.com/spaghetti_carbonara.jpg'),
('Guacamole', 'Aguacates, Cebolla, Tomate, Cilantro, Jugo de Limón', '1. Machacar los aguacates...','10','http://example.com/guacamole.jpg');