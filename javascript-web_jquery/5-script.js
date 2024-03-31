// Espera a que el DOM esté listo
$(document).ready(function(){
  // Agrega un controlador de eventos de clic al id 'add_item'
  $('#add_item').click(function(){
      // Crea un nuevo elemento <li> con el texto "Item"
      const newItem = $('<li>').text('Item');
      // Agrega el nuevo elemento <li> a la lista con la clase 'my_list'
      $('.my_list').append(newItem);
  });
});