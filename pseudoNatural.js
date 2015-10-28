var pseudoNatural=function(elem){
	this.desc="opis";
	this.elem=elem;
	this.init();
};
pseudoNatural.prototype={
	init:function(){
		window.MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
		this.initObserver();
	},
	initObserver:function(){
		var obj=this;
		this.observer = new MutationObserver(function(mutation) {
			if(mutation[0].target.type=="checkbox"){
				mutation[0].target.checked=mutation[0].target.value==1?true:false;
			}else if(mutation[0].target.type=="radio"){
				mutation[0].target.checked=mutation[0].target.value==1?true:false;
				var name=mutation[0].target.name;
				var names=document.querySelectorAll("[name='"+name+"']:not(:checked)");	
				obj.observer.pause();
				for(var i=0;i<names.length;i++){
						names[i].value=0;
						names[i].checked=false;
				};
				obj.observer.resume();
			}
		});
					
		this.observer.elements=[];//collect data on elements which observe 
		this.observer.pause=function(){//I introduce the method to pause observer
			this.disconnect();
		};
		this.observer.resume=function(){//I introduce the method to resume observer
			var elements=this.elements;
			for(var i in elements){
				this.observe( elements[i], {attributes: true} );
			}
		};
					
		if(this.elem!=undefined){
			for(var i=0;i<this.elem.length;i++){
				this.addElement(this.elem[i]);
			}
		}
	},
	addElement:function(element){
		this.observer.observe(element, {attributes: true});
		this.observer.elements.push(element);
		if(element.type=="checkbox"){
			element.onclick = function(){this.value=this.checked?1:0;};
		}else{
			element.onclick = function(){
					var name=this.name;
					var chk=this.checked;
					var names=document.querySelectorAll("[name='"+name+"']");						
					for(var i=0;i<names.length;i++){
						names[i].value=0;names[i].checked=false;
					};
					if(chk){
						this.value=1;this.checked=true;
					}
			};
			element.nameValue=function(){
					var name=this.name;
					var names=document.querySelectorAll("[name='"+name+"']");
					for(var i=0;i<names.length;i++){
						if(names[i].value==1)return i;
					};
			};
		}
	}
};