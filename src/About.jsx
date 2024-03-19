import {useState,useEffect} from "react";

function About() {
  const [timer,setTimer] = useState(0);

  //Mount
  useEffect(()=>{
    console.log("Hello")
  },[]);

  //Update
  useEffect(()=>{
    console.log("Timer Update")
  },[timer]);

  //Destroy
  useEffect(()=>{
    return ()=>{
      console.log("On Destroy - Bye")
    }
  },[]);
    
  return (
   
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT
                lVIfE7fqaeOVQIvQqUtL5kZuG77DH2kmlXmtORNU_3-04QLVaa42UvGlRnw&s" className = "img-fluid image"/>
            </div>
            <div className="col-lg-8">
              <h3>About - {timer}</h3>
              <button onClick={()=> setTimer(timer+1)}>+</button>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Sit nemo soluta consequuntur doloribus dicta itaque, amet iste tempore place 
                  at tempora ad nisi sapiente non quia suscipit commodi similique et!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias 
                    similique placeat repellendus voluptas officiis ducimus, tempore 
                    quas voluptatibus, tenetur perferendis officia nam. Hic aperiam 
                    culpa voluptatum autem, qui maiores, nesciunt accusantium quia 
                    sequi aliquam nihil repudiandae rem quisquam? Amet porro eum 
                    voluptatum cum enim nemo sint eveniet quia atque nihil.</p>

            </div>
        </div>
    </div>
  )
}

export default About