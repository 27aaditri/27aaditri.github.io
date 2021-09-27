var names=new Array();
names[0]="Aaditri";
names[1]="Jhaanvi";
names[2]="Juhi";
names[3]="jason";
names[4]="paul";
names[5]="Saloni";
names[6]="jai";
names[7]="chhavi";
names[8]="jonny";
names[9]="saroj";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}