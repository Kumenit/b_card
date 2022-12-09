import React from "react";

    function New_thing()
    {
         // const [result,set]=React.useState("call");
         // console.log(result);

        const [thing,set]=React.useState(["thing 1"]);
        const map1=thing.map(item=><p key={item}>{item}</p>)

        function change()
    {
        thing[thing.length]="thing "+(thing.length+1);
        console.log(thing);
        set(prevstat => [...prevstat]);

    }

        return(
          <div className="newthing">
            <button onClick={change}>new thing</button>
            {map1}
          </div>
        )
    }
   
    
export default New_thing;