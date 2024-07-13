import gsap from "gsap";
import "./App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const marqueeContainerRefs = useRef([]);

  useLayoutEffect(() => {
    const animateChars = (chars) => {
      const staggerOptions = {
        each: 0.35,
        from: "start",
        ease: "linear",
      };

      gsap.fromTo(
        chars,
        {
          fontWeight: 100,
        },
        {
          fontWeight: 900,
          duration: 1,
          ease: "none",
          stagger: staggerOptions,
          scrollTrigger: {
            trigger: chars[0].closest(".marquee-container"),
            start: "50% bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    };

    const splitText = new SplitType(".item h1", { types: "chars" });

    const marqueeContainers = document.querySelectorAll(".marquee-container");
    marqueeContainers.forEach((container, index) => {
      let start = "0%";
      let end = "-15%";

      if (index % 2 == 0) {
        start = "0%";
        end = "15%";
      }

      const marquee = container.querySelector(".marquee");
      const words = container.querySelectorAll(".item h1");

      // Ensure marquee has a defined height and overflow: auto
      marquee.style.height = "250px"; // Adjust height as needed
      marquee.style.overflow = "auto";

      gsap.fromTo(
        marquee,
        {
          x: start,
        },
        {
          x: end,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "150% top", // Adjust end position if needed
            scrub: true,
          },
        }
      );

      words.forEach((word) => {
        const chars = Array.from(word.querySelectorAll(".char"));
        if (chars.length) {
          const reverse = index % 2 !== 0;
          animateChars(chars, reverse);
        }
      });
    });
  }, []);

  return (
    <>
      <div className="container">
        <section className="hero">
          <h1>THE HERO</h1>
        </section>
        <section className="about">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos
            similique maiores quasi exercitationem aspernatur aliquid dolorum
            pariatur, commodi, autem enim. Quo laudantium hic recusandae
            adipisci corrupti in perspiciatis repellendus?Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Delectus reiciendis, voluptatem
            harum quasi eligendi recusandae fuga rerum! Expedita, porro optio,
            debitis accusamus eum minima, non enim ut sit quo praesentium.
          </p>
        </section>
        <section ref={marqueeContainerRefs} className="marquees">
          <div className="marquee-container" id="marquee-1">
            <div className="marquee">
              <div className="item">
                <img src="./peter1.jpg"></img>
              </div>
              <div className="item with-text">
                <h1>Unique</h1>
              </div>
              <div className="item">
                <img src="./peter2.jpg"></img>
              </div>
              <div className="item">
                <img src="./peter3.jpg"></img>
              </div>
              <div className="item">
                <img src="./peter4.jpg"></img>
              </div>
            </div>
          </div>
          <div className="marquee-container" id="marquee-2">
            <div className="marquee">
              <div className="item">
                <img src="./peter3.jpg"></img>
              </div>
              <div className="item">
                <img src="./peter2.jpg"></img>
              </div>
              <div className="item">
                <img src="./peter4.jpg"></img>
              </div>
              <div className="item with-text">
                <h1>Release</h1>
              </div>
              <div className="item">
                <img src="./peter1.jpg"></img>
              </div>
            </div>
          </div>
          <div className="marquee-container" id="marquee-3">
            <div className="marquee">
              <div className="item">
                <img src="./peter2.jpg"></img>
              </div>
              <div className="item with-text">
                <h1>2500</h1>
              </div>
              <div className="item">
                <img src="./peter3.jpg"></img>
              </div>
              <div className="item">
                <img src="./peter4.jpg"></img>
              </div>
              <div className="item">
                <img src="./peter1.jpg"></img>
              </div>
            </div>
          </div>
          <div className="marquee-container" id="marquee-4">
            <div className="marquee">
              <div className="item">
                <img src="./peter1.jpg"></img>
              </div>
              <div className="item">
                <img src="./peter4.jpg"></img>
              </div>
              <div className="item">
                <img src="./peter2.jpg"></img>
              </div>
              <div className="item with-text">
                <h1>Rarity</h1>
              </div>
              <div className="item">
                <img src="./peter3.jpg"></img>
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            corporis ab natus possimus cum obcaecati sapiente ducimus eum
            inventore facere? Earum inventore quisquam ullam, error assumenda
            reprehenderit nobis ab numquam! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Excepturi tempore labore facere.
            Quaerat consequuntur, eveniet atque commodi iusto repellendus odio
            quam placeat blanditiis enim ab exercitationem temporibus impedit
            labore recusandae?
          </p>
        </section>
        <section className="footer">
          <h1>THE END</h1>
        </section>
      </div>
    </>
  );
}

export default App;
