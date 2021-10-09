const ejercicio1 = document.querySelector('#ejercicio1');
const ejercicio2 = document.getElementById('ejercicio2');
const ejercicio3 = document.getElementById('ejercicio3');
const ejercicio4 = document.getElementById('ejercicio4');
const ejercicio5 = document.getElementById('ejercicio5');


 function CantidadMayusculas(){
    let string = prompt("ingrese su string con y sin mayusculas");
    let mayusculas ="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let contador=0;

    for(i=0;i<mayusculas.length;i++){
        for(j=0;j<string.length;j++){
            if(string[j]===mayusculas[i]){
                contador++
            }
        }
    }
    Swal.fire({
        title: 'Su string tiene',
        text: `${contador} letras mayusculas`,
        icon: 'success',
        confirmButtonText: 'ok'
      })
 }

ejercicio1.addEventListener('click',CantidadMayusculas);

ejercicio2.addEventListener('click',()=>{

    let array=[1,2,3,4,5,7];
    for(i=0;i< array.length;i++){
        array[i]=array[i]+1;
    }
    console.log(array);
    Swal.fire({
        title: 'Su string Es',
        text: `${array} `,
        icon: 'success',
        confirmButtonText: 'ok'
      })
});
ejercicio3.addEventListener('click',()=>{

    let array=[];
    let n= prompt("ingrese un numero entero positivo");

    if(!isNaN(n) && n != null && n != "" && n>=0 ){
      
        for(i=0;i<n;i++){
            array[i]= Math.floor(Math.random()* 100);
        }
        Swal.fire({
            title: 'Vector resultante',
            text: `${array}`,
            icon: 'success',
            confirmButtonText: 'ok'
          })
    }else{
        Swal.fire({
            title: 'Error!',
            text: `Su valor ingresado es incorrecto`,
            icon: 'error',
            confirmButtonText: 'ok'
          })
    }


});
ejercicio4.addEventListener('click',()=>{

    let array=[];

    for(i=0;i<10;i++){
        array[i]= Math.floor(Math.random()* 100);
    }
    let menor=0;
     for(j=0; j < array.length; j++){
        menor=array[j];

        for(i=j+1; i<array.length; i++){
        
            if(array[i]<= menor){
                menor=array[i];
                array[i]=array[j];
                array[j]=menor;
            }
        }    
     }
    Swal.fire({
        title: `Vector aleatorio `,
        text: ` Su vector aleatorio ordenado es ${array}`,
        icon: 'success',
        confirmButtonText: 'ok'
      })
});
ejercicio5.addEventListener('click',()=>{

    let vector1=[1,2,4,6,7,8];
    let vector2=[1,2,4,5,6,7,8];

    
    let vectorFinal=[];

    for(i=0; i< vector2.length;i++){

        if(vector1[i]==vector2[i]){
            vectorFinal.push(vector1[i]);
            vectorFinal.push(vector2[i]);
        }
        else if(vector1[i]< vector2[i]){
            vectorFinal.push(vector1[i]);
            vectorFinal.push(vector2[i]);
        }
        else{
            vectorFinal.push(vector2[i]);
            vectorFinal.push(vector1[i]);
        }
    }
    Swal.fire({
        title: `Vector Ordenado `,
        text: ` Su vector ordenado es ${vectorFinal}`,
        icon: 'success',
        confirmButtonText: 'ok'
      })
});