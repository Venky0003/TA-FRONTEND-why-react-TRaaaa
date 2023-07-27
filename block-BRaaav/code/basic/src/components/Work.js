function Work() {
  return (
    <>
      <section id="work" className="work padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Our Work</h2>
            <div className="dot-wrapper">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </header>
          <div className="flex">
            <div className="flex-23">
              <img
                className="flexible-img"
                src="/images/work-image1.jpg"
                alt="Work-pic-1"
              />
            </div>
            <div className="flex-23">
              <img
                className="flexible-img"
                src="/images/work-image2.jpg"
                alt="Work-pic-2"
              />
            </div>
            <div className="flex-23">
              <img
                className="flexible-img"
                src="/images/work-image3.jpg"
                alt="Work-pic-3"
              />
            </div>
            <div className="flex-23">
              <img
                className="flexible-img"
                src="/images/work-image4.jpg"
                alt="Work-pic-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
