$(document).ready(() =>{
  $('.deleteUser').on('click', deleteUser);
});

function deleteUser(){

  // Confirmation
  const confirmation = confirm('Are You Sure Homie?');

  if(confirmation){
    $.ajax({
      type: 'DELETE',
      url: '/users/delete' + $(this).data('id')
    }).done((res) => {
      window.location.replace('/');
    })
  }else {
    return false;
  }

}
