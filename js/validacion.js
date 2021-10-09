const form = document.querySelector('.form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const province = document.getElementById('province');
const email = document.getElementById('email');




form.addEventListener('submit',(e)=>{

    if(name.value.length===0 ){
        e.preventDefault();
        Swal.fire({
            title: 'Error!',
            text: 'The input name is empty',
            icon: 'error',
            confirmButtonText: 'ok'
          })
    }
    if(surname.value.length===0 ){
        e.preventDefault();
        Swal.fire({
            title: 'Error!',
            text: 'The input surname is empty',
            icon: 'error',
            confirmButtonText: 'ok'
          })
    }
    if(province.value.length===0 ){
        e.preventDefault();
        Swal.fire({
            title: 'Error!',
            text: 'The input province is empty',
            icon: 'error',
            confirmButtonText: 'ok'
          })
    }
    if(email.value.length===0 ){
        e.preventDefault();
        Swal.fire({
            title: 'Error!',
            text: 'The input email is empty',
            icon: 'error',
            confirmButtonText: 'ok'
          })
    }
});



