alert("Bienvenidos a LIBRERIA KIOTO");


function compras ()
   {
    let opcion = mostrarMenu();
    let unidadesDeCompra = 0;
    if(opcion!=6)
    {
      venderProducto(opcion);
    }
    else
    {
       alert("MUCHAS GRACIAS");
    }
   
    function mostrarMenu()
    {
       return prompt(`Seleccione una opcion: 
                     1. HOJAS A4
                     2. RESALTADORES x6
                     3. KIT GEOMETRIA
                     4. ACUARELAS x36
                     5. TALONARIO
                     6. FIN`);
      
    }

    function venderProducto(opcion)
    {
       switch (opcion) 
       {
          

         case "1":
         {
               unidades(950)
               break;
         }
         case "2":
         {
               unidades(660)
               break;
         }

         case "3":
         {
               unidades(250)
               break;
         }

         case "4":
         {
               unidades(1400)
               break;
         }

         case "5":
         {
               unidades(350)
               break;
         }

         default:
         {
            alert("Opcion invalida")
            return compras(); 
         }
             
       }   
    }
       
    function unidades(numMin)
    {
            while(unidadesDeCompra==0)
            {
               let dinero = Number(prompt("Cantidad de unidades de compra"));
               
               if(dinero ==0)
               {
                  alert("Monto invalido")
               }
               else{
                  unidadesDeCompra+=dinero;
               }
            }
            
               let cambio = unidadesDeCompra*numMin;
               alert("El costo total de su compra es AR$ " + cambio);
               alert("MUCHAS GRACIAS");    
               return compras();      
    }
    }

    compras()