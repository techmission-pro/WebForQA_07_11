document.querySelector('.calc-calculate').addEventListener('clic', function() {
     const num1 = +document.querySelector('[name="num1"]').value;
	 const num2 = +document.querySelector('[name="num2"]').value;
	 const op = document.querySelector('[name="op"]').value;
	 
	 let result;
	 
	 if (op ==='plus') {
		 result = num1 + num2;
	 } else if (op === 'minus'){ 
	 result = num1 - num2 ;
	 } else if (op === 'multiply ') {
		 result = num1 * num2 ;
	 } 	 else if (op === 'divide ') {
		 result = num1 / num2 ;
	 } 	 else {
		   console.error ('Wrong op!');
		   alert ('Wrong operation is selected');
	 }	   
		   
	 
     const sum = num1 + num2;

     document.querySelector('.calc-result').value=sum;
});


console.log('calc loaded');