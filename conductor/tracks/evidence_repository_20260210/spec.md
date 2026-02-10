# Track Specification: Evidence Repository & Proof Linking

## Objective
To build a robust repository for forensic evidence (videos, screenshots, logs, and CSV data) and integrate it directly into the dossier website, providing interactive "proof" for the events described in the timeline.

## Scope
- **Evidence Gallery:** A UI component to browse and view various types of evidence.
- **Media Support:** Integration of video players (WebM/MP4) and image lightboxes.
- **CSV Visualizers:** Dynamic rendering of watch history and channel creation logs.
- **Contextual Linking:** Ability to navigate from a timeline event to its associated evidence.

## Technical Details
- **Data Source:** `src/data/evidence.json` (to be created) mapping events to file paths in `1-timeline/`.
- **Components:**
    - `EvidenceGallery.tsx`: Main container for evidence browsing.
    - `MediaPreview.tsx`: Handles different media types (video, image, text).
    - `CSVTable.tsx`: Simplified viewer for data evidence.
- **Routing:** Deep links to specific evidence items (e.g., `/evidence/:id`).

## Acceptance Criteria
- [ ] Evidence gallery renders correctly with at least 3 categories of proof.
- [ ] Video evidence plays within the browser.
- [ ] CSV data from "Watch History" is rendered in a readable table.
- [ ] Timeline items contain links that open the correct evidence in the gallery.
