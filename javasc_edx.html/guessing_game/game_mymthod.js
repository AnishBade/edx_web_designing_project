var number=4;
var guess;
var arr=[];
var won=false;
for(i=0;i<number;i++)
{
    guess=parseInt(window.prompt("GUESS A NUMBER: "));
        if(guess==number)
            {
            document.write("CONGRATULATIONS YOU HAVE GUESSDED THE CORRECT NUMBER!!!");
            won=true;   
            break;
            }
    else if(i==(number-1))
            {
            alert("NO TRIES LEFT!!!");
            }
    else if(isPrevious)
            {
                window.alert("WRONG GUESS!!!\n you have already guessed this number.\nTRY NEXT NUMBER\n you have guessed: " +arr.toString()+ "\ntries remaining:"+(4-i+1));
                i--;  
            }
    else
            {
                window.alert("WRONG GUESS!!!\n you have guessed :" + arr.toString() + "\ntries remaining:"+(4-i));
                arr[i]=guess; 
            }
              
            
    
}

if(!won)
    {
        document.write("sorry!!! YOU HAVE NO TRY LEFT!!!\nThe CORRECT ANSWER is : number");
    }
function isPreviousGuess()
{

        for(var i = 1; i < arr.length; i++)
        {

            if(arr[i] == guess)
            {
                return true;
            }
        }
        return false;
}