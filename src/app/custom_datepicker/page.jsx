"use-client"
import React from 'react'
import "./page.css";

const home = () => {
    $( function() {
        $( "#datepicker" ).datepicker({
            dateFormat: "dd-mm-yy"
            ,	duration: "fast"
        });
    } );
  return (
   

   
 
 <body>
 
 <div class="wrapper">
	<label for="datepicker">Pick a Date
		<input type="text" id="datepicker" autocomplete="off"/>
	</label>	
</div>
 
 </body>
 
    

  )
}

export default home