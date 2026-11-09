/* =====================================================================
   ASHRAE CYPRUS CHAPTER - SITE CONTENT
   Edit this one file to update the website. Open it in Notepad (or any
   plain text editor), change it, save it, then save the change on GitHub (see
   HOW-TO-UPDATE.txt). The site updates by itself.

   RULES
   - Keep the quote marks "like this" and the commas between entries.
   - Dates are written YEAR-MONTH-DAY, for example 2027-02-18.
   - To add an entry, copy a whole { ... }, line, paste it below the
     last one and change the words.
   - Lines starting with // are notes and are ignored.
   - A section with no entries simply shows a friendly "coming soon" message.
   ===================================================================== */

window.SITE_DATA = {

  /* Chapter contact email. Leave "" to hide it everywhere. */
  email: "info@ashraecyprus.org",

  /* Social media pages. Leave "" to hide a button. */
  social: {
    linkedin: "https://www.linkedin.com/company/ashrae-cyprus-chapter/home/",
    facebook: "https://www.facebook.com/constantinoszzeniou"
  },

  /* ---------------- EVENTS ----------------
     Future events appear under "Upcoming Events". Past events move to
     "Past Events" automatically.
     Example (remove the // to use it):
     { title: "Webinar on ventilation standards", date: "2027-02-18", time: "18:30",
       venue: "Nicosia, venue name", description: "Optional extra line.",
       link: "https://example.com/register" },
     (time, venue, description and link are all optional)
  */
  events: [
    { title: "Guest Lecture: Real-World Renewable Energy Systems and Their Integration into Buildings",
      date: "2026-11-05", time: "18:00",
      venue: "University of Cyprus, Lecture Theatre POL10-B101 \u201cAndreas Alexandrou\u201d",
      description: "Professor Andreas K. Athienitis, Professor of Building Engineering, Concordia University, Canada. Open to students, researchers and industry professionals. Organised by the University of Cyprus Department of Mechanical and Manufacturing Engineering and the ETSD programme, and supported by ASHRAE Cyprus Chapter and the Cyprus Student Branch." },
    { title: "Technical Event with Keynote Speaker ASHRAE President Sarah E. Maston, P.E., BCxP, LEED AP BD+C",
      date: "2027-05-08",
      description: "Other speakers and venue to be announced soon." },
  ],

  /* ---------------- BOARD OF GOVERNORS ----------------
     year: the term shown above the board.
     photo: optional, a file placed in the "photos" folder, e.g. "photos/maria.jpg".
     Example:
     { name: "Full Name", role: "President", photo: "photos/full-name.jpg", email: "" },
  */
  boardYear: "2026-2027",
  board: [
    { name: "Tamer Zaim", role: "President", photo: "photos/tamer-zaim.jpg", email: "president@ashraecyprus.org" },
    { name: "Polyvios Eleftheriou", role: "Vice President", photo: "photos/polyvios-eleftheriou.jpg", email: "vicepresident@ashraecyprus.org" },
    { name: "Constantinos Zeniou", role: "Secretary", photo: "photos/constantinos-zeniou.jpg", email: "secretary@ashraecyprus.org" },
    { name: "Nicholas Zachopoulos", role: "Treasurer", photo: "photos/nicholas-zachopoulos.jpg", email: "treasurer@ashraecyprus.org" },
    { name: "Maria Andreou", role: "Young Engineers in ASHRAE (YEA)", photo: "photos/maria-andreou.jpg", email: "youngengineers@ashraecyprus.org" },
  ],

  /* ---------------- COMMITTEE CHAIRS ----------------
     Use the page name on the left. Example:
     "student-activities": { name: "Full Name", photo: "photos/full-name.jpg" },
     Names you can use: student-activities, membership-promotion,
     young-engineers-in-ashrae-yea, research-promotion,
     chapter-technology-transfer, government-affairs
  */
  chairs: {
    "student-activities": { name: "Constantinos Zeniou", photo: "photos/constantinos-zeniou.jpg" },
    "membership-promotion": { name: "Zacharias Hadjigeorgiou", photo: "photos/zacharias-hadjigeorgiou.jpg" },
    "young-engineers-in-ashrae-yea": { name: "Maria Andreou", photo: "photos/maria-andreou.jpg" },
    "research-promotion": { name: "Nicholas Zachopoulos", photo: "photos/nicholas-zachopoulos.jpg" },
    "chapter-technology-transfer": { name: "Polyvios Eleftheriou", photo: "photos/polyvios-eleftheriou.jpg" },
    "government-affairs": { name: "Ierotheos Syrigos", photo: "photos/ierotheos-syrigos.jpg" },
  },
  /* ---------------- PAST PRESIDENTS ----------------
     Newest first. Example: { name: "Full Name", years: "2024-2025", photo: "photos/full-name.jpg" },
     (years and photo are optional)
  */
  presidents: [
    { name: "Ierotheos Syrigos", years: "2025-2026", photo: "photos/ierotheos-syrigos.jpg" },
    { name: "Polyvios Eleftheriou", years: "2024-2025", photo: "photos/polyvios-eleftheriou.jpg" },
  ],

  /* ---------------- MEDIA (videos and recordings) ----------------
     type: Webinar, Live Event, Annual Meeting ...
     url: link to the video (YouTube etc.). Leave "" for no link.
     Example: { type: "Webinar", title: "Title of the webinar", date: "2027-03-17", url: "https://..." },
  */
  media: [
  ],

  /* ---------------- SPONSORS ----------------
     Three tiers. Put each logo file in the "sponsors" folder.
     Example: { name: "Company", logo: "sponsors/company.png", url: "https://company.com" },
     If every tier is empty the sponsors section is hidden.
  */
  sponsors: {
    "Sustainable Visionary": [
    ],
    "Green Guardian": [
    ],
    "Eco Pioneer": [
    ]
  }
};
