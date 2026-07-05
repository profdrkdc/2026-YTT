import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Alert, 
  AlertTitle, 
  Divider, 
  Paper, 
  Stack, 
  Tab, 
  Tabs,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import GavelIcon from '@mui/icons-material/Gavel';
import BugReportIcon from '@mui/icons-material/BugReport';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import MarkdownFetcher from '../components/MarkdownFetcher';

const SuspensionAnalysisPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Title & Introduction */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          fontWeight="bold"
          sx={{ 
            background: 'linear-gradient(45deg, #1976d2 30%, #dc004e 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px'
          }}
        >
          Forensic Suspension Analysis Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 3 }}>
          A strategic technical assessment of the channel termination, dissecting the primary trigger hypothesis, 
          systemic failures, and direct appeal roadmaps.
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center">
          <Chip label="Dossier Baseline: Reinstatement Blueprint" color="primary" variant="filled" />
          <Chip label="Key Mismatch Identified" color="warning" variant="outlined" icon={<WarningIcon />} />
          <Chip label="DSA Compliant Arguments" color="secondary" variant="outlined" icon={<GavelIcon />} />
        </Stack>
      </Box>

      {/* PRIMARY HYPOTHESIS HERO SECTION */}
      <Card 
        elevation={4} 
        sx={{ 
          mb: 4, 
          borderRadius: 3, 
          background: 'linear-gradient(135deg, rgba(255, 248, 225, 0.9) 0%, rgba(255, 236, 179, 0.5) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 193, 7, 0.4)',
          overflow: 'hidden',
          position: 'relative',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 8,
          }
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 9 }}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <WarningIcon color="warning" sx={{ fontSize: 32 }} />
                <Typography variant="h5" component="h2" fontWeight="bold" color="warning.dark">
                  Primary Hypothesis: Technical Publishing Mismatch (OAuth vs. Store Listing)
                </Typography>
              </Stack>
              <Typography variant="body1" paragraph color="text.primary" sx={{ lineHeight: 1.7 }}>
                The leading cause for the immediate channel termination is a technical publishing configuration mismatch 
                regarding <strong>OAuth 2.0 developer verification videos</strong> versus <strong>Chrome Web Store (CWS) store listing videos</strong>:
              </Typography>
              <Box sx={{ pl: 2, borderLeft: '3px solid', borderColor: 'warning.main', my: 2 }}>
                <Typography variant="body2" paragraph sx={{ mb: 1, fontWeight: 'medium' }}>
                  • <strong>The Mismatch:</strong> Store listing promotional videos must be <strong>Public</strong> for users to view. However, Google Cloud Platform (GCP) OAuth 2.0 verification walkthroughs showing raw development environments, login prompts, and console Client IDs are strictly for internal reviewer consumption and must be set to <strong>Unlisted</strong> or <strong>Private</strong>.
                </Typography>
                <Typography variant="body2" paragraph sx={{ mb: 1, fontWeight: 'medium' }}>
                  • <strong>The Trigger:</strong> A raw, low-resolution OAuth verification video showing raw testing accounts and technical console menus was mistakenly uploaded or left as <strong>Public</strong>.
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                  • <strong>The Consequence:</strong> YouTube's automated scanner bots swept the public video. Due to the raw display of console credentials and testing flows in a public-facing video, the geautomatiseerde abuse prevention engine flagged it as **"Spam, deceptive practices, and scams" (Phishing false-positive)**.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  borderRadius: 2, 
                  backgroundColor: 'rgba(255,255,255,0.8)', 
                  border: '1px solid rgba(255,193,7,0.2)' 
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="warning.dark">
                  Procedural Flaw
                </Typography>
                <Typography variant="caption" display="block" color="text.secondary" paragraph>
                  An immediate, un-warned lifetime channel ban with <strong>0 strikes</strong> for a publishing privacy setting misunderstanding is highly disproportionate. 
                </Typography>
                <Typography variant="caption" display="block" color="text.secondary">
                  Under standard YouTube policies and the Digital Services Act (DSA) Article 17, YouTube should have restricted the specific video, issued a warning, or provided a specific statement of reasons.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={4}>
        {/* LEFT COLUMN: THE ANALYSIS DATA (TABS / SIDE-BY-SIDE PANELS) */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Paper sx={{ borderRadius: 3, overflow: 'hidden', mb: 4 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'grey.50' }}>
              <Tabs 
                value={activeTab} 
                onChange={handleTabChange} 
                aria-label="suspension analysis perspectives"
                variant="fullWidth"
                textColor="primary"
                indicatorColor="primary"
              >
                <Tab 
                  icon={<InfoIcon />} 
                  label="1. User-Side Perspective (Possible Faults)" 
                  id="tab-user" 
                  sx={{ fontWeight: 'bold', py: 2 }}
                />
                <Tab 
                  icon={<BugReportIcon />} 
                  label="2. System-Side Perspective (Google Failures)" 
                  id="tab-system" 
                  sx={{ fontWeight: 'bold', py: 2 }}
                />
              </Tabs>
            </Box>
            <CardContent sx={{ p: 4, minHeight: '450px' }}>
              {activeTab === 0 && (
                <Box>
                  <Alert severity="info" sx={{ mb: 3 }}>
                    <AlertTitle>Developer Self-Reflection & Fault Analysis</AlertTitle>
                    This section details the possibilities examined from the developer's perspective, mapping out where potential compliance confusion occurred.
                  </Alert>
                  <MarkdownFetcher src="/2026-YTT/evidence/2-YouTube-Policy/2.1-Possible-Faults-(me)/1-PossibleFaults_by.me.md" />
                </Box>
              )}
              {activeTab === 1 && (
                <Box>
                  <Alert severity="error" sx={{ mb: 3 }}>
                    <AlertTitle>YouTube Systemic and Procedural Failures</AlertTitle>
                    This section documents procedural irregularities, disproportionate sanctions, lack of notice, and violations of DSA Article 17.
                  </Alert>
                  <MarkdownFetcher src="/2026-YTT/evidence/2-YouTube-Policy/2.2-Possible-Faults-(YT)/1-PossibleFaults_by.Google.md" />
                </Box>
              )}
            </CardContent>
          </Paper>
        </Grid>

        {/* RIGHT COLUMN: ACTIONABLE STRATEGY & DEFENSE ROADMAP */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Stack spacing={4}>
            {/* DEFENSE STRATEGY CARD */}
            <Card sx={{ borderRadius: 3, borderTop: '4px solid #1976d2' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom color="primary.main">
                  Core Defense Strategy
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  This structured analysis serves as the foundation for future communication when admitted to the pilot program or developer escalations:
                </Typography>
                <Divider sx={{ my: 2 }} />
                <List dense disablePadding>
                  <ListItem disableGutters sx={{ alignItems: 'flex-start', mb: 2 }}>
                    <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                      <CheckCircleIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Clarify Professional Identity" 
                      secondary="Establish that the account belongs to a legitimate developer contributing Chrome Extensions and Google Workspace Add-ons." 
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ alignItems: 'flex-start', mb: 2 }}>
                    <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                      <CheckCircleIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Explain Technical publishing error" 
                      secondary="Present the 'Public vs. Hidden OAuth Mismatch' as a technical configuration error rather than intentional scamming." 
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ alignItems: 'flex-start', mb: 2 }}>
                    <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                      <CheckCircleIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Argue Disproportionality (DSA 17)" 
                      secondary="Argue that direct suspension for a video-level metadata issue violated procedural fairness and transparency standards." 
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                      <CheckCircleIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Commit to Future Best Practices" 
                      secondary="Guarantee that all future OAuth verification walkthroughs will be set strictly to Unlisted/Private." 
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            {/* ACTION PLAN TIMELINE */}
            <Card sx={{ borderRadius: 3, borderTop: '4px solid #dc004e' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom color="secondary.main">
                  Roadmap & Next Steps
                </Typography>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box 
                        sx={{ 
                          width: 24, 
                          height: 24, 
                          borderRadius: '50%', 
                          bgcolor: 'success.light', 
                          color: 'success.contrastText',
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}
                      >
                        1
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" fontWeight="bold">Establish Analysis Baseline</Typography>
                        <Typography variant="caption" color="text.secondary">Nuance primary hypothesis and counter-arguments.</Typography>
                      </Box>
                    </Stack>
                  </Paper>

                  <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box 
                        sx={{ 
                          width: 24, 
                          height: 24, 
                          borderRadius: '50%', 
                          bgcolor: 'primary.light', 
                          color: 'primary.contrastText',
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}
                      >
                        2
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" fontWeight="bold">Prepare Communication Drafts</Typography>
                        <Typography variant="caption" color="text.secondary">Create structured pilot program drafts in COMM_draft.</Typography>
                      </Box>
                    </Stack>
                  </Paper>

                  <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box 
                        sx={{ 
                          width: 24, 
                          height: 24, 
                          borderRadius: '50%', 
                          bgcolor: 'grey.400', 
                          color: 'white',
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}
                      >
                        3
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" fontWeight="bold">Await Pilot Admittance</Typography>
                        <Typography variant="caption" color="text.secondary">Submit verified technical appeal on admittance.</Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Stack>
              </CardContent>
            </Card>

            {/* QUICK ACTIONS CARD */}
            <Card sx={{ borderRadius: 3, bgcolor: 'grey.50' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Quick References
                </Typography>
                <Stack spacing={1} sx={{ mt: 1 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <SettingsSuggestIcon color="action" fontSize="small" />
                    <Typography variant="caption" color="text.primary">
                      GCP OAuth Requirements doc: [View Excerpt](file:///home/kareltestspecial/workspace/8-Dossiers/YTT/2026-YTT/2-YouTube-Policy/google-cloud-verification-requirements-excerpt.md)
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PlayCircleOutlineIcon color="action" fontSize="small" />
                    <Typography variant="caption" color="text.primary">
                      Developer guidelines: [Video Guidelines TXT](file:///home/kareltestspecial/workspace/8-Dossiers/YTT/2026-YTT/3-CONTRA-BEWIJS/3.1-Videos-SchriftelijkeBeschrijving/2025.07-workplace.marketplace/google_workspace_add-ons_VIDEO-GUIDELINES.txt)
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <SecurityIcon color="action" fontSize="small" />
                    <Typography variant="caption" color="text.primary">
                      Communication Drafts: [draft_pilot_program_appeal.md](file:///home/kareltestspecial/workspace/8-Dossiers/YTT/2026-YTT/TODO/COMM_draft/draft_pilot_program_appeal.md)
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SuspensionAnalysisPage;
