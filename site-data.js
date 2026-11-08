/* =====================================================================
   ASHRAE CYPRUS CHAPTER - SITE CONTENT
   Edit this one file to update the website. Open it in Notepad (or any
   plain text editor), change it, save it, then upload the whole folder
   to Netlify again.

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
  email: "ashraecy@gmail.com",

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
    { title: "Technical Event with Keynote Speaker ASHRAE President Sarah E. Maston, P.E., BCxP, LEED AP BD+C",
      date: "2027-05-04",
      description: "Other speakers to be announced soon." },
  ],

  /* ---------------- BOARD OF GOVERNORS ----------------
     year: the term shown above the board.
     photo: optional, a file placed in the "photos" folder, e.g. "photos/maria.jpg".
     Example:
     { name: "Full Name", role: "President", photo: "photos/full-name.jpg", email: "" },
  */
  boardYear: "2026-2027",
  board: [
  ],

  /* ---------------- COMMITTEE CHAIRS ----------------
     Use the page name on the left. Example:
     "student-activities": { name: "Full Name", photo: "", email: "" },
     Names you can use: student-activities, membership-promotion,
     young-engineers-in-ashrae-yea, research-promotion,
     chapter-technology-transfer, government-affairs
  */
  chairs: {
  },

  /* ---------------- PAST PRESIDENTS ----------------
     Example: { years: "2024-2025", name: "Full Name" },
  */
  presidents: [
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
