# Implementation Plan: Public Deployment & Sanity Check

## Phase 1: Asset Path Correction
- [ ] Task: Relocate evidence folders to public directory
    - [ ] Move `1-timeline`, `2-YouTube-Policy`, `3-CONTRA-BEWIJS` to `dossier-web/public/evidence/`
- [ ] Task: Update evidence data paths
    - [ ] Modify `dossier-web/src/data/evidence.json` to use relative paths (e.g., `evidence/...`)
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Asset Path Correction'

## Phase 2: Routing & Deployment Fixes
- [ ] Task: Configure React Router basename
    - [ ] Update `dossier-web/src/main.tsx` with `<BrowserRouter basename="/2026-YTT">`
- [ ] Task: Update Vite configuration
    - [ ] Ensure `vite.config.ts` has `base: '/2026-YTT/'`
- [ ] Task: Fix GitHub Actions workflow
    - [ ] Adjust `deploy.yml` paths for the sub-directory build
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Routing & Deployment Fixes'

## Phase 3: Verification & Sanity Check
- [ ] Task: Local Build & Preview
    - [ ] Run `pnpm build` and `pnpm preview` to verify paths
- [ ] Task: Live Deployment Check
    - [ ] Push changes and verify the site on GitHub Pages
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Verification & Sanity Check'
