let path = process.env.PUBLIC_URL;

export default function Content() {
    return (
        <div>
        <div className="container about" id="about">
        <h1>About Me.</h1>
        <img className="profile-pic" src={path + '/image/profile.jpg'} alt="cindys profile pic"/>
        
            <p>I'm from Taipei, Taiwan, and I'm a junior studying <span className="underline-decor">computer science</span> at Northwestern University.
              I'm very interested in human-computer interaction, research, and software engineering.</p>
            <p>I love coffee, cats, memes, food, and traveling! 
            <br/>(I took all the pictures above were taken during my trips!)
            </p>
    
            <a className="btn btn-lg btn-info" href={path + "/Cindy_Hu_2022_internship.pdf"} target="_blank" rel="noreferrer">My Resume</a>
    
      </div>
        <div className="project" id="project">
                <h1 className="text-center">Experience & Project.</h1>
        </div>
        <ul className="timeline">
        <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="hexa"></span>
                <span className="flag">Meta</span>
                <span className="time-wrapper"><span className="time">June 2022 - September 2022</span></span>
              </div>
              <div className="desc">
                <h5>Software Engineer Intern</h5>
                I built a platform for improving URL sharing experience and making data analysis easier on Facebook and Messenger. 
              </div>
            </div>
          </li>
        <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="hexa"></span>
                <span className="flag">Delta Lab</span>
                <span className="time-wrapper"><span className="time">September 2021 - December 2022</span></span>
              </div>
              <div className="desc">
                <h5>Undergraduate Researcher</h5>
                I worked on a research project that explores possibilites to make friends with people outside of your daily social circles.
            </div>
            </div>
          </li>
      
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="hexa"></span>
                <span className="flag">CS 330: HCI</span>
                <span className="time-wrapper"><span className="time">September 2021 - December 2022</span></span>
              </div>
              
              <div className="desc">
                <h5>Peer Mentor</h5>
                I hosted weekly design studio sessions and mentored 4 teams of 5 students with quarter-long design projects.
              </div>
            </div>
          </li>
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="hexa"></span>
                <span className="flag">Amazon.com</span>
                <span className="time-wrapper"><span className="time">June 2021 - September 2021</span></span>
              </div>
              
              <div className="desc">
                <h5>Software Developer Intern</h5>
                 I created a new optimization service in AWS based on one of the team's current services 
                 that prioritizes inbound loads at Amazon's sort centers worldwide. 
                 <span className="desc-note">(AWS products used: ECS/Fargate, S3, DynamoDB, AWS EventBridge, Cloud Development Kit)</span>
              </div>
            </div>
          </li>
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="flag">Delta Lab</span>
              <span className="time-wrapper"><span className="time">June 2020 - Feburary 2021</span></span>
            </div>
            <div className="desc">
              <h5>Research Assistant</h5>
              Delta Lab is a HCI lab at Northwestern. We built an algorithm that can identify moments of students struggling with programming. 
              The paper is publised at Artificial Intelligence in Education conference in April 2021</div>
          </div>
        </li>

        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="flag">DISC</span>
              <span className="time-wrapper"><span className="time">January 2020 - June 2022</span></span>
            </div>
            <div className="desc">
                <h5>Operations Chair (March 2020 - June 2022)</h5>
                We are a student org that dedicates to expand technology for social good. As the ops chair, I manage our funds and handle operation details.
                 <h5>Team Project (Jan 2020 - June 2020)</h5>
                 <div>We made an informational website for advocating accessory dwelling units (ADU) to help easing the housing crisis in Chicagoland area.
                     (Client: Evanston Development Cooperative)</div>
                </div>
          </div>
        </li>
    
      </ul>
        </div>
       
    )

}