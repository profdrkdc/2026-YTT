# Implementation Plan: Evidence Repository & Proof Linking

## Phase 1: Infrastructure & Data Mapping
- [x] Task: Create structured evidence data
    - [x] Map files in `1-timeline/` to a new `src/data/evidence.json`
- [x] Task: Configure assets and paths
    - [x] Set up public assets or dynamic imports for media files
- [~] Task: Conductor - User Manual Verification 'Phase 1: Infrastructure & Data Mapping'

## Phase 2: Evidence Gallery & Components
- [ ] Task: Build Media Preview components
    - [ ] Create `VideoPlayer.tsx` and `ImageLightbox.tsx`
- [ ] Task: Implement CSV to Table renderer
    - [ ] Build `CSVTable.tsx` for watch history and creation logs
- [ ] Task: Build the Gallery UI
    - [ ] Create `EvidenceGallery.tsx` with filtering by category
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Evidence Gallery & Components'

## Phase 3: Integration & Deep Linking
- [ ] Task: Connect Timeline to Evidence
    - [ ] Add "View Proof" buttons to `TimelineView` components
- [ ] Task: Implement deep linking for evidence
    - [ ] Set up routes like `/evidence/:id`
- [ ] Task: Final Polish & Mobile Optimization
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Integration & Deep Linking'
