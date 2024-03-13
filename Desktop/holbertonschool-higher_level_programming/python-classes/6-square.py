#!/usr/bin/python3
"""Definición de una clase"""


class Square:
    """Represnta la clase Square"""
    def __init__(self, size=0, position=(0, 0)):
        """Inicializa el new square y si es entero, mayor
        o igual a 0
        Args:
            size(int): es el tamaño del square es igual a 0
        """
        self.size = size
        self.position = position

    @property
    def size(self):
        return self.__size

    @size.setter
    def size(self, value):
        """Definimo um metodo llamado size"""
        if type(value) is not int:
            raise TypeError("size must be an integer")
        elif value < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = value

    @property
    def position(self):
        return self.__position

    @position.setter
    def position(self, value):
        """Definimo um metodo llamado position"""
        if (type(value) is not tuple or len(value) != 2 or
                type(value[0]) is not int or
                type(value[1]) is not int or
                value[0] < 0 or value[1] < 0):
            raise TypeError("position must be a tuple of 2 positive integers")
        else:
            self.__position = value

    def area(self):
        """Devuleve el resultado del área de un cuadrado"""
        return (self.__size ** 2)

    def my_print(self):
        if self.__size == 0:
            print()
        else:
            print('\n' * self.__position[1], end="")
            for i in range(self.size):
                print(" " * self.__position[0], end="")
                print("#" * self.__size)
