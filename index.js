
var prompt = prompt("this is a command!")
----------------------------------------------------------------------//VARIABLES

Memory  = "0";      // initialise memory variable
Current = "0";      // value of Display ("current" value)
Operation = 0;      // Records code for eg * / etc.
MAXLENGTH = 30;     // maximum number of digits before decimal!

----------------------------------------------------------------------//ADDING A NUMBER

function AddNumber(num)          //ADD A NUMBER TO DISPLAY (kept as 'Current')
{
 	if (Current.length > MAXLENGTH){ 

 		Current = "Sorry too long!"; //limit length for displaying a number

       } else {

        if ((eval(Current) == 0) && (Current.indexOf(".") == -1)) { //don't entirely understand the indexOf 
            
            Current = num;
           } 

           else {
            Current = Current + num;
           };
    }; };

   document.Calculator.Display.value = Current;
 }

 ----------------------------------------------------------------------//ADDING DECIMALS

 function Dot()                  //PUT IN "." if appropriate.
 {
  if ( Current.length == 0)     //no leading ".", use "0."
    { 
    	Current = "0.";
    } 
    else {

    	if ( Current.indexOf(".") == -1)

    	{
          Current = Current + ".";
    };   };

  document.Calculator.Display.value = Current;

 }

----------------------------------------------------------------------//EXPONENTS

 function DoExponent() {

 	if ( Current.indexOf("e") == -1 ) {

 		Current = Current + "e0";
 		document.Calculator.Display.value = Current; 
 	}

 }

----------------------------------------------------------------------//CLEAR & CLEAR ALL

 function Clear() {
 	Current = "0";
 	document.Calculator.Display.value = Current; 

 }

 function AllClear () {
 	Current = "0";
 	Memory = "0";
 	Operation = "0";

 }

----------------------------------------------------------------------//PRESSING */- OR +

function Operate(op)            //STORE OPERATION e.g. + * / etc.
 {

  if (op.indexOf("*") > -1) {
   
   Operation = 1; 

   };       //codes for *

  if (op.indexOf("/") > -1) { 

  Operation = 2; 

  };       // slash (divide)

  if (op.indexOf("+") > -1) { 

  Operation = 3; 

  };       // sum

  if (op.indexOf("-") > -1) { 

  Operation = 4; 

  };       // difference

  Memory = Current;                 //store value

  Current = "";                     //or we could use "0"

  document.Calculator.Display.value = Current;

 }

 ----------------------------------------------------------------------//CALCULATE 

function Calculate()            //PERFORM CALCULATION (= button)
 { 

  if (Operation == 1) { 
  	Current = eval(Memory) * eval(Current); 
  };
  if (Operation == 2) { 
  	Current = eval(Memory) / eval(Current); 
  };
  if (Operation == 3) { 
  	Current = eval(Memory) + eval(Current); 
  };
  if (Operation == 4) { 
  	Current = eval(Memory) - eval(Current); 
  };

  Operation = 0;                //clear operation

  Memory    = "0";              //clear memory

  document.Calculator.Display.value = Current;

 }

 ----------------------------------------------------------------------//FIX ANY WIERD DISPLAY STUFF

function FixCurrent() {

  Current = document.Calculator.Display.value;

  Current = "" + parseFloat(Current);

  if (Current.indexOf("NaN") != -1) {

 		Current = "Sorry, I don't understand that";

    };

  document.Calculator.Display.value = Current;

 }

 ----------------------------------------------------------------------

