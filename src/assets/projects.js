const projects = [
    {
        id: 0,
        href: {destination: 'www.google.com', text: 'View Site'},
        tags: ['Game Development', 'Experiential'],
        thumbnail: {
            src: '/projects/fortInnovate/thumb.png',
            alt: 'Fort Innovate Logo',
        },
        client: 'USAA',
        title: 'Fort Innovate',
        description: 'Fort Innovate was a mobile science center exhibit in partnership with USAA and the San Antonio DoSeum. As part of USAA’s centennial, USAA 100, they commissioned us to look back on the last 100 years of military innovations and create educational games and activities around those topics. After some research, the topics chosen were night vision, drones, satellites, and walkie talkies. <br/><br/>Each of these topics was turned into a video game. Night vision was made into an “animal find” game for younger children where a gyroscope binocular controller allowed them to direct a spotlight around a scene to locate missing zoo animals, based loosely on the real-life story of the Baghdad Zoo. <br/><br/>Drone technology was showcased in a virtual search-and-rescue operation, where drone operators are tasked with taking several pictures to locate a missing person in a remote area. Players must learn to pilot the drone as well as using the drone camera control system to successfully take the pictures. <br/><br/>Satellites were used to explore the concept of inertia in a VR space simulation. Players pilot a robot through an asteroid field in order to repair a satellite, learning about how, once in motion, a lack of friction means that the user must apply a force in the opposite direction to come to a stop. <br/><br/>Lastly, a multiplayer puzzle was created to showcase the power of walkie talkies. Each player had part of a puzzle in front of them, but needed to communicate with their partner over walkie talkie to get the other piece of the puzzle and solve it together. The puzzles also involved learning the NATO phonetic alphabet to communicate clearly. <br/><br/>All the games were created in Unity, except for the walkie-talkie game, which was HTML-based. I was directly responsible for the night vision and satellite games, and provided oversight on the drone and walkie talkie games.',
        stats: [{ header: "San Antonio Doseum", subheader: "Educational Partner" }, { header: "7 - 14", subheader: "Target Age Range" }, { header: "Miranda Cosgrove", subheader: "Celebrity Promoter" }],
        technologies: ['arudino', 'csharp', 'unity', 'javascript', 'html', 'css', 'node'],
        images: [
            {
                src: '/projects/fortInnovate/trailer.jpg',
                alt: 'Fort Innovate trailer in a parking lot.'
            },
            {
                src: '/projects/fortInnovate/nightVision.webp',
                alt: 'A young woman peers through a pair of binoculars to control a spotlight searching for an animal.'
            },{
                src: '/projects/fortInnovate/satellite.png',
                alt: 'A screenshot of a VR video game where the user is piloting a robot through an asteroid field.'
            }]
    },
    {
        id: 1,
        href: {destination: 'www.google.com', text: 'View Site'},
        tags: ['Web Development', 'Higher Ed'],
        thumbnail: {
            src: '/projects/yale/thumb.png',
            alt: 'Google Logo',
        },
        spotlight: {
            src: '/projects/yale/spotlight.png',
            alt: 'Yale student Jaida Morgan',
        },
        client: 'Yale University',
        title: 'For Humanity',
        description: 'In 2021, Yale launched the For Humanity campaign. This fundraising effort aimed to highlight the benefit that Yale University has had on humanity, showing how money contributed to Yale could lead to positive change for the world in general.<br/><br/>To that end, I put together the For Humanity campaign website to showcase some of those benefits, as well as show the progress of the campaign so far compared to its $7 billion goal. A number of Vue components were created to show contributions and departmental achievements. Additionally, I created a chartjs-based suite of data visualization components to show giving levels among various demographic subsets to engender friendly donation competition between different departments and class years.',
        stats: [{ header: "5 Billion", subheader: "Raised" }, { header: "37305", subheader: "Individual Donors" }, { header: "56.7 Million", subheader: "Reunion Giving" }],
        technologies: ['javascript', 'html', 'css', 'vue'],
        images: [{src: '/projects/yale/siteHeader.png', alt: 'Yale for Humanity site header screenshot.'},{src: '/projects/yale/site3up.png', alt: '3 content cards from the For Humanity site.'},{src: '/projects/yale/siteSubsectionHeader.png', alt: 'Yale for Humanity site subsection header screenshot.'}]
    },
    {
        id: 2,
        href: {destination: 'www.google.com', text: 'View Site'},
        tags: ['Game Development', 'Web Development', 'Experiential'],
        thumbnail: {
        src: '/projects/destinationMatch/thumb.png',
        alt: 'Monochrome map of Marriott Bonvoy destination locations.',
        },
        client: 'Marriott',
        title: 'Destination Match',
        description: 'After several years of coronavirus lockdown, people in 2021 were beginning to go on vacations and travel again. To that end, Marriott asked me to create My Destination Match, a hybrid online and in-person experiential application.<br/><br/>The web portion of Destination Match is a Tinder-esque application that shows you a series of travel photos and asks you to swipe left or right based on whether the images appeal to you. An algorithm then interprets your preferences and recommends a travel destination, along with a Marriott hotel at that destination.<br/><br/>The experience also has a promotional experiential component, first debuted at Dubai Expo 2021. A Unity-based Marriott-branded 3D globe application is displayed on a large LED wall in the Marriott section of the expo. As users complete the web application experience, their result cities are marked on the globe, along with images and highlights of that destination.',
        stats: [{ header: "105", subheader: "Possible Cities" }, { header: "Dubai Expo", subheader: "Experiential Location" }, { header: "15000", subheader: "Bonvoy Signups" }],
        technologies: ['javascript', 'html', 'css', 'vue', 'c#', 'unity'],
        images: [{src: '/projects/destinationMatch/destination.png', alt: 'Screenshot of destination selection page.'},{src: '/projects/destinationMatch/onsite.png', alt: 'In-person display with a podiumf or the website and an LED wall display for the globe.'},{src: '/projects/destinationMatch/screenshot.png', alt: '3D modeal of a globe with marriott featured destinations marked.'}]
    },
    {
        id: 3,
        href: {destination: 'www.google.com', text: 'View Site'},
        tags: ['Experiential'],
        thumbnail: {
            src: '/projects/brownsFridge/thumb.png',
            alt: 'Mini-fridge with Cleveland Browns and Bud Light branding.',
        },
        client: 'Bud Light',
        title: 'Victory Fridge',
        description: 'In 2018, the Cleveland Browns were on an incredible losing streak, having lost 17 games in a row. To give people something to root for, Bud Light tapped me to create the Bud Light Victory Fridges. These were a series of 50 locked fridges full of Bud Light that would only open when the Browns won a game. To accomplish this goal, I created a remote fridge locking mechanism using electromagnets, chains, and WiFi hotspots, then manufactured and installed the mechanism on all 50 fridges, as well as creating a software middleware and status and control dashboard.<br/><br/>The media reaction to this idea was far beyond what I expected, with writeups and coverage appearing everywhere from The Verge to The Late Show with Stephen Colbert. Cleveland fans and players were extremely receptive to the idea. When the Browns finally won, quarterback Baker Mayfield’s first question was “Did they open the Bud Light thing?”',
        stats: [{ header: "17 Game", subheader: "Losing Streak" }, { header: "50", subheader: "Fridges" }, { header: "2.6 Billion", subheader: "Earned Media Impressions" }],
        technologies: ['arduino', 'node'],
        images: [{src: '/projects/brownsFridge/knight.jpeg', alt: 'Bud Light Knight cheers in front of a wall of fridges.'},{src: '/projects/brownsFridge/shop.jpeg', alt: 'Leftover Bud Light Victory Fridges are auctioned off.'},{src: '/projects/brownsFridge/mayor.jpeg', alt: 'Man cuts a padlock off a bud light fridge.'}]
    },
    {
        id: 4,
        href: {destination: 'www.google.com', text: 'View Site'},
        tags: ['Web Development'],
        thumbnail: {
        src: '/projects/spAndMe/thumb.png',
        alt: 'SP and Me logo with radar chart.',
        },
        spotlight: {
            src: '/projects/spAndMe/spotlight.png',
            alt: 'Person holds a phone with their South Park quiz results displayed.',
        },
        client: 'Comedy Central',
        title: 'SP and Me',
        description: 'To promote the 23rd season of South Park, Comedy Central wanted to create what was, essentially, a Buzzfeed-like promotional “which character are you?” quiz. This idea was enhanced in typical South Park fashion and positioned as a parody of the genetic testing service 23 and Me. “SP and Me” was born.</br><br/>SP and Me is a quiz website that operates on a similar principle as a Myers-Briggs test – instead of tracking 4 traits for 16 different personality outcomes, it tracks 7 traits for 128 different character outcomes. After users answer 40 personality-testing questions, it provides an exact character match, as well as the next-closest character combinations based on similarity percentage. The site generates a custom radar graph for each user, which can be shared to various social media sites.<br/><br/>The site launched ahead of season 23 and enjoyed a warm audience response. Fans posted their results to Reddit and fan forums, asked questions about how to get specific characters, and even livestreamed themselves taking the quiz!',
        stats: [{ header: "128", subheader: "Character Outcomes" }, { header: "700k", subheader: "Users" }, { header: "Kenny McCormick", subheader: "Most Common Result" }],
        technologies: ['javascript', 'html', 'css'],
        images: [{src: '/projects/spAndMe/splash.jpeg', alt: 'Screenshot of SP and Me splash screen.'},{src: '/projects/spAndMe/test.jpeg', alt: 'Screenshot of testing page on SP and Me.'},{src: '/projects/spAndMe/results.jpeg', alt: 'Screenshot of results page on SP and Me.'}]
    },
    {
        id: 5,
        href: {destination: 'www.google.com', text: 'View Site'},
        tags: ['Game Development', 'Experiential'],
        thumbnail: {
        src: '/projects/artOfInnovation/thumb.png',
        alt: 'Sketch of Marriott Art of Innovation wall design',
        },
        spotlight: {
            src: '/projects/artOfInnovation/spotlight.png',
            alt: 'Woman holds hands over geodesic surface with edges lighting up.',
        },
        client: 'Marriott',
        title: 'Art of Innovation',
        description: 'Marriott’s experimental “Live Beta” hotel in Charlotte, North Carolina wanted a piece of art for its relaunch that would highlight what the company sees as the four phases of travel: Relaxation, Inspiration, Change, and Accomplishment. To that end, we created a large, freestanding wall consisting of four interactive experiences, one for each of those phases of travel.<br/><br/>The ‘Relaxation’ piece is an RGB-light illuminated enclave with an embedded heart rate reader. The heart rate reader is connected to an Arduino which interprets the data and changes the RGB color, intensity, and frequency to match your heart rate.<br/><br/>‘Inspiration’ is a giant interactive kaleidoscope. A kaleidoscopic view of an imaginary Marriott Hotel skyline is rear-projected onto two panels, and interacting with one of the several pieces of conductive paint around the panels causes the kaleidoscope to change, as the conductive paint voltage is measured by an Arduino and passed to Unity as input data.<br/><br/>’Change’ consists of two TVs running a Unity fluid simulation, connected to a LeapMotion hand tracker. The user can swish the colored fluid around by moving their hands freely in front of the TVs, as their hand motion is mapped to the position, direction, and strength of two current generators in the fluid simulation.<br/><br/>The most technically complex panel, ’Accomplishment’, is a geodesic sheet of molded plastic that two projectors map onto from behind. Infrared lights and sensors behind the wall detect when users run their hands over the geodesic surface using background subtraction, and light up the edges on the surface in rainbow colors and play musical notes.',
        stats: [{ header: "2000+", subheader: "In-person Interactions" }, { header: "4", subheader: "New types of user input" }, { header: "3", subheader: "Countries Visited" }],
        technologies: ['arduino', 'unity'],
        images: [{src: '/projects/artOfInnovation/swish.jpeg', alt: 'Two men use their hands to control a fluid simulation.'},{src: '/projects/artOfInnovation/wide.jpeg', alt: 'Wide shot of the whole wall.'},{src: '/projects/artOfInnovation/heartbeat.jpeg', alt: 'Colors sync to a heartbeat in a meditation nook.'}]
    },
    {
        id: 6,
        href: {destination: 'www.google.com', text: 'View Site'},
        tags: ['Game Development', 'Web Development'],
        thumbnail: {
            src: '/projects/mascotDash/thumb.png',
            alt: 'Three pixel art US military mascots.',
        },
        spotlight: {
            src: '/projects/mascotDash/spotlight.png',
            alt: 'Smiling pixel art goat collects coins.',
        },
        client: 'USAA',
        title: 'Mascot Dash',
        description: 'Mascot Dash was a web-based infinite runner tie-in to the USAA Army/Navy game. The historic rivalry between the academy teams has often extended to the fans of each team, and Mascot Dash was created as an extension of that rivalry for fans unable to attend in person.<br/><br/>Users can pick a team and take control of the mascot of that team, dodging blockers from other teams and various sports equipment. The longer you last, the higher you score, and you can obtain additional points by collecting coins. You can also obtain a variety of USAA-themed powerups, including one that triggers a ‘bonus time’ mode with no enemies and extra coins available. Once you complete the game, your score will be submitted both with your personal username to the high score table and to the global pool of each academy team’s points.<br/><br/>The game was built using the HTML5 canvas engine Pixi.js, with an ExpressJs server and API. The high scores and total scores were stored in a MySQL database, and the game used pixel art drawn by me and other members of the team in Aseprite.',
        stats: [{ header: "3", subheader: "Competing Teams" }, { header: "40K", subheader: "High Score Entries" }, { header: "13600", subheader: "Final High Score" }],
        technologies: ['javascript', 'html', 'css', 'node'],
        images: [{src: '/projects/mascotDash/splash.png', alt: 'Start screen of the game.'},{src: '/projects/mascotDash/gameplay.png', alt: 'Infinite runner gameplay. A pixel art rendering of the navy mascot attempting to dodge a football linebacker.'},{src: '/projects/mascotDash/ad.png', alt: 'Screenshot of the game is bonus time with "Jump, dodge and dash for a chance to win!" written on top of the image.'}]
    },
    {
        id: 7,
        href: {destination: 'www.google.com', text: 'View Site'},
        tags: ['Experiential'],
        thumbnail: {
            src: '/projects/overwatchMVP/thumb.png',
            alt: 'Overwatch logo.',
        },
        client: 'T-Mobile',
        title: 'Overwatch MVP',
        description: 'T-Mobile partnered with Blizzard to sponsor the Overwatch World Cup, the Blizzcon culmination of 8 months of competitive Overwatch play. As part of their sponsorship, the T-Mobile MVP award was created, with the winner chosen by fans. Twitch and Twitter users could vote using the TMobileMVP command/hashtag.<br/><br/>Two different bots, for Twitch and Twitter respectively, worked to record votes and send them to a Firebase backend, which would then generate a live results panel for use by esports and broadcast staff, who would then add them to branded graphics and display them on-stream. At the end of the weekend, the winner was crowned live onstream and presented with the MVP trophy.',
        stats: [{ header: "Overwatch World Cup", subheader: "Competition" }, { header: "69030", subheader: "Votes" }, { header: "Winner", subheader: "Hish Score Entries" }],
        technologies: ['javascript', 'node'],
        images: [{src: '/projects/overwatchMVP/ad.png', alt: 'Promotional posted showing Reinhardt and "#TMOBILEMVP" on a magenta background.'},{src: '/projects/overwatchMVP/standings.jpeg', alt: 'Overwatch Stream screenshot howing current standings of players.'},{src: '/projects/overwatchMVP/xqc.jpeg', alt: 'Picture of XQC receiving the MVP trophy.'}]
    },
    {
        id: 8,
        href: {destination: 'www.google.com', text: 'View Site'},
        tags: ['Web Development', 'Higher Ed'],
        thumbnail: {
            src: '/projects/usd/thumb.png',
            alt: 'Website header that reads "Find Your Horizon".',
        },
        spotlight: {
            src: '/projects/usd/spotlight.png',
            alt: 'USD Immaculata church with blue dome and white walls.',
        },
        client: 'USD',
        title: 'USD Viewbook',
        description: 'The University of San Diego’s Horizon project is a DEI initiative committed to making USD’s campus more welcoming and enticing for minority applicants. In service of this goal, I created the USD Horizon component library.<br/><br/>This collection of blocks for the Apostrophe CMS empowers USD staff to create their own web pages without developer involvement. One developer hurdle I had to overcome on this project was all the existing components being written in Vue, a framework incompatible with Apostrophe CMS. However, I successfully rewrote all the existing components in vanilla JS and added about a dozen new components.<br/><br/>This CMS toolset ultimately resulted in a constellation of Horizon-powered sites, showcasing applicants and admissions for various unique demographic groups, as well as a main Horizon homepage that shows students how enrolling at USD can help them both achieve their dreams and discover new ones.',
        stats: [{ header: "Torero", subheader: "Mascot" }, { header: "6828", subheader: "Students Enrolled" }, { header: "Apostrophe", subheader: "CMS" }],
        technologies: ['javascript', 'html', 'css', 'vue'],
        images: [{src: '/projects/usd/spinner.png', alt: 'Screenshot of a spinner component on the USD site.'},{src: '/projects/usd/carousel.png', alt: 'Screenshot of a carousel component on the USD site.'},{src: '/projects/usd/torerocarousel.png', alt: 'Screenshot of a carousel component on the USD site.'}]
    }
];
export default projects;