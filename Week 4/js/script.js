var names=new Array();
names[0]="Yaakov";
names[1]="Chaikin";
names[2]="Talha";
names[3]="Hossain";
names[4]="Khan";
names[5]="John";
names[6]="Doe";
names[7]="Joe";
names[8]="Ali";
names[9]="Arnav";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
