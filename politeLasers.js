function getLaserSetting(word) {
    if(word === 'please'){
        return 'OFF';
    }
    else {
        return 'ON';
    }
  }
  
  const currentSetting = getLaserSetting();
  console.log('The current laser setting is: ' + currentSetting);
