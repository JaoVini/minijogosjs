var sorteio = Math.floor(Math.random() * 6 + 1);

switch(sorteio){
    case 1:
        document.getElementById("face1").src="img/1.PNG";
        break;

        case 2:
            document.getElementById("face1").src="img/2.PNG";
            break;

        case 3:
            document.getElementById("face1").src="img/3.PNG";
            break;
        
        case 4:
            document.getElementById("face1").src="img/4.PNG";
            break;
        
        case 5:
            document.getElementById("face1").src="img/5.PNG";
            break;
        
        case 5:
            document.getElementById("face1").src="img/6.PNG";
            break;
        default:
            // caso contrário
            break;

}