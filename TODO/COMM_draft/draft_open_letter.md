**Title: Google Developer Catch-22: Automated YouTube ban blocks verification (Google ignores DSA rulings)**

**To:** The Developer Community, Tech Journalists, and our Colleagues at Google

Since 2024, I have been developing software within the Google ecosystem, publishing extensions and add-ons. Today, my development activities are at a complete standstill. Not due to a bug or policy violation on my part, but because I am trapped in a broken corporate process where Google’s automated abuse systems directly conflict with its developer verification requirements.

Worse, even after securing two legally certified dispute settlement decisions under the European Digital Services Act (DSA) ordering Google to restore my account, they have simply ignored them.

Here is the systemic Catch-22 Google has created:

1. **The Verification Mandate:** To publish or update add-ons on the Google Workspace Marketplace (and Chrome Web Store), developers are required to verify their OAuth consent screen. A mandatory step of this verification is uploading a YouTube video demonstrating the OAuth flow in action.
2. **The Automated Ban:** In August 2025, my YouTube channel—which existed solely to host these unlisted developer verification videos—was terminated by an automated algorithm for "spam, deceptive practices, and scams" immediately after uploading a demo video for a Chrome Extension. My automated appeal was rejected within minutes.
3. **The Permanent Lock-out:** Under YouTube's "circumvention policy," a channel termination bans you from ever owning or creating another channel. 

As a result, I am now legally and technically barred from uploading the very verification videos Google requires to let me publish software. One part of Google demands a video; another part of Google bans me for life if I try to host it.

### The Battle for Recourse (Ignoring the DSA)

I went through the official European Out-of-Court Dispute Settlement (ODS) process under the Digital Services Act. I submitted the case to the certified body, Appeals Centre Europe (ACE). 

Google ignored the proceedings entirely. ACE ruled in my favor on both counts (Cases #2025-012481-YT and #2025-012487-YT), ordering YouTube to restore my developer channel. Google has refused to execute these decisions.

This is not a simple user error. It is a systemic architectural failure. Google has built disconnected, automated product silos (Google Cloud OAuth vs. YouTube Abuse) with no internal communication or human escalation path, leaving independent developers as collateral damage.

All my attempts to find a human at Google who can understand this cross-product conflict have failed. The support system is a maze of automated rejections and dead ends. I have exhausted every possible internal channel over a multi-week period:
- **Automated Appeals:** Submitted multiple detailed appeals; all rejected by bots within minutes.
- **Public Social Media:** `@TeamYouTube` replied with automated templates pointing back to the help center.
- **Registered Mail:** Sent a physical letter to Google Ireland in Dublin, which went ignored.
- **Legal Email:** `legal@support.youtube.com` returned automated links to consumer forms.
- **Cross-Platform:** Both Chrome Web Store and Google Cloud support stated they cannot assist with YouTube bans, completing the Catch-22 loop.
- **Developer Relations:** Reached out to Google Workspace DevRel, which went unanswered.

I have published the complete timeline, legal filings, and the certified ACE decisions here: https://github.com/profdrkdc/2026-YTT

I am posting this to warn fellow developers about the precarity of building on these platforms, and in the hope that someone at Google Developer Relations sees this and addresses the structural conflict in their verification pipeline.

Sincerely,

Karel Decherf
https://github.com/profdrkdc/2026-YTT
