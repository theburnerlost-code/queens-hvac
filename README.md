# Queens HVAC Pro — Site Operations Manual

## Stack
- **Framework:** Hugo (static site generator)
- **Hosting:** Netlify (free tier)
- **Forms:** Netlify Forms (built-in, free up to 100 submissions/mo)
- **Domain:** Namecheap (~$10/yr)
- **DNS:** Netlify DNS or Cloudflare (free)
- **Call Tracking:** Google Voice (free) or CallRail ($45/mo when revenue justifies)

---

## Deploy to Netlify (First Time)

### 1. Install Hugo on Linux Mint
```bash
sudo snap install hugo
hugo version   # confirm it's installed
```

### 2. Push to GitHub
```bash
cd queens-HVAC technician
git init
git add .
git commit -m "Initial site build"
git remote add origin https://github.com/YOURUSERNAME/queens-HVAC technician.git
git push -u origin main
```

### 3. Connect to Netlify
1. Go to netlify.com → Log in
2. "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select the `queens-HVAC technician` repo
5. Build settings are auto-detected from `netlify.toml`:
   - Build command: `hugo --minify`
   - Publish directory: `public`
6. Click "Deploy site"

### 4. Connect Your Domain
1. Buy domain on Namecheap: `queensHVACpro.com` (~$10/yr)
2. In Netlify: Site settings → Domain management → Add custom domain
3. Update nameservers on Namecheap to point to Netlify's DNS
4. Netlify auto-provisions SSL (free Let's Encrypt cert)

**Your site is live within 15 minutes of DNS propagation.**

---

## Adding New Content

### Add a New Service Page
```bash
hugo new services/gas-line-repair.md
# Edit the file, fill in content using the archetype template
# Commit and push — Netlify auto-deploys
```

### Add a New Location Page
```bash
hugo new locations/woodlawn.md
# Edit, add neighborhood-specific content
# Commit and push
```

### Add a Blog Post
```bash
hugo new blog/how-to-shut-off-water-queens.md
# Write 600-1000 words targeting a real question people search
```

### Preview Locally Before Pushing
```bash
cd queens-HVAC technician
hugo server -D
# Open http://localhost:1313
```

---

## SEO Checklist (Do This After Launch)

### Week 1
- [ ] Submit sitemap to Google Search Console: `https://yoursite.com/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Create Google Business Profile (free — critical for local SEO)
- [ ] Add site to Yelp, Angi, Thumbtack, HomeAdvisor
- [ ] Add site to BBB (free listing)
- [ ] Submit to NYC local directories

### Month 1
- [ ] Publish 2 blog posts per week (answer real questions: "how much does X cost in Queens")
- [ ] Get 5 citations on local directories (NAP consistency: Name, Address, Phone)
- [ ] Ask first 3 paying clients for a Google review

### Ongoing
- [ ] 1 new location page per week (adds ranking surface area)
- [ ] 1 new service page every 2 weeks
- [ ] Monitor Google Search Console for keyword opportunities

---

## Call Tracking Setup

### Free Method (Google Voice)
1. Create a Google Voice number (free)
2. Forward it to the real business phone
3. Use the Google Voice number on the website
4. Google Voice dashboard shows all calls + duration

### Paid Method (CallRail — use when revenue justifies)
1. Sign up at callrail.com (~$45/mo)
2. Get a local (718) tracking number
3. Swap into hugo.toml `phone` and `phonePlain` params
4. Track calls by source (SEO vs direct vs paid ads)

---

## Monetization Tracker

| Client | Niche | Deal Type | Monthly Value | Start Date |
|--------|-------|-----------|---------------|------------|
| TBD    | HVAC Service – Queens | Pay-per-lead | TBD | |

### Pay-Per-Lead Script
> "Hey [Name], I run a website that ranks for HVAC technician searches in Queens.
> I'm getting calls I can't fulfill myself. I'd like to send them your way.
> I'm thinking $X per qualified call — would that work for you?"

### Retainer Upgrade Script (after 30 days of leads)
> "You've received [X] calls from me in the past month. Based on what you've told me,
> you've converted [Y] of those. I'd like to move to a flat monthly arrangement —
> $[amount]/month for exclusive access to all leads from the site.
> That locks out your competitors and gives you predictable lead flow."

---

## Replication Guide — Building Site #2

1. `cp -r queens-HVAC technician/ [niche]-[borough]/`
2. Update `hugo.toml`: baseURL, phone, businessName, serviceArea, license
3. Find-replace all content: old niche → new niche, old borough → new borough
4. Rewrite service pages for new niche specifics
5. New domain → new Netlify site → new Google Business Profile
6. **Time to launch site #2:** 4–6 hours if you follow this system

### Site Portfolio Tracker
| Site | Niche | Borough | Domain | Live Date | Monthly Revenue |
|------|-------|---------|--------|-----------|-----------------|
| 1 | HVAC Repair | Queens | queensHVACpro.com | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |
| 6 | | | | | |

---

## File Structure Reference
```
queens-HVAC technician/
├── hugo.toml              ← Site config, phone, params
├── netlify.toml           ← Deploy + header config
├── content/
│   ├── _index.md          ← Homepage content
│   ├── about.md
│   ├── contact.md
│   ├── services/          ← One file per service
│   ├── locations/         ← One file per neighborhood
│   └── blog/              ← SEO content, 2x/week
├── layouts/
│   ├── index.html         ← Homepage template
│   ├── _default/
│   │   ├── baseof.html    ← Master shell
│   │   ├── single.html    ← Inner page template
│   │   └── list.html      ← Section list template
│   └── partials/          ← Reusable components
├── static/
│   ├── css/main.css       ← All styles
│   ├── js/main.js         ← All scripts
│   └── robots.txt
├── data/
│   └── reviews.yaml       ← Customer reviews
└── archetypes/            ← Templates for new content
```

---

*Built with Hugo + Netlify. Zero hosting cost. Scales to millions of monthly visitors.*
