import React, { useState } from "react";
import "./Hero.css";
import Events from "./Events";
import Navbar from "./Navbar";

function Hero() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

//   const events = [
//     {
//       name: "Rock Night",
//       desc: "Feel the rhythm and energy as bands battle it out under the stars.",
//     },
//     {
//       name: "Mono-Act",
//       desc: "One stage. One performer. Infinite emotions.",
//     },
//     {
//       name: "Dance Off",
//       desc: "Groove, spin, and own the floor in the ultimate dance showdown.",
//     },
//     {
//       name: "Open Mic",
//       desc: "Sing, rhyme, or tell your story – the spotlight is yours.",
//     },
//     {
//       name: "Art Corner",
//       desc: "Express creativity through brushes, pixels, or pure imagination.",
//     },
//     {
//       name: "Tech Quiz",
//       desc: "Put your tech knowledge to the test in fast-paced quiz rounds.",
//     },
//   ];

    const events = [
    [
      {
        "id": 1,
        "round": 1,
        "event_name": "Group Dance",
        "date": "November 7, 2025",
        "time": "2:00 PM",
        "description": "Bring your crew together and set the stage on fire! Groove, spin, and tell a story with every move, leaving the audience amazed.",
        "rules": "Time limit including stage setup: 5+2min. Music and dance style can be either Western or Contemporary \n.Music must be submitted to the event head one day before the event. Usage of powder, fire, water and smoke will result in disqualification. \n Team: 6 to 12 members. \nThere should be no vulgarity in the choice of songs and attire. \n The judges' decision will be considered final.",
        "stars": "5-Star",
        "registration_fee": "Rs 500",
        "prize_money": "1st Place: Rs 5000, 2nd Place: Rs 3000",
        "venue": "Main Stage",
        "contacts": ["Rakshith - 9880747387", "Medha Sanjeev - 7892006961"]
      },
      {
        "id": 2,
        "round": 1,
        "event_name": "Nukkad Natak (Street Play)",
        "date": "November 7, 2025",
        "time": "11:30 AM",
        "description": "Take the streets to the stage! Share powerful stories, spark awareness, and entertain with energy, emotion, and creativity.",
        "rules": "Theme: Social awareness. Evaluated based on script quality, originality, performance level, team coordination and execution. Negative marks for rule violations\n.Time limit: 12 minutes (10+2), with warning and final bells\n .Restrictions: Teams must bring their own props; recorded audio/video is not allowed \n.Vulgar or offensive content is strictly prohibited. Live musical instruments like djembe, drum, and clap box are permitted\n.Languages: Kannada, English, Hindi. Scripts are to be submitted one week in advance \n.Team: Maximum of 10+2 members.",
        "stars": "5-Star",
        "registration_fee": "Rs 500",
        "prize_money": "1st Place: Rs 5000, 2nd Place: Rs 3000",
        "venue": "Basket Ball Court",
        "contacts": ["Ankit - 9301958842", "Kushi - 9606851816"]
      },
      {
        "id": 3,
        "round": 1,
        "event_name": "Fashion Show",
        "date": "November 8, 2025",
        "time": "3:00 PM",
        "description": "Strut, pose, and dazzle like a star! Walk the ramp with style and flair, showing off creativity, costume, and confidence.",
        "rules": "Judgment will be based on theme integration, creativity with props, clothing, choreography and overall presentation. Any form of vulgarity leads to disqualification. No gender restriction on team constitution. Shoes compulsory for boys, heels compulsory for girls. Time limit: 8+2 min. Team: 10+2. Water/fire/smoke/any such elements are not allowed.",
        "stars": "5-Star",
        "registration_fee": "Rs 1000",
        "prize_money": "1st Place: Rs 10,000, 2nd Place: Rs 6000",
        "venue": "Main Stage",
        "contacts": ["Dhruv Dharmendra - 9900919334", "Evin - 8277107027"]
      },
      {
        "id": 4,
        "round": 2,
        "event_name": "Warborn: The BGMI Showdown",
        "date": "November 7, 2025",
        "time": "11:00 AM",
        "description": "Dive into the chaos where strategy meets skill! Team up, aim true, and dominate the battleground to claim victory.",
        "rules": "Emulators and modifying tools are not allowed. Unfair means such as Aimbot, trigger bot, etc. will lead to disqualification. No substitutions between games. Only in-game voice chat allowed. Team: 4 participants. 7 matches (4+3) will be held; teams with highest points win. College provides internet and seating only; players must bring their own equipment.",
        "stars": "5-Star",
        "registration_fee": "Rs 200",
        "prize_money": "1st Place: Rs 1500, 2nd Place: Rs 1000",
        "venue": "CSE Edusat Hall",
        "contacts": ["Pruthvi - 9731247977", "Pratham - 8792480999"]
      },
      {
        "id": 5,
        "round": 2,
        "event_name": "One Shot to Nirvana - Valorant",
        "date": "November 7, 2025",
        "time": "11:00 AM",
        "description": "Step into the arena where every shot matters and every move defines your legend.",
        "rules": "Each participant can only represent one team. Strictly prohibited: ESP, foul language, bots, aimbots, or any cheating. Prelims: BO1 single elimination; Finals: BO3. Match mode: Unrated. Agent bans and map picks allowed. Team: 5 participants. Time limit: 1 hour. 4 rounds total. Players must bring their own devices; internet provided.",
        "stars": "5-Star",
        "registration_fee": "Rs 250",
        "prize_money": "1st Place: Rs 1500, 2nd Place: Rs 1000",
        "venue": "CSE Labs (208)",
        "contacts": ["Varun - 9353148133", "Pratham - 8792480999"]
      },
      {
        "id": 6,
        "round": 2,
        "event_name": "Mock IPL Auction",
        "date": "November 8, 2025",
        "time": "12:30 PM",
        "description": "Step into the shoes of a franchise owner and bid your way to victory! Build your dream cricket squad and strategize your picks.",
        "rules": "Regular auction procedure. Teams bid using paddles; highest bidder gets the player. Form a squad of 11 players. Team sheets and paddles provided. 8 participants per team. Only one team per cluster allowed.",
        "stars": "5-Star",
        "registration_fee": "Rs 500",
        "prize_money": "1st Place: Rs 1500, 2nd Place: Rs 1000",
        "venue": "MBA 3rd Floor",
        "contacts": ["Nihal - 8660919088", "Yashvardhan - 9620793629"]
      },
      {
        "id": 7,
        "round": 2,
        "event_name": "Murder Mystery",
        "date": "November 8, 2025",
        "time": "12:30 PM",
        "description": "Put on your detective hat and dive into a world of suspense. Follow clues, outsmart rivals, and unravel the mystery before time runs out.",
        "rules": "Teams must adhere to time limits. Tampering of clues or malpractice leads to disqualification. Rules for each round will be briefed beforehand. Judges' decisions are final. Teams of 3 members.",
        "stars": "5-Star",
        "registration_fee": "Rs 200",
        "prize_money": "1st Place: Rs 1500, 2nd Place: Rs 1000",
        "venue": "Mech Block Quadrangle",
        "contacts": ["Kushi - 9606851816", "Raashi - 9019892117"]
      },
      {
        "id": 8,
        "round": 2,
        "event_name": "Short Film",
        "date": "November 8, 2025",
        "time": "11:00 AM",
        "description": "Bring your cluster’s story to life on screen! Capture its spirit, people, and uniqueness in a creative short film.",
        "rules": "Film must represent your cluster’s identity, spirit, and traditions. Positive and respectful content only. Max duration: 10 minutes. Submit before Nov 6.",
        "stars": "5-Star",
        "registration_fee": "Rs 500",
        "prize_money": "1st Place: Rs 5000, 2nd Place: Rs 3000",
        "venue": "Main Stage",
        "contacts": ["Varun - 9353149133", "Manushree - 7975294599"]
      },
      {
        "id": 9,
        "round": 1,
        "event_name": "Western Vocal Solo",
        "date": "November 8, 2025",
        "time": "10:00 AM",
        "description": "Step up and sing your favorite English track. Hit the right notes and make the stage your own.",
        "rules": "Time limit: 4+1 minutes. Karaoke/1 accompanist allowed. Submit music in pen drive before event.",
        "stars": "3-Star",
        "registration_fee": "Rs 100",
        "prize_money": "1st Place: Rs 750, 2nd Place: Rs 500",
        "venue": "MBA 3rd Floor Hall",
        "contacts": ["Samarth M G - 9740872414", "Vismai - 7975680033"]
      },
      {
        "id": 10,
        "round": 1,
        "event_name": "Classical Vocal Solo",
        "date": "November 7, 2025",
        "time": "11:00 AM",
        "description": "Experience the magic of tradition with your favorite raga. Sing with clarity, control, and emotion.",
        "rules": "Time limit: 5+1 minutes. Styles: Carnatic/Hindustani. 1 accompanist allowed. Submit karaoke music before event.",
        "stars": "3-Star",
        "registration_fee": "Rs 100",
        "prize_money": "1st Place: Rs 750, 2nd Place: Rs 500",
        "venue": "MBA 2nd Floor",
        "contacts": ["Amrutha - 9482008240", "Vismai - 7975680033"]
      },
      {
        "id": 11,
        "round": 1,
        "event_name": "Indian Cinema Solo",
        "date": "November 8, 2025",
        "time": "10:00 AM",
        "description": "Bring cinematic energy to the stage with your favorite Indian song.",
        "rules": "Time limit: 4+1 minutes. Karaoke/1 accompanist allowed. Any Indian language. Submit karaoke before event.",
        "stars": "3-Star",
        "registration_fee": "Rs 100",
        "prize_money": "1st Prize: Rs 750, 2nd Prize: Rs 500",
        "venue": "MBA Seminar 2nd Floor",
        "contacts": ["Prahalada Simha - 7975311998", "Medha R - 9036532266"]
      },
        {
          "id": 12,
          "round": 1,
          "event_name": "INSTRUMENTAL SOLO",
          "date": "NOVEMBER 7, 2025",
          "time": "11:00 AM",
          "description": "Let your instrument tell your story. Play smooth, flowing music, show your skill, and let the melody speak for itself.",
          "rules": "Time limit : 4 + 1 Minutes. Karaoke / 1 accompanist Allowed. Participants must bring the karaoke music in a pen drive and submit it to the organizer before the event starts. Participants are requested to carry their own instruments. No background track allowed. 1 accompanist permitted.",
          "stars": "3-STAR",
          "registration_fee": "RS 100",
          "prize_money": {
            "1st_place": "RS 750",
            "2nd_place": "RS 500"
          },
          "venue": "MBA 3RD FLOOR",
          "contacts": [
            {"name": "THUSHAAR", "phone": "9481267372"},
            {"name": "MANYA", "phone": "8296702691"}
          ]
        },
        {
          "id": 13,
          "round": 1,
          "event_name": "INDIAN SOLO DANCE",
          "date": "NOVEMBER 8, 2025",
          "time": "11:00 AM",
          "description": "Express yourself through rhythm and grace. Combine movement with expression, whether fast or slow, and end with a powerful pose.",
          "rules": "Time limit including stage setup: 3+1 min. Dance styles allowed- classical and semiclassical. Music must be submitted to the event head one day before the event. STARS : 3-STAR Usage of powder, fire, water and smoke will result in disqualification. There should be no vulgarity in the choice of songs and attire. The judges' decision will be considered final.",
          "stars": "3-STAR",
          "registration_fee": "RS 100",
          "prize_money": {
            "1st_place": "RS 750",
            "2nd_place": "RS 500"
          },
          "venue": "MINI AUDITORIUM",
          "contacts": [
            {"name": "SREELAKSHMI P M", "phone": "8951234552"},
            {"name": "SUPRITHI", "phone": "7760377484"}
          ]
        },
        {
          "id": 14,
          "round": 1,
          "event_name": "WESTERN SOLO DANCE",
          "date": "NOVEMBER 7, 2025",
          "time": "2:30 PM",
          "description": "Own the floor with sharp, confident moves. Keep your energy high, stay in sync with the beat, and make your performance unforgettable.",
          "rules": "Time limit including stage setup: 3+1min. Music and dance style must be only Western. Music must be submitted to the event head one day before the event. STARS : 1-STAR Usage of powder, fire, water and smoke will result in disqualification. There should be no vulgarity in the choice of songs and attire. The judges' decision will be considered final.",
          "stars": "1-STAR",
          "registration_fee": "RS 100",
          "prize_money": {
            "1st_place": "RS 750",
            "2nd_place": "RS 500"
          },
          "venue": "MBA 3RD FLOOR",
          "contacts": [
            {"name": "SHREYAS", "phone": "7259735397"},
            {"name": "SUPRITHI", "phone": "7760377484"}
          ]
        },
        {
          "id": 15,
          "round": 2,
          "event_name": "MONO-ACT",
          "date": "NOVEMBER 8, 2025",
          "time": "11:30 AM",
          "description": "One performer, endless possibilities. Switch between emotions and characters, and leave the audience with a memorable ending.",
          "rules": "Evaluated based on script quality, originality, performance level, and execution. Vulgar or offensive content is strictly prohibited. Negative marks for rule violations. Languages : Kannada, English, Hindi. Judges' decisions are final. Participants must submit their soundtracks and scripts to the event coordinators. Time limit : 5 minutes(4+1)",
          "stars": "3-STAR",
          "registration_fee": "RS100",
          "prize_money": {
            "1st_place": "RS 750",
            "2nd_place": "RS 500"
          },
          "venue": "ECE HI-TECH LAB",
          "contacts": [
            {"name": "SIDDHARTH", "phone": "9019978285"},
            {"name": "SINCHANA SURESH", "phone": "9972297867"}
          ]
        },
          {
            "id": 16,
            "round": 2,
            "event_name": "BEG BORROW OR STEAL",
            "date": "NOVEMBER 8, 2025",
            "time": "11:30 AM",
            "description": "Fast-paced and full of surprises. Think quickly, persuade creatively, and grab what you need before the clock runs out.",
            "rules": "The teams will be provided with a list of items and have to get these items by : begging, borrowing or stealing within the time limit. Teams exceeding the time limit will be disqualified. Items collected must be returned back to their rightful owners. The organizing committee is not responsible for any missing / collected items. Teams must beg, borrow or steal within the campus only. Further rules will be explained at the venue. Use of vehicles is prohibited.",
            "stars": "3-STAR",
            "time_limit": "40 mins",
            "team": "Team of 2",
            "registration_fee": "RS 100",
            "prize_money": {
              "1st_place": "RS 750",
              "2nd_place": "RS 500"
            },
            "venue": "GALLERY",
            "contacts": [
              {"name": "POORVIKA", "phone": "8296069265"},
              {"name": "KUSHI", "phone": "9606851816"}
            ]
          },
          {
            "id": 17,
            "round": 2,
            "event_name": "OTAKU ODYSSEY",
            "subtitle": "THE ULTIMATE ANIME QUIZ",
            "date": "NOVEMBER 8, 2025",
            "time": "11:00 AM",
            "description": "For the true anime fans. Answer quickly, trust your knowledge, and prove how deep your fandom goes.",
            "rules": "Rules for every round will be briefed before the start of the round. No use of mobile phones or any external help during the event. Stationery (pen and a sheet of paper) will be provided to the participants.",
            "no_of_rounds": 3,
            "team": "Team of 2",
            "stars": "3-STAR",
            "registration_fee": "RS 100",
            "prize_money": {
              "1st_place": "RS 750",
              "2nd_place": "RS 500"
            },
            "venue": "MECH CLASSROOM",
            "contacts": [
              {"name": "SIDDARTH", "phone": "6301918383"},
              {"name": "SHREEYA", "phone": "8792387952"}
            ]
          },
          {
            "id": 18,
            "round": 2,
            "event_name": "CHESS 960",
            "date": "NOVEMBER 7, 2025",
            "time": "12:00 PM",
            "description": "Chess with a twist. Start with a random board, adapt your strategy, and outthink your opponent. Every move counts.",
            "rules": "Standard rules of Chess 960 apply. Further details for which will be explained in the venue. Participants must create an account on chess.com and the username must be submitted in the registration forms. Participants must get their own devices with internet connection.",
            "time_controls": "5 min",
            "no_of_participants": 1,
            "stars": "3-STAR",
            "registration_fee": "RS 100",
            "prize_money": {
              "1st_place": "RS 750",
              "2nd_place": "RS 500"
            },
            "venue": "ADMIN BLOCK SEMINAR HALL",
            "contacts": [
              {"name": "SIDDARTH", "phone": "6301918383"},
              {"name": "AAMINA", "phone": "9019980163"}
            ]
          },
          {
            "id": 19,
            "round": 2,
            "event_name": "RAP BATTLE",
            "date": "NOVEMBER 8, 2025",
            "time": "2:00 PM",
            "description": "Step into the spotlight and trade rhymes. Show off your wordplay, flow, and punchlines. Let your rhythm and delivery win the crowd.",
            "rules": "Time limit : The event consists of 2 rounds. The participants will perform individually with a time limit of 1-2 minutes for the 1st round. The 2nd round will be a one-on-one face off between two participants. Contestants must perform a song with original lyrics; they may use any beat of their choice. Languages : Kannada, English, Hindi. Solo Event. No vulgar or inappropriate language is permitted during performances.",
            "stars": "1-STAR",
            "registration_fee": "RS 100",
            "prize_money": {
              "1st_place": "RS 750",
              "2nd_place": "RS 500"
            },
            "venue": "MBA 2ND FLOOR",
            "contacts": [
              {"name": "SUDHANVA H A", "phone": "9741121998"},
              {"name": "ANKITHA", "phone": "7483186576"}
            ]
          },
          {
            "id": 20,
            "round": 1,
            "event_name": "CONTEMPORARY DANCE",
            "date": "NOVEMBER 7, 2025",
            "time": "11:30 AM",
            "description": "Two dancers, one stage. Match timing, energy, and expression. Move as one and make the performance unforgettable.",
            "rules": "Time limit including stage setup: 4+1min. Any dance form is allowed. Music must be submitted to the event head one day before the event. Usage of powder, fire, water and smoke will result in disqualification. Team size : 2. There should be no vulgarity in the choice of songs and attire. The judges' decision will be considered final.",
            "stars": "1-STAR",
            "registration_fee": "RS 100",
            "prize_money": {
              "1st_place": "RS 750",
              "2nd_place": "RS 500"
            },
            "venue": "MAIN STAGE",
            "contacts": [
              {"name": "SHREYA S", "phone": "9739576892"},
              {"name": "MANUSHREE", "phone": "7975294599"}
            ]
          }
        ]
        
      

  ];

  const openModal = (eventName) => {
    setSelectedEvent(eventName);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="app">
  
      {/* Hero Section */}
      <section className="hero">
        <div className="cosmic-bg"></div>
        <div className="hero-content">
          <img src="https://res.cloudinary.com/drvzer725/image/upload/v1760434793/logo_final_1_a4ysyo.png" alt="Parichay Nirvana" className="hero-logo" />
          <h1 className="hero-title">PARICHAY</h1>
          <p className="hero-subtitle">NIRVANA</p>
        </div>
      </section>
      <Events />
    </div>
  );
}

export default Hero;
