//Task 1 - Pulse Oximeter Reading 1
function pulseReader(pulseLevel){
  if(pulseLevel > 95){
    console.log("Normal Reading.");
  }else if(pulseLevel === 95){
    console.log("Acceptable to continue home monitoring.");
  }else if((pulseLevel >= 92) && (pulseLevel < 95)){
    console.log("Seek advice from health professionals.");
  }else if(pulseLevel < 92){
    console.log("Seek urgent medical advice.");
  }
}
console.log("--TASK 1--");
pulseReader(96);
pulseReader(95);
pulseReader(94);
pulseReader(92);
pulseReader(91);


//Task 2 - Pulse Oximeter Reading 2
function pulseReadertwo(beatsPerMin){
  if((beatsPerMin >= 40) && (beatsPerMin <= 100)){
    console.log("Normal Reading.");
  }else if((beatsPerMin >= 101) && (beatsPerMin <= 109)){
    console.log("Acceptable to continue home monitoring.");
  }else if((beatsPerMin >= 110) && (beatsPerMin <= 130)){
    console.log("Seek advice from health professionals.");
  }else if(beatsPerMin >= 131){
    console.log("Seek urgent medical advice.");
  }
}
console.log("--TASK 2--");
pulseReadertwo(40);
pulseReadertwo(100);
pulseReadertwo(101);
pulseReadertwo(109);
pulseReadertwo(110);
pulseReadertwo(130);
pulseReadertwo(131);

