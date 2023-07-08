function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case "A" :
            answer = "i am capital latter";
            break;
        case 1:
            answer = "i am a number";
            break;
        case 'a':
            answer = "i am small letter";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
    }
    document.write(answer);
}

chainToSwitch(1);
document.write('hello world');