import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "hospitals",
    name: "Hospitals",
    description: "Patient info, wayfinding, and health awareness displays",
    heroHeadline: "Digital Signage for Hospitals",
    heroDescription:
      "Display patient information, wayfinding directions, doctor schedules, and health awareness content across your hospital on any TV or monitor.",
    painPoints: [
      {
        title: "Outdated notice boards",
        description:
          "Paper notices are hard to update and often go unread by patients and visitors.",
      },
      {
        title: "Wayfinding confusion",
        description:
          "Patients and visitors struggle to find departments, labs, and consultation rooms.",
      },
      {
        title: "Manual schedule updates",
        description:
          "Doctor schedules and OPD timings change frequently, but printed boards can't keep up.",
      },
    ],
    useCases: [
      "Doctor availability and OPD schedules",
      "Wayfinding and department directories",
      "Health awareness and preventive care tips",
      "Queue token display and wait times",
      "Emergency announcements",
    ],
    benefits: [
      {
        title: "Reduce front-desk queries",
        description:
          "Screens answer common patient questions about timings, directions, and procedures automatically.",
      },
      {
        title: "Update instantly",
        description:
          "Change doctor schedules, announcements, or alerts from your phone in seconds.",
      },
      {
        title: "Professional appearance",
        description:
          "Modern digital displays create a better first impression for patients and their families.",
      },
    ],
    whatsappMessage:
      "Hi, I run a hospital and I'm interested in Screeno digital signage.",
    ctaText: "Modernise your hospital displays",
  },
  {
    slug: "clinics",
    name: "Clinics",
    description: "Doctor schedules, health tips, and patient communication",
    heroHeadline: "Digital Signage for Clinics",
    heroDescription:
      "Keep patients informed with doctor schedules, health tips, and service information on a screen in your waiting area.",
    painPoints: [
      {
        title: "Idle waiting room time",
        description:
          "Patients wait with nothing to engage them, leading to frustration and perceived longer waits.",
      },
      {
        title: "Repetitive patient questions",
        description:
          "Staff spend time answering the same questions about timings, fees, and services.",
      },
      {
        title: "No way to promote services",
        description:
          "New treatments, health packages, and seasonal offerings go unnoticed.",
      },
    ],
    useCases: [
      "Doctor schedule and availability",
      "Health tips and seasonal wellness advice",
      "Service and treatment information",
      "Patient education content",
      "Appointment reminders and clinic policies",
    ],
    benefits: [
      {
        title: "Engage waiting patients",
        description:
          "Health tips and informative content makes waiting time feel shorter and more productive.",
      },
      {
        title: "Promote your services",
        description:
          "Highlight new treatments, health check-up packages, and special offers on screen.",
      },
      {
        title: "Easy to manage",
        description:
          "Update content from your phone — no technical skills needed.",
      },
    ],
    whatsappMessage:
      "Hi, I run a clinic and I'm interested in Screeno digital signage.",
    ctaText: "Inform patients effortlessly",
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    description: "Digital menu boards, offers, and customer engagement",
    heroHeadline: "Digital Signage for Restaurants",
    heroDescription:
      "Replace printed menus with dynamic digital menu boards. Show daily specials, promotions, and engaging food content on your restaurant screens.",
    painPoints: [
      {
        title: "Expensive menu reprints",
        description:
          "Every price change or new dish means reprinting menus — costly and wasteful.",
      },
      {
        title: "Static promotions",
        description:
          "Table tents and posters can't be updated quickly for daily specials or limited-time offers.",
      },
      {
        title: "Missed upselling opportunities",
        description:
          "Without visual prompts, customers miss out on combos, add-ons, and chef specials.",
      },
    ],
    useCases: [
      "Digital menu boards with prices",
      "Daily specials and chef recommendations",
      "Combo deals and upsell promotions",
      "Wait time display for takeaway orders",
      "Festive and seasonal menus",
    ],
    benefits: [
      {
        title: "Update menus instantly",
        description:
          "Change prices, add new dishes, or run daily specials without printing a single page.",
      },
      {
        title: "Increase average order value",
        description:
          "Visual food content and combo highlights encourage customers to order more.",
      },
      {
        title: "Save on printing costs",
        description:
          "No more reprinting menus, table tents, or promotional posters.",
      },
    ],
    whatsappMessage:
      "Hi, I run a restaurant and I'm interested in digital menu boards.",
    ctaText: "Get your digital menu board today",
  },
  {
    slug: "cafes",
    name: "Cafes",
    description: "Menu displays, ambiance content, and promotions",
    heroHeadline: "Digital Signage for Cafes",
    heroDescription:
      "Showcase your menu, create the right ambiance, and highlight promotions on screens that match your cafe's vibe.",
    painPoints: [
      {
        title: "Chalkboard limitations",
        description:
          "Handwritten boards are hard to read, limited in space, and time-consuming to update.",
      },
      {
        title: "Seasonal menu changes",
        description:
          "Updating menus for new drinks, seasonal offerings, or price changes is a hassle.",
      },
      {
        title: "Dull waiting experience",
        description:
          "Customers waiting for orders have nothing engaging to look at beyond their phones.",
      },
    ],
    useCases: [
      "Beverage and food menu display",
      "New arrivals and seasonal specials",
      "Loyalty program and offers",
      "Ambiance visuals and brand storytelling",
      "Event announcements and open mic schedules",
    ],
    benefits: [
      {
        title: "Elevate your brand",
        description:
          "Screens displaying curated visuals and menus enhance your cafe's aesthetic and brand identity.",
      },
      {
        title: "Promote what matters today",
        description:
          "Push new drinks, happy hour deals, or event announcements instantly.",
      },
      {
        title: "Low cost, high impact",
        description:
          "At ~₹10/day per screen, it costs less than a cup of coffee to run.",
      },
    ],
    whatsappMessage:
      "Hi, I run a cafe and I'm interested in Screeno digital signage.",
    ctaText: "Elevate your cafe experience",
  },
  {
    slug: "retail-stores",
    name: "Retail Stores",
    description: "In-store promotions, offers, and product highlights",
    heroHeadline: "Digital Signage for Retail Stores",
    heroDescription:
      "Drive in-store sales with screens that showcase promotions, new arrivals, and product highlights right where customers shop.",
    painPoints: [
      {
        title: "Expensive flex and banners",
        description:
          "Printed banners for every sale and promotion are costly, slow to produce, and wasteful.",
      },
      {
        title: "Missed impulse purchases",
        description:
          "Without visual prompts at the right moment, customers walk past products they'd otherwise buy.",
      },
      {
        title: "Inconsistent branding",
        description:
          "Multiple store locations often display outdated or mismatched promotional material.",
      },
    ],
    useCases: [
      "Sale and discount announcements",
      "New arrivals and product launches",
      "Brand and lifestyle visuals",
      "Festive and seasonal campaigns",
      "Store directory and section highlights",
    ],
    benefits: [
      {
        title: "Drive impulse purchases",
        description:
          "Dynamic product highlights and limited-time offers displayed at the point of sale increase conversions.",
      },
      {
        title: "Update all stores at once",
        description:
          "Push new campaigns to every screen across all your locations from one dashboard.",
      },
      {
        title: "Eliminate print costs",
        description:
          "No more banners, standees, or flex printing for every new promotion.",
      },
    ],
    whatsappMessage:
      "Hi, I run a retail store and I'm interested in Screeno digital signage.",
    ctaText: "Drive in-store sales with digital signage",
  },
  {
    slug: "gyms",
    name: "Gyms",
    description: "Class schedules, motivation, and membership promotions",
    heroHeadline: "Digital Signage for Gyms",
    heroDescription:
      "Display class schedules, workout tips, motivational content, and membership offers on screens across your gym floor.",
    painPoints: [
      {
        title: "Schedule confusion",
        description:
          "Printed class timetables are outdated the moment an instructor or timing changes.",
      },
      {
        title: "Low member engagement",
        description:
          "Members miss out on new classes, workshops, and events because they're not visible.",
      },
      {
        title: "No upsell channel",
        description:
          "Personal training, supplements, and premium memberships lack a visible promotion channel.",
      },
    ],
    useCases: [
      "Class schedules and instructor info",
      "Workout tips and exercise form guides",
      "Membership plan promotions",
      "Motivational quotes and fitness challenges",
      "Event and workshop announcements",
    ],
    benefits: [
      {
        title: "Keep members informed",
        description:
          "Real-time class schedules and announcements reduce front-desk questions and confusion.",
      },
      {
        title: "Boost engagement",
        description:
          "Motivational content and challenge boards keep members energised and coming back.",
      },
      {
        title: "Promote upgrades",
        description:
          "Highlight personal training, premium plans, and add-on services where members see them.",
      },
    ],
    whatsappMessage:
      "Hi, I run a gym and I'm interested in Screeno digital signage.",
    ctaText: "Energise your gym with dynamic screens",
  },
  {
    slug: "hotels",
    name: "Hotels",
    description: "Guest info, event schedules, and lobby displays",
    heroHeadline: "Digital Signage for Hotels",
    heroDescription:
      "Welcome guests with elegant lobby displays, share event schedules, local attractions, and hotel services on screens throughout your property.",
    painPoints: [
      {
        title: "Outdated lobby information",
        description:
          "Printed brochures and standees with hotel services and local info go stale quickly.",
      },
      {
        title: "Event communication gaps",
        description:
          "Conference schedules, wedding details, and banquet info are hard to communicate to all guests.",
      },
      {
        title: "High print costs",
        description:
          "Constant reprinting of in-room directories, event boards, and promotional material is expensive.",
      },
    ],
    useCases: [
      "Lobby welcome displays and hotel branding",
      "Event and conference schedules",
      "Restaurant menus and dining hours",
      "Local attractions and travel information",
      "Check-in/check-out information",
    ],
    benefits: [
      {
        title: "Impress guests on arrival",
        description:
          "Elegant digital displays in the lobby create a modern, premium first impression.",
      },
      {
        title: "Centralised event management",
        description:
          "Update conference room schedules, wedding details, and banquet info from one place.",
      },
      {
        title: "Reduce printing waste",
        description:
          "Replace printed directories, event boards, and brochures with always-current digital screens.",
      },
    ],
    whatsappMessage:
      "Hi, I run a hotel and I'm interested in Screeno digital signage.",
    ctaText: "Impress guests from the lobby",
  },
  {
    slug: "schools",
    name: "Schools",
    description: "Announcements, timetables, and campus communication",
    heroHeadline: "Digital Signage for Schools",
    heroDescription:
      "Communicate with students, teachers, and parents using digital notice boards that display announcements, timetables, and achievements.",
    painPoints: [
      {
        title: "Notice board clutter",
        description:
          "Physical notice boards are overcrowded, outdated, and often ignored by students.",
      },
      {
        title: "Slow communication",
        description:
          "Important announcements take too long to reach students and parents through paper circulars.",
      },
      {
        title: "No visual engagement",
        description:
          "Static posters fail to capture the attention of a generation used to dynamic screens.",
      },
    ],
    useCases: [
      "Daily announcements and circulars",
      "Class timetables and exam schedules",
      "Student achievements and honour rolls",
      "Event calendars and holiday notices",
      "Safety guidelines and campus rules",
    ],
    benefits: [
      {
        title: "Instant communication",
        description:
          "Push announcements, schedule changes, and alerts to every screen across campus in seconds.",
      },
      {
        title: "Celebrate achievements",
        description:
          "Showcase student accomplishments, sports results, and academic honours prominently.",
      },
      {
        title: "Modern campus image",
        description:
          "Digital displays give your school a forward-thinking, tech-friendly reputation.",
      },
    ],
    whatsappMessage:
      "Hi, I run a school and I'm interested in Screeno digital signage.",
    ctaText: "Communicate with students and parents",
  },
  {
    slug: "coaching-institutes",
    name: "Coaching Institutes",
    description: "Batch schedules, results, and student communication",
    heroHeadline: "Digital Signage for Coaching Institutes",
    heroDescription:
      "Display batch schedules, exam results, toppers, and important notices on screens that keep your students informed and motivated.",
    painPoints: [
      {
        title: "Batch schedule chaos",
        description:
          "Multiple batches, rooms, and timings make printed schedules confusing and error-prone.",
      },
      {
        title: "Low visibility of results",
        description:
          "Topper lists and exam results on paper boards don't get the attention they deserve.",
      },
      {
        title: "Administrative overload",
        description:
          "Staff spend too much time fielding questions about schedules, fees, and upcoming tests.",
      },
    ],
    useCases: [
      "Batch-wise timetables and room assignments",
      "Exam schedules and test series dates",
      "Topper lists and result highlights",
      "Fee payment reminders and deadlines",
      "Motivational content and success stories",
    ],
    benefits: [
      {
        title: "Reduce admin queries",
        description:
          "Screens answer the most common student questions about schedules, fees, and exam dates.",
      },
      {
        title: "Motivate students",
        description:
          "Displaying toppers and success stories on prominent screens inspires and drives performance.",
      },
      {
        title: "Easy multi-batch management",
        description:
          "Different screens can show different batch schedules — all managed from one dashboard.",
      },
    ],
    whatsappMessage:
      "Hi, I run a coaching institute and I'm interested in Screeno digital signage.",
    ctaText: "Keep your students informed",
  },
  {
    slug: "shopping-malls",
    name: "Shopping Malls",
    description: "Directories, promotions, and tenant advertising",
    heroHeadline: "Digital Signage for Shopping Malls",
    heroDescription:
      "Power your mall's digital directory, showcase tenant promotions, and guide visitors with dynamic screens at key locations.",
    painPoints: [
      {
        title: "Static directories",
        description:
          "Printed mall directories become outdated whenever a store opens, closes, or moves.",
      },
      {
        title: "Tenant promotion challenges",
        description:
          "No easy way for tenants to promote sales and events to all mall visitors.",
      },
      {
        title: "Wayfinding difficulties",
        description:
          "Visitors struggle to find stores, restrooms, parking, and food courts in large malls.",
      },
    ],
    useCases: [
      "Interactive store directories and maps",
      "Tenant sale and promotion announcements",
      "Event and entertainment schedules",
      "Parking availability and wayfinding",
      "Food court menus and offers",
    ],
    benefits: [
      {
        title: "Always-current directory",
        description:
          "Update store listings, floor maps, and tenant info instantly when changes happen.",
      },
      {
        title: "Revenue from tenant ads",
        description:
          "Sell screen time to tenants for their promotions — an additional revenue stream for the mall.",
      },
      {
        title: "Better visitor experience",
        description:
          "Clear wayfinding and live event info reduce frustration and keep visitors in the mall longer.",
      },
    ],
    whatsappMessage:
      "Hi, I manage a shopping mall and I'm interested in Screeno digital signage.",
    ctaText: "Power your mall's digital directory",
  },
];
