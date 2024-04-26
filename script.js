
 var pessoa = {
    peso:0,
    altura:0,
    imc: function() {
      let peso = this.peso = document.querySelector("#peso").value;
      let altura = this.altura = document.querySelector("#altura").value;
      if(peso.length >0 && altura.length > 0)
      {
         let peso = this.peso = document.querySelector("#peso").value;
         let altura = this.altura = document.querySelector("#altura").value;
         let alturaNew = altura.replace(",", ".");
         let imc = (peso / alturaNew ** 2);
        
        document.querySelector("#resultadoimc").innerHTML = imc.toFixed(2)
      }
      else{
         window.alert("Preencha corretamente os campos para calcular!")
      }
    
 },
 delete: function(){
   
    document.querySelector("#resultadoimc").innerHTML = '';
    document.querySelector("#peso").value = "";
    document.querySelector("#altura").value = "";

 }
}