// code your solution here

// Function declaration for saturdayFun
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function expression for mondayWork
  const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
  
  // Function expression for wrapAdjective
function wrapAdjective(highlight = "*"){
  return function(emphatic = "special"){
   return `You are ${highlight}${emphatic}${highlight}!`;
  };
};

