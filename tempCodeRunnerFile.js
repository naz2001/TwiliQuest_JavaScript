class Materializer {
    constructor(targetName) {
        
        this.target = targetName;
    }
     
    activated = false;
    
    activate(){
        this.activated = true ;
    }

    materialize()
    {
        if(this.activated === true)
        return m.target;
    }
   