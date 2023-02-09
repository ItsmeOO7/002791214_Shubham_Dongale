var newTable= document.getElementById("displayingUserInput");
     var form=document.getElementById("myForm"); //to store form information 
	 form.addEventListener("submit",submitted, clearinputfeilds); //when submit buttton pressed ,button will redirect to submitted function
	 form.addEventListener("reset",clearinputfeilds); ``

     var validFirstName=false;
	 var validLastName=false;
	 var validEmail=false;
	 var validPhone=false;
	 var validStreetaddress=false; 
	 var validCity=false; 
	 var validState=false;
	 var validZipcode=false; 

     
	 // regex checks variables
     var regExName = /^[a-zA-Z]+$/;
     var regExLastName = /^[a-zA-Z]+$/;
     var regExStreetAddress1 = /^[a-zA-Z]+$/;
     var regExCity = /^[a-zA-Z]+$/;
     var regExState= /^[a-zA-Z]+$/;
     var regExZipcode=/^[0-9]{5}(?:-[0-9]{4})?$/;
     var regExEmail = /[\w0-9\.-]*@northeastern\.edu/;
     var regExPhone = /\d{3}-?\d{3}-\d{4}$/;

     var firstName=document.getElementById("firstName");
	firstName.addEventListener("input",validate);

	var lastName=document.getElementById("lastName");
	lastName.addEventListener("input",validate);

	var emailId=document.getElementById("emailId");
	emailId.addEventListener("input",validate);

	var state=document.getElementById("state");
	state.addEventListener("input",validate);

	var phoneNumber=document.getElementById("phoneNumber");
	phoneNumber.addEventListener("input",validate);

	var streetAddress1=document.getElementById("streetAddress1");
	streetAddress1.addEventListener("input",validate);

    var StreetAddress2=document.getElementById("streetAddress2");
	StreetAddress2.addEventListener("input",validate);

	var city=document.getElementById("city");
	city.addEventListener("input",validate);

	var zipcode=document.getElementById("zipcode");
	zipcode.addEventListener("input",validate);

    function validate(e){
		console.log("validate");
		var value=e.target.value;
		console.log(value);	
        var type = this.id;
		var em = "error_" + type;

//type givess id of element

		switch(type){      
			case"firstName" :
			if(!value.trim().match(regExName)){
				document.getElementById(em).style.display="block";
				this.style.border="2px solid red";
				validFirstName=false;
			}
			else{
				document.getElementById(em).style.display="none";
				this.style.border="";
				validFirstName=true;
			}
			break;

			case"lastName" :
			if(!value.trim().match(regExLastName)){
				document.getElementById(em).style.display="block";
				this.style.border="2px solid red";
				validLastName=false;
			}
			else{
				document.getElementById(em).style.display="none";
				this.style.border="";
				validLastName=true;
			}
			break;

			case"emailId":
			if(!value.trim().match(regExEmail)){
				document.getElementById(em).style.display="block";
				this.style.border="2px solid red";
				validEmail=false;
			}
			else{
				document.getElementById(em).style.display="none";
				this.style.border="";
				validEmail=true;
			}
			break;

			case"phoneNumber":
			if(!value.trim().match(regExPhone)){
				document.getElementById(em).style.display="block";
				this.style.border="2px solid red";
		        validPhone=false;
			}
			else{
				document.getElementById(em).style.display="none";
				this.style.border="";
				validPhone=true;
			}
			break;

			case"streetAddress1":
			if(!value.trim().match(regExStreetAddress1)){
				document.getElementById(em).style.display="block";
				this.style.border="2px solid red";
				validStreetaddress=false; 
			}
			else{
				document.getElementById(em).style.display="none";
				this.style.border="";
				validStreetaddress=true; 
			}
			break;

            case"StreetAddress2":
			if(!value.trim().match(regExStreetAddress2)){
				document.getElementById(em).style.display="block";
				this.style.border="2px solid red";
				validStreetaddress=false; 
			}
			else{
				document.getElementById(em).style.display="null";
				this.style.border="";
				validStreetaddress=true; 
			}
			break;

			case"city":
			if(!value.trim().match(regExCity)){
				document.getElementById(em).style.display="block";
				this.style.border="2px solid red";
				validCity=false; 
			}
			else{
				document.getElementById(em).style.display="none";
				this.style.border="";
				validCity=true; 
			}
			break;

			case"state":
			if(!value.trim().match(regExState)){
				document.getElementById(em).style.display="block";
				this.style.border="2px solid red";
				validState=false;
			}
			else{
				document.getElementById(em).style.display="none";
				this.style.border="";
				validState=true;
			}
			break;

			case"zipcode":
			if(!value.trim().match(regExZipcode )){
				document.getElementById(em).style.display="block";
				this.style.border="2px solid red";
				validZipcode=false; 
			}
			else{
				document.getElementById(em).style.display="none";
				this.style.border="";
				validZipcode=true; 
			}
			break;
			

		}

	}

    	
	function callvalue(){
        var tFirstname=document.getElementById("firstName").value;
        var tlastName=document.getElementById("lastName").value;
        var temailId=document.getElementById("emailId").value;
        var tphoneNumber=document.getElementById("phoneNumber").value;
        var tstreetAddress1=document.getElementById("streetAddress1").value;
        var tstreetAddress2=document.getElementById("streetAddress2").value;
        var tcity=document.getElementById("city").value;
        var tstate=document.getElementById("state").value;
        var tzipcode=document.getElementById("zipcode").value;
        
       

        if (tFirstname != "" && tlastName  != "" && temailId  != "" && tphoneNumber  != "" && tstreetAddress1  != "" && tcity  != "" && tstate  != "" &&tzipcode){
           // alert(tFirstname + " " + tlastName + " " + temailId + " " + tphoneNumber + " " +tstreetAddress1 + " " +tcity + " " +tstate + " " +tzipcode);
            
           var addRow = newTable.insertRow(newTable.rows.length);

           var tFirstnameCell = addRow.insertCell(0);
           var tlastNameCell = addRow.insertCell(1);
           var temailIdCell = addRow.insertCell(2);
           var tphoneNumberCell = addRow.insertCell(3);
           var tstreetAddress1Cell = addRow.insertCell(4);
           var tstreetAddress2Cell = addRow.insertCell(5);
           var tcityCell = addRow.insertCell(6);
           var tstateCell = addRow.insertCell(7);
           var tzipcodeCell = addRow.insertCell(8);
           

           tFirstnameCell.innerHTML = tFirstname;
           tlastNameCell.innerHTML = tlastName;
           temailIdCell.innerHTML = temailId;
           tphoneNumberCell.innerHTML = tphoneNumber;
           tstreetAddress1Cell.innerHTML = tstreetAddress1;
           tstreetAddress2Cell.innerHTML = tstreetAddress2;
           tcityCell.innerHTML = tcity;
           tstateCell .innerHTML = tstate;
           tzipcodeCell.innerHTML = tzipcode ;
           




        }
        else{
           alert("one or more field empty")
        }
    }

    
	function clearinputfeilds(){

		document.getElementById("firstName").value="";
		document.getElementById("lastName").value="";
		document.getElementById("emailId").value="";
		document.getElementById("phoneNumber").value="";
		document.getElementById("streetAddress1").value="";
        document.getElementById("streetAddress2").value="";
		document.getElementById("city").value="";
		document.getElementById("state").value="";
		document.getElementById("zipcode").value="";
		document.getElementById("aboutUs").value="";
		document.getElementById("txtBox").value="";
		document.getElementById("comments").value="";
		
	}
    function checkvalue(val) {
        //Hide all jobs
        var jobs = document.querySelectorAll("#blue, #red, #green, #yellow, #white");
        [].forEach.call(jobs, function (job){
          job.style.display = 'none';
        })
      
        if (val === "blue")
          document.getElementById('blue').style.display = 'block';
        else if (val === "red")
          document.getElementById('red').style.display = 'block';
        else if (val === "green")
          document.getElementById('green').style.display = 'block';
          else if (val === "yellow")
          document.getElementById('yellow').style.display = 'block';
          else if (val === "white")
          document.getElementById('white').style.display = 'block';
      }

    s
	  function ShowHideDiv() {
        var byesid = document.getElementById("byesid");
		var bnoid= document.getElementById("bnoid");
		var ryesid= document.getElementById("ryesid");
		var rnoid = document.getElementById("rnoid");
		var gyesid = document.getElementById("gyesid");
		var gnoid = document.getElementById("gnoid");
		var yyesid = document.getElementById("yyesid");
		var ynoid = document.getElementById("ynoid");
		var wyesid = document.getElementById("wyesid");
		var wnoid = document.getElementById("wnoid");
        var dvtext = document.getElementById("dvtext");
        dvtext9.style.display = byesid.checked ? "block" : "none";
		dvtext8.style.display = bnoid.checked ? "block" : "none";
		dvtext7.style.display = ryesid.checked ? "block" : "none";
		dvtext6.style.display = rnoid.checked ? "block" : "none";
		dvtext5.style.display = gyesid.checked ? "block" : "none";
		dvtext4.style.display = gnoid.checked ? "block" : "none";
		dvtext3.style.display = yyesid.checked ? "block" : "none";
		dvtext2.style.display = ynoid.checked ? "block" : "none";
		dvtext1.style.display = wyesid.checked ? "block" : "none";
		dvtext.style.display = wnoid.checked ? "block" : "none";
    }
      

    function submitted(e) {
		e.preventDefault();
		console.log("submitted");
		console.log(validFirstName + "|" + validLastName + "|" + validEmail + "|" + validPhone + "|" + validStreetaddress + "|" + validZipcode + "|" + validCity + "|" + validState);
		if(validFirstName == true && validLastName == true && validEmail == true && validPhone== true && validStreetaddress == true && validZipcode == true && validCity == true && validState == true) {
		  callvalue()

		}
		else{

			alert("Please enter correct Details");
			
		

		}
    }
    document.getElementById("Submit").onclick=function() {
		location.href = "viewdata.html"
        document.getElementById("displayingUserInput").style.display="block";
        
        var table = document.getElementById("displayingUserInput");
        var row = table.insertRow(-1);
        var FirstName = row.insertCell(0);
        var LastName = row.insertCell(1);
        var EmailId = row.insertCell(2);
        var PhoneNumber = row.insertCell(3);
        var StreetAddress1 = row.insertCell(4);
        var StreetAddress2 = row.insertCell(5);
        var City = row.insertCell(6);
        var State = row.insertCell(7);
        var Zipcode = row.insertCell(8);
		var aboutUs = row.insertCell(9);
		var color = row.insertCell(10);
		var comment = row.insertCell(11);
        FirstName.innerHTML = document.getElementById("firstName").value;
        LastName.innerHTML = document.getElementById("lastName").value;
        EmailId.innerHTML = document.getElementById("emailId").value;
        PhoneNumber.innerHTML = document.getElementById("phoneNumber").value;
        StreetAddress1.innerHTML = document.getElementById("streetAdress1").value;
        StreetAddress2.innerHTML = document.getElementById("streetAdress2").value;
        City.innerHTML = document.getElementById("city").value;
        State.innerHTML = document.getElementById("state").value;
        Zipcode.innerHTML = document.getElementById("zipcode").value;
		aboutUs.innerHTML = document.getElementById("aboutUs").value;
		color.innerHTML = document.getElementById("txtBox").value;
		comment.innerHTML = document.getElementById("comments").value;
        
        return false;
    }

    function displayRadioButtons(){

        document.getElementById(radioButtonDisplay).innerHTML = '<input type="radio" id="html" name="fav_language" value="HTML">'
        '<label for="html">HTML</label><br>'
			'<input type="radio" id="css" name="fav_language" value="CSS">'
			'<label for="css">CSS</label><br>'
			'<input type="radio" id="javascript" name="fav_language" value="JavaScript">'
			'<label for="javascript">JavaScript</label>'
            '<p>Hello</p>'
    }
 
