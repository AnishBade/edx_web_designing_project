var number=4;
var limit=5;
var guess;
var arr=[];
var won=false;
for(i=0;i<limit;i++)
{
    guess=parseInt(window.prompt("GUESS A NUMBER between 0 and 20 : "));

    if( (!(isNaN(guess))) && 0<guess<20 )
    {
 
        if(guess==number)
            {
            document.getElementById("congrats").innerHTML+="CONGRATULATIONS YOU HAVE GUESSDED THE CORRECT NUMBER!!!";
            won=true;   
            break;
            }

        else if(isPreviousGuess())
            {
                
                window.alert("WRONG GUESS!!!\n you have already guessed this number.\nTRY NEXT NUMBER\n you have guessed: " +arr.toString()+ "\ntries remaining:"+(4-i+1));
                i--;  
            }
        else
            {
                arr[i]=guess; 
                window.alert("WRONG GUESS!!!\n you have guessed :" + arr.toString() + "\ntries remaining:"+(4-i));
               
            }
    }

    else
    {
        alert("INVALID NUMBER\nYOUR NUMBER IS EITHER 'NOT A NUMBER' OR IS 'BEYOND THE RANGE'\n ENTER A VALID NUMBER:\n\nyou have guessed: " + arr.toString()+ "\ntries remaining:"+(4-i+1));
        i--;
    }
              
}

if(!won)
    {
        document.getElementById("gameover").innerHTML+="sorry!!! YOU HAVE NO TRY LEFT!!!\nThe CORRECT ANSWER is : "+ number;
    }

function isPreviousGuess()
{

        for(var j = 1; j < arr.length; j++)
        {

            if(arr[j] == guess)
            {
                return true;
            }
        }
        return false;
}