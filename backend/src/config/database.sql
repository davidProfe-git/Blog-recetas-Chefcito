-- Archivo principal de inicialización de la base de datos
-- Crea la base de datos, la tabla y agrega recetas de ejemplo.

CREATE DATABASE IF NOT EXISTS ArizaDelicias CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE ArizaDelicias;

CREATE TABLE IF NOT EXISTS recetas_con_estrella_michelin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    ingredientes TEXT,
    instrucciones TEXT,
    estrella_michelin BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uniq_nombre (nombre(191))
);

-- Inserciones de recetas de ejemplo (INSERT IGNORE evita duplicados por nombre)
INSERT IGNORE INTO recetas_con_estrella_michelin (nombre, descripcion, ingredientes, instrucciones, estrella_michelin) VALUES
('Oysters and Pearls', 'A sabayon of pearl tapioca with Island Creek oysters and white sturgeon caviar.', 'Oysters; pearl tapioca; sturgeon caviar; egg yolks; butter; lemon; salt', 'Prepare sabayon, cook tapioca, assemble oysters with caviar on top.', 1),
('The Black Truffle Explosion', 'Single raviolo filled with hot black truffle liquid.', 'Pasta dough; black truffles; butter; veal stock; Parmesan; salt', 'Prepare ravioli, infuse liquid center with truffle oil, seal, cook briefly.', 1),
('Sound of the Sea', 'Sashimi and tapioca sand served with sea aroma elements.', 'Fresh sashimi; tapioca; herbs; seaweed; citrus', 'Assemble sashimi, prepare tapioca sand, plate with sea aroma elements.', 1),
('Risotto Cremoso con Esencia de Trufa', 'Creamy risotto flavored with truffle oil and Parmesan.', 'Arborio rice; chicken stock; white wine; butter; Parmesan; truffle oil', 'Make soffrito, toast rice, add stock gradually, finish with butter, cheese and truffle oil.', 0),
('Ensalada de Vegetales Asados - Gargouillou', 'A vibrant roasted vegetable salad with herb vinaigrette.', 'Assorted vegetables; olive oil; herbs; vinegar; salt; pepper', 'Roast vegetables, toss with herb vinaigrette, serve warm or room temperature.', 0)
;
-- Archivo principal de inicialización de la base de datos
-- Crea la base de datos, la tabla y agrega recetas de ejemplo.

CREATE DATABASE IF NOT EXISTS ArizaDelicias CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE ArizaDelicias;

CREATE TABLE IF NOT EXISTS recetas_con_estrella_michelin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    ingredientes TEXT,
    instrucciones TEXT,
    estrella_michelin BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserciones de recetas de ejemplo
INSERT INTO recetas_con_estrella_michelin (nombre, descripcion, ingredientes, instrucciones, estrella_michelin) VALUES
('Oysters and Pearls', 'A sabayon of pearl tapioca with Island Creek oysters and white sturgeon caviar.', 'Oysters; pearl tapioca; sturgeon caviar; egg yolks; butter; lemon; salt', 'Prepare sabayon, cook tapioca, assemble oysters with caviar on top.', 1),
('The Black Truffle Explosion', 'Single raviolo filled with hot black truffle liquid.', 'Pasta dough; black truffles; butter; veal stock; Parmesan; salt', 'Prepare ravioli, infuse liquid center with truffle oil, seal, cook briefly.', 1),
('Sound of the Sea', 'Sashimi and tapioca sand served with sea aroma elements.', 'Fresh sashimi; tapioca; herbs; seaweed; citrus', 'Assemble sashimi, prepare tapioca sand, plate with sea aroma elements.', 1),
('Risotto Cremoso con Esencia de Trufa', 'Creamy risotto flavored with truffle oil and Parmesan.', 'Arborio rice; chicken stock; white wine; butter; Parmesan; truffle oil', 'Make soffrito, toast rice, add stock gradually, finish with butter, cheese and truffle oil.', 0),
('Ensalada de Vegetales Asados - Gargouillou', 'A vibrant roasted vegetable salad with herb vinaigrette.', 'Assorted vegetables; olive oil; herbs; vinegar; salt; pepper', 'Roast vegetables, toss with herb vinaigrette, serve warm or room temperature.', 0)
;
b
-- Crear la base de datos
CREATE DATABASE ArizaDelicias CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE ArizaDelicias;

-- crear la tabla de recetas_con_estrella_michelin
CREATE TABLE recetas_con_estrella_michelin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    ingredientes TEXT,
    instrucciones TEXT,
    estrella_michelin BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
--insertar datos
INSERT INTO recetas_con_estrella_michelin (nombre, descripcion, ingredientes, instrucciones) VALUES
('Oysters and Pearls', 'A sabayon of pearl tapioca with Island Creek oysters and white sturgeon caviar.', 'Oysters; pearl tapioca; sturgeon caviar; egg yolks; butter; lemon; salt', 'Prepare sabayon, cook tapioca, assemble oysters with caviar on top.'),
('The Black Truffle Explosion', 'Single raviolo filled with hot black truffle liquid.', 'Pasta dough; black truffles; butter; veal stock; Parmesan; salt', 'Prepare ravioli, infuse liquid center with truffle oil, seal, cook briefly.'),
('Sound of the Sea', 'Sashimi and tapioca sand served with sea aroma elements.', 'Fresh sashimi; tapioca; herbs; seaweed; citrus', 'Assemble sashimi, prepare tapioca sand, plate with sea aroma elements.');






