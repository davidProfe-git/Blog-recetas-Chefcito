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
('Pasta Carbonara', 
 '400g pasta, 200g panceta, 4 huevos, 100g queso parmesano, sal, pimienta', 
 '1. Cocinar la pasta en agua con sal. 2. Freír la panceta hasta que esté crujiente. 3. Batir huevos con queso. 4. Mezclar pasta caliente con panceta, retirar del fuego y agregar huevos batiendo rápido. 5. Servir inmediatamente.',
 30,
 'https://images.unsplash.com/photo-1612874742237-6526221588e3'),

('Ensalada César',
 'Lechuga romana, pollo a la parrilla, crutones, queso parmesano, aderezo césar',
 '1. Lavar y cortar la lechuga. 2. Cocinar y cortar el pollo en tiras. 3. Mezclar lechuga, pollo y crutones. 4. Agregar aderezo y queso rallado.',
 15,
 'https://images.unsplash.com/photo-1546793665-c74683f339c1');


 -- Limpiar la tabla primero (opcional)
-- TRUNCATE TABLE recetas;

-- Insertar 10 recetas variadas
INSERT INTO recetas (titulo, ingredientes, instrucciones, tiempo_preparacion, imagen_url) VALUES

('Pasta Carbonara', 
 '400g pasta, 200g panceta, 4 huevos, 100g queso parmesano, sal, pimienta negra', 
 '1. Cocinar la pasta en agua con sal. 2. Freír la panceta hasta que esté crujiente. 3. Batir huevos con queso parmesano rallado. 4. Escurrir la pasta y mezclar con panceta. 5. Retirar del fuego y agregar huevos batiendo rápido para que no se cocinen. 6. Servir con pimienta negra recién molida.',
 30,
 'https://images.unsplash.com/photo-1612874742237-6526221588e3'),

('Tacos al Pastor',
 '500g carne de cerdo, 2 piñas, cilantro, cebolla, limones, tortillas, achiote, chiles, especias mexicanas',
 '1. Marinar la carne con achiote y especias por 2 horas. 2. Asar la carne en trompo o sartén. 3. Cortar en trozos pequeños. 4. Calentar tortillas. 5. Servir con piña asada, cilantro, cebolla y limón.',
 45,
 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47'),

('Ensalada César',
 'Lechuga romana, 200g pollo, crutones, 50g queso parmesano, aderezo césar, aceite de oliva',
 '1. Lavar y cortar la lechuga en trozos. 2. Cocinar el pollo a la parrilla y cortar en tiras. 3. Preparar crutones tostando pan con aceite. 4. Mezclar lechuga, pollo y crutones. 5. Agregar aderezo césar y queso parmesano rallado. 6. Servir inmediatamente.',
 20,
 'https://images.unsplash.com/photo-1546793665-c74683f339c1'),

('Sushi Roll California',
 '300g arroz para sushi, alga nori, aguacate, pepino, surimi, vinagre de arroz, sésamo, salsa de soya',
 '1. Cocinar el arroz y mezclarlo con vinagre de arroz. 2. Colocar el alga nori sobre esterilla de bambú. 3. Extender arroz sobre el alga. 4. Voltear y colocar aguacate, pepino y surimi. 5. Enrollar con la esterilla. 6. Cortar en 8 piezas y decorar con sésamo.',
 40,
 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351'),

('Pizza Margarita',
 '500g harina, levadura, 400g tomate triturado, 300g mozzarella, albahaca fresca, aceite de oliva, sal',
 '1. Preparar masa con harina, agua, levadura y sal. Dejar reposar 1 hora. 2. Extender la masa en forma circular. 3. Agregar salsa de tomate. 4. Distribuir mozzarella en trozos. 5. Hornear a 250°C por 12-15 minutos. 6. Decorar con albahaca fresca y aceite de oliva.',
 90,
 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002'),

('Guacamole Casero',
 '3 aguacates maduros, 1 tomate, 1/2 cebolla, cilantro, 2 limones, jalapeño, sal, pimienta',
 '1. Cortar aguacates por la mitad y extraer la pulpa. 2. Machacar con tenedor dejando algunos trozos. 3. Picar finamente tomate, cebolla, cilantro y jalapeño. 4. Mezclar todo con jugo de limón. 5. Sazonar con sal y pimienta. 6. Servir con totopos.',
 15,
 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c'),

('Brownie de Chocolate',
 '200g chocolate oscuro, 150g mantequilla, 200g azúcar, 3 huevos, 100g harina, cacao en polvo, nueces',
 '1. Derretir chocolate con mantequilla a baño maría. 2. Batir huevos con azúcar hasta espumar. 3. Incorporar chocolate derretido. 4. Añadir harina tamizada y cacao. 5. Agregar nueces picadas. 6. Verter en molde y hornear a 180°C por 25 minutos.',
 50,
 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c'),

('Pad Thai',
 '200g fideos de arroz, camarones, huevos, brotes de soya, cacahuates, salsa de pescado, tamarindo, ajo, cebollín',
 '1. Remojar fideos en agua caliente. 2. Saltear ajo y camarones. 3. Agregar huevo revuelto. 4. Incorporar fideos escurridos. 5. Añadir salsa de pescado, tamarindo y azúcar. 6. Mezclar con brotes de soya. 7. Servir con cacahuates triturados y limón.',
 35,
 'https://images.unsplash.com/photo-1559314809-0d155014e29e'),

('Tiramisú Italiano',
 '500g queso mascarpone, 4 huevos, 100g azúcar, 300g bizcochos de soletilla, café expreso, cacao en polvo, licor amaretto',
 '1. Separar yemas y claras de huevo. 2. Batir yemas con azúcar hasta blanquear. 3. Incorporar mascarpone. 4. Batir claras a punto de nieve y mezclar suavemente. 5. Mojar bizcochos en café con amaretto. 6. Alternar capas de bizcocho y crema. 7. Refrigerar 4 horas y espolvorear cacao.',
 30,
 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9'),

('Hamburguesa Clásica',
 '500g carne molida de res, pan de hamburguesa, lechuga, tomate, cebolla, pepinillos, queso cheddar, ketchup, mostaza',
 '1. Formar 4 medallones de carne y sazonar con sal y pimienta. 2. Cocinar en sartén o parrilla 4 minutos por lado. 3. Agregar queso en el último minuto. 4. Tostar el pan. 5. Armar con lechuga, tomate, carne, pepinillos y salsas. 6. Servir con papas fritas.',
 25,
 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd');