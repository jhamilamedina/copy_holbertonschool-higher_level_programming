-- Crear la tabla second_table.
CREATE TABLE IF NOT EXISTS second_table (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(256),
	score INT
);
-- Insertar filas en second_table.
INSERT INTO second_table (id, name, score) VALUES (1, 'John', 10),
(2, 'Alex', 3),
(3, 'Bob', 14),
(4, 'George', 8);
