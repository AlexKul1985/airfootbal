function hendlerSubmit(obj) {
	var flag;
	var ctx = this;
	this.textFields = document.querySelectorAll(obj.textFields);
	this.form = document.querySelector(obj.form);
	this.classNoSubmit = obj.classNoSubmit;
	this.buttonSend = document.querySelector(obj.buttonSend);
	this._search = function(e) {
			flag=false;
			for(var i=0; i<ctx.textFields.length; i++) {
			if(ctx.textFields[i].value.trim() == "" ) {
				e.preventDefault(); 
				ctx.textFields[i].classList.add(ctx.classNoSubmit); 
				flag=true;
				console.log('Запоните поля!');
			}
			else { 
				ctx._noBorder(i);
					}	
			}
			if(!flag) {
						ctx._watchSendedBlock();
					}
			ctx._changeInput();
	};
				
				

	this._watchSendedBlock = function() {
			var parent = ctx.textFields[0].parentNode;
			parent.style.display = "none";
			parent.nextSibling.nextSibling.style.display = "block";
							
	};
	this._changeInput = function() {
		for(var i=0; i<ctx.textFields.length; i++) {
		ctx.textFields[i].addEventListener('input',function() {
				this.classList.remove(ctx.classNoSubmit); 
			});
		}

	};
	
	this._noBorder = function(i) {
		return ctx.textFields[i].classList.remove(ctx.classNoSubmit); 
	};

	this.submit = function() {
			ctx.buttonSend.addEventListener('click',ctx._search);
	};
				
}

		
		
