import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// importing the components
import Stepone from "./components/Stepone";
import Steptwo from "./components/Steptwo"
import Stepthree from "./components/Stepthree";


// styles
import "./scss/app.scss"
import { unstable_renderSubtreeIntoContainer } from "react-dom";


function App() {
  // refs
  const mainContainerRef = useRef(null)
  const stepOneRef = useRef(null);
  const so = gsap.utils.selector(stepOneRef)
  const stepTwoRef = useRef(null);
  const st = gsap.utils.selector(stepTwoRef)
  const stepThreeRef = useRef(null);
  const sth = gsap.utils.selector(stepThreeRef)

  // variables
  const [count, setCount] = useState(1)
  const [stepsCount, setStepsCount] = useState(1)
  // booleans
  const [btnDisabled, setBtnDisabled] = useState(false)



  // storing timelines
  const sc = useRef();
  const s1 = useRef();
  const s2 = useRef();
  const s3 = useRef();
  // extra timeines
  const t1 = useRef();


  // initial rendering
  useEffect(() => {
    if(stepsCount===1 && mainContainerRef && stepOneRef && stepOneRef.current && mainContainerRef.current){
      // to the original place
      //----->fix
      sc.current = gsap.timeline()
      //initian Setting of Values
      // animation
      .to(mainContainerRef.current, {
        height: 75,
        width: 85,
        duration: 0.8,
      })

      s1.current = gsap.timeline()
      .to(so(".not_IconCon"), {
        fontSize: 35,
        duration: 0.5,
      })
      .to(so(".not_count"), {
        height: 18,
        width: 18,
        opacity: 1,
        duration: 0.3
      }, "<0.3")
      
      sc.current.delay(0.5);
      sc.current.add(s1.current, 0.5)
    }
  }, [stepsCount])

  // count ---2
  useEffect(() => {
      if(stepsCount === 2){
        //s1.current = 
        gsap.timeline()
        .to(so(".not_IconCon"), {
          fontSize: 0,
          duration: 0.1,
        })
        .to(so(".not_count"), {
          height: 0,
          width: 0,
          opacity: 0,
          duration: 0.3
        }, "<0.1")
        .to(stepOneRef.current, {
          height: 0,
          width: 0,
          opacity: 0
        })

        //sc.current
        gsap.timeline().to(mainContainerRef.current, {
          width: "100%",
          //border: "1px solid red"
        })

        gsap.timeline()
        .to(".S2ProgessBar", {
          width: "100%",
          delay: 1,
          duration: 7
        })
        // appearance of second
        //s2.current = 
        gsap.timeline()
        .to(stepTwoRef.current, {
          display: "grid",
          opacity: 1,
          delay:0.2 
        })
        // image
        .from(st(".twoImage"), {
          height: 0,
          width: 0,
        })
        .from(st([".twoHeading h3", ".twoHeading ul li"]), {
          fontSize: 0,
          duration: 0.3
        }, "<0.2")
        .from(st(".twoRight"), {
          height: 0,
          width: 0
        }, "<0.2")
        .to(st(".svgContainer"), {
          opacity: 1,
          duration: 0
        })
        .to(st(".circleProgress"), {
          strokeDashoffset: 180,
          duration: 0.6
        })
        .to(st(".circleProgress"), {
          strokeWidth: 35,
          duration: 0.3,
          delay: 0.6
        })
        // ind profile
        .from(st(".profile1"), {left: 20, top: -13,height: 0, width: 0, duration: 0.3, opacity: 0})
        .from(st(".profile2"), {left: 34, top:3, height: 0, width:0, duration: 0.3, opacity: 0 },"<0.1")
        .from(st(".profile3"), {left: 35, height: 15, width: 0, duration: 0.3, opacity: 0 },"<0.1")
        .from(st(".profile4"), {left: 25, top: 34, height: 0, width: 0, duration: 0.3, opacity: 0 },"<0.1")
        // closing from back delay--sec
        .to(st(".profile4"), {left: 25, top: 34, height: 0, width: 0, duration: 0.3, opacity: 0, delay: 2.5 })
        .to(st(".profile3"), {left: 35, height: 15, width: 0, duration: 0.3, opacity: 0 },"<0.1")
        .to(st(".profile2"), {left: 34, top:3, height: 0, width:0, duration: 0.3, opacity: 0 },"<0.1")
        .to(st(".profile1"), {left: 20, top: -13,height: 0, width: 0, duration: 0.3, opacity: 0}, "<0.1")
        // svg reverse
        .to(st(".circleProgress"), {
          strokeWidth: 10,
          duration: 0.3,
          delay: 0.2
        })
        // setting right to the original values--resetting timeline---later
        .to(st(".svgContainer"), {
          opacity: 0,
          duration: 0,
          delay: 0.2
        }, "<")
        .to(st(".twoRight"), {
          height: 0,
          width: 0,
          onComplete: () => {setStepsCount(stepsCount + 1)}
        }, "<0.1")
      }
  }, [stepsCount])


  useEffect(() => {
    if(stepsCount === 3){
      //s3.current = 
      gsap.timeline();

      //sc.current
      gsap.timeline().to(mainContainerRef.current, {
        // to the height of the main container
        height: 250
      })
      // step 2 shrink size
      //s2.current
      gsap.timeline().to(st(".twoImageCon"), {
        height: "2.5em",
        width: "2.5em",
        delay: 0.5
      })
      .to(st(".twoHeading h3"), {
        fontSize: 14,
        duration: 0.2
      }, "<0.1")

      // main stepthree contianer
      //s3.current
      gsap.timeline().to(stepThreeRef.current, {
        display: "grid"
      })
      .from(sth("p"), {
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay: 0.1
      }, "<0.6")
      .from(sth("h3"), {
        opacity: 0,
        y: 30
      })
      .from(sth("ul li"), {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.3
      }, "<")
      .to(".closeBtnContainer", {
        duration: 0,
        display: "block",
      }, "<")
      .from(".closeBtnContainer", {
        opacity: 0,
        duration: 0.5,
        ease: "power4.in"
      }, "<")
      // set btn appearance
      // .to()

    }
  }, [stepsCount])

 useEffect(() => {
  if(stepsCount === 4){
    // timeline btn animation
    // close section
    //sc.current
    gsap.timeline().to(".closeAnimation", {
      height: "120%",
      width: "120%",
      duration: 0.4,
    })
    .to(".closeAnimation", {
      height: "60%",
      width: "60%",
      duration: 0.4,
    })
    .to(".closeAnimation", {
      height: "100%",
      width: "100%",
      duration: 0.4,
    })
    .to(".closeAnimation", {
      height: "50%",
      width: "50%",
      duration: 0.4,
    })
    .to(".closeAnimation", {
      height: "100%",
      width: "100%",
      backgroundColor: "red",
      duration: 0.4,
    })
    .to(".closeBtn", {
      opacity: 0,
      duration: 0
    }, "<")
    .to(".PEnding", {
        opacity: 1,
        display: "grid",
        duration: 0.3
    },"<0.3")
    .to(".closeAnimation", {
      height:25,
      width: 25, 
      duration: 0.6
    }, "<")
    // fallback to the place
    .to(".closeBtnContainer", {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        setStepsCount(5)
      }
    })


    // to paragraph -----> 


    // scaleing down everything
    // setting position
    //t1.current = 
    gsap.timeline()
    .to(mainContainerRef.current, {
      top: 0,
      yPercent: 0,
      delay: 0.5
    })
    // inner Containers scaling
    .to(stepTwoRef.current, {
      opacity: 0,
      //scale: 0.5,
      duration: 0.3
    }, "<0.4")
    .to(stepThreeRef.current, {
      opacity: 0,
      //scale: 0.5,
      duration: 0.3
    }, "<")
    .to(mainContainerRef.current, {
      height: 0,
      width: 0,
      opacity: 0,
      duration:0.6,
    }, "<0.2")

  }
 }, [stepsCount])

 useEffect(() => {
  if(stepsCount ===5){
    gsap.timeline()
    .to(".reBtnContainer", {
      display: "block",
      opacity: 1,
      duration:0
    })
    .from(".reReplayBtn", {
      opacity: 0,
      height: 0,
      width: 0,
      duration: 0.6
    })
    .from(".btnReplay", {
      opacity: 0,
      y: 6,
      duration: 0.3
    }, "<0.6")
  }
 }, [stepsCount])
  return (
    <main>
      <div className = "stepsContainer" ref = {mainContainerRef}>
        <div className="S2ProgessBar">

        </div>
        {/* STEP--ONE */}
        <Stepone 
          ref = {stepOneRef}
          count = {count}
          stepsCount = {stepsCount}
          setStepsCount = {setStepsCount}
          />

        {/* STEP--TWO */}
         <Steptwo
          ref = {stepTwoRef}
          stepsCount = {stepsCount}
          setStepsCount = {setStepsCount}
        />

        {/* STEP--THREE */}
        <Stepthree 
         ref = {stepThreeRef}
        />
      </div>

      <div className = "closeBtnContainer">
          <button 
            disabled = {btnDisabled}
            className = "closeBtn" 
            onClick={(e) => {
                setStepsCount(stepsCount + 1)
                setBtnDisabled(true)
              }}>
          </button>
          <div className="closeAnimation">
          </div>
          <p className = "PEnding">1</p>
      </div>

      <div className = "reBtnContainer">
          <button 
            className = "reReplayBtn" 
            onClick={(e) => {
              e.preventDefault();
              window.location.reload()

            }}
          >
            <span className ="btnReplay">Reload</span>
          </button>
      </div>
    
    </main>
  );
}


export default App;
