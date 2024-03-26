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

  const wrapAdjective = (char) => {
    if (typeof char !== 'string' || char.length !== 1) {
      throw new Error('char must be a string with length 1');
    }
  
    return (adj) => char + adj + char;
  };
  
  const highlightWithAsterisks = wrapAdjective('*');
  const highlightWithPipes = wrapAdjective('||');
  
