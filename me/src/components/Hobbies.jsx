import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./Hobbies.css";
import { Link } from "react-router-dom";
import watchInfo from "../assets/watchInfo.json"; // Import the JSON data

function Hobbies() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [selectedDot, setSelectedDot] = useState(null);
    const [showDots, setShowDots] = useState(true); // State to manage the visibility of the dots
    const sidebarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSelectedDot(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="hobby-container">
            <h1>My Hobbies</h1>
            <h3>These are just a few of the things I like to do when I'm not working or 
                going to school. Feel free to reach out if you are interested in learning 
                about any of these, I'd be happy to talk to you about it!</h3>
            <h2><b><u>Photography</u></b></h2>
            <h3>In college, I began to find the characteristics of film photography especially alluring, 
                from the warmer colors to the artifacts. I was extremely lucky to get into the hobby at 
                a low price, as my mom had an old Yashica FX-3 (film camera) and a few lenses lying 
                around and my sister no longer wanted a Nikon D3000 (digital camera) handed down from 
                our grandma. I wasn't quite ready to get into film, so I bought a Nikon F to 
                Contax/Yashica adapter and fitted the lens to the Nikon body. This was extremely fun to 
                take photos with, and I learned a lot about manual photography, from adjusting the shutter 
                speed, ISO, and focus through trial and error.<br /><br />

                In 2024, I wanted to get a digital camera that was more compact that had similar photo 
                characteristics to my franken-camera, and I ended up with a Pentax Optio A30 after a few 
                people said the camera took photos reminiscent of a disposable camera. These were also 
                great to take quick pictures when out with friends or on vacation. Overall, one of my
                favorite quick cameras to take if I am in a hurry.
                <br /><br />
                
                I've taken a few pictures with the Yashica body, but I realized that the camera needs to
                be serviced sometime in the near future, as the shutter is sticking and the photos have
                a significant amount of light leaks. In the meantime, I've been using the Nikon to take
                more pictures, and still love taking photos with it.
            </h3>
            <div className="image-gallery">
                <h2>Nikon D3000, Yashica 50mm 1:2 f/2, digital</h2>
                <Slider {...settings}>
                    <div>
                        <img src="src/assets/tp.jpg" alt="Nikon D3000 example 0" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/lajolla.jpeg" alt="Nikon D3000 example 1" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/kyoto2.jpg" alt="Nikon D3000 example 2" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/kyoto.jpg" alt="Nikon D3000 example 3" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/launder.jpeg" alt="Nikon D3000 example 4" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/oc.JPG" alt="Nikon D3000 example 5" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/oc2.JPG" alt="Nikon D3000 example 6" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/tokyo.jpg" alt="Nikon D3000 example 7" className="gallery-image" />
                    </div>
                </Slider>
            </div>
            <div className="image-gallery">
                <h2>Pentax Optio A30, digital</h2>
                <Slider {...settings}>
                    <div>
                        <img src="src/assets/cp.jpg" alt="Pentax Optio A30 example 0" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/nyc.jpg" alt="Pentax Optio A30 example 1" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/nyc2.jpg" alt="Pentax Optio A30 example 2" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/nyc3.jpg" alt="Pentax Optio A30 example 3" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/nyc4.jpg" alt="Pentax Optio A30 example 4" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/nyc5.jpg" alt="Pentax Optio A30 example 5" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/nyc6.jpg" alt="Pentax Optio A30 example 6" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/vasona.JPG" alt="Pentax Optio A30 example 7" className="gallery-image" />
                    </div>
                </Slider>
            </div>
            <div className="image-gallery">
                <h2>Yashica FX-3, Yashica 50mm 1:2 f/2, Fujifilm C200 35mm</h2>
                <Slider {...settings}>
                    <div>
                        <img src="src/assets/yashica1.jpg" alt="Yashica FX-3 example 1" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/yashica2.jpg" alt="Yashica FX-3 example 2" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/yashica3.jpg" alt="Yashica FX-3 example 3" className="gallery-image" />
                    </div>
                </Slider>
            </div>
            <div className="image-gallery">
                <h2>Fujifilm Quicksnap 400 Disposable Camera</h2>
                <Slider {...settings}>
                    <div>
                        <img src="src/assets/dispo2.jpg" alt="Fujifilm Quicksnap example 1" className="gallery-image" />
                    </div>
                    <div>
                        <img src="src/assets/dispo1.jpg" alt="Fujifilm Quicksnap example 2" className="gallery-image" />
                    </div>
                    {/* Add more images as needed */}
                </Slider>
            </div>
            <h2><b><u><br /><br />Watches</u></b></h2>
            <h3>Since high school, I've been extremely interested in watches. I bought my first mechanical watch in March 
                2021 and shortly after, I learned of watch building and modifying. There's a huge community of people 
                dedicated to modifying Seiko watches, and it has evolved to the point where one can build a watch completely 
                from aftermarket parts. This was the basis for my first watch I made, and since then, I've made about 5-6 
                more for both myself and my friends and family. You can see more on my <a href='https://www.instagram.com/m0.watch/' target="_blank">Instagram page</a>.
            </h3>
            <div className="watch-container">
                <div className="watch-image-container">
                    <img src="src/assets/watches.jpg" alt="watch" className="watch-image"/>
                    {showDots && (
                        <>
                            <div className="dot" style={{ top: "22.5%", left: "13.5%" }} onClick={() => setSelectedDot(1)}></div>
                            <div className="dot" style={{ top: "21.5%", left: "33%" }} onClick={() => setSelectedDot(2)}></div>
                            <div className="dot" style={{ top: "43%", left: "35%" }} onClick={() => setSelectedDot(3)}></div>
                            <div className="dot" style={{ top: "40.5%", left: "52.25%" }} onClick={() => setSelectedDot(4)}></div>
                            <div className="dot" style={{ top: "64%", left: "49%" }} onClick={() => setSelectedDot(5)}></div>
                            <div className="dot" style={{ top: "54.5%", left: "68.5%" }} onClick={() => setSelectedDot(6)}></div>
                            <div className="dot" style={{ top: "76%", left: "64%" }} onClick={() => setSelectedDot(7)}></div>
                            <div className="dot" style={{ top: "71.5%", left: "84.5%" }} onClick={() => setSelectedDot(8)}></div>
                        </>
                    )}
                </div>
                {selectedDot && (
                    <div className="watch-info" ref={sidebarRef}>
                        <div>
                            <h4>{watchInfo.find(info => info.id === selectedDot).title}</h4>
                            <p>{watchInfo.find(info => info.id === selectedDot).description}</p>
                        </div>
                    </div>
                )}
            </div>
            <br />
            <button onClick={() => setShowDots(!showDots)}>
                        {showDots ? "Hide Dots" : "Show Dots"}
            </button>
        </div>
    );
}

export default Hobbies;