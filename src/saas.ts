export const saas = {
  "productName": "Digital Gap Scorecard",
  "category": "Digital Presence",
  "northStar": "qualified applicants prioritized with consistent evidence",
  "segments": [
    "Volta intake teams",
    "Competition judges",
    "Chapter directors",
    "Economic development partners"
  ],
  "jobs": [
    "Score need, feasibility, impact, and student fit consistently",
    "Reduce reviewer bias with structured conflict checks",
    "Create anonymized sponsor-ready applicant summaries",
    "Compare applicants across cities and cohorts"
  ],
  "plans": [
    {
      "name": "Community",
      "price": "Free",
      "promise": "Single-cohort scoring and local exports"
    },
    {
      "name": "Review Board",
      "price": "39/mo",
      "promise": "Multi-reviewer scoring, bias flags, finalist shortlists"
    },
    {
      "name": "Chapter",
      "price": "149/mo",
      "promise": "Pipeline dashboards, reviewer assignment, sponsor summaries"
    },
    {
      "name": "Network",
      "price": "Custom",
      "promise": "Cross-city benchmarking and governance reporting"
    }
  ],
  "metrics": [
    {
      "label": "Applications triaged",
      "current": 42,
      "target": 50,
      "note": "Intakes scored this cycle"
    },
    {
      "label": "Evidence completeness",
      "current": 84,
      "target": 95,
      "note": "Scores backed by source notes"
    },
    {
      "label": "Reviewer agreement",
      "current": 78,
      "target": 85,
      "note": "Variance across independent reviewers"
    },
    {
      "label": "Bias checks resolved",
      "current": 91,
      "target": 100,
      "note": "Conflicts and equity flags reviewed"
    }
  ],
  "playbooks": [
    "Applicant intake normalization",
    "Evidence scoring review",
    "Bias/conflict moderation",
    "Finalist shortlist meeting",
    "Sponsor-safe anonymized reporting"
  ],
  "integrations": [
    "Typeform/Google Forms intake import",
    "Airtable applicant registry",
    "Google Sheets review matrix",
    "Slack finalist notifications",
    "CSV sponsor export"
  ],
  "controls": [
    "Reviewer conflicts must be logged before approval",
    "Need and feasibility scores require evidence notes",
    "Anonymized exports hide owner-identifying notes",
    "Ranking changes are documented with rationale"
  ],
  "roadmap": [
    "Multi-reviewer consensus scoring",
    "Applicant anonymization mode",
    "Cohort benchmarking dashboards",
    "Appeals and reviewer comments workflow",
    "Sponsor-facing impact forecasts"
  ],
  "personas": [
    {
      "name": "Intake coordinator",
      "role": "Normalizes applications",
      "pain": "Messy applicant notes make scoring inconsistent",
      "success": "Every applicant has comparable evidence-backed scores",
      "activation": "Import application rows or load cohort sample"
    },
    {
      "name": "Reviewer panelist",
      "role": "Scores need, feasibility, and impact",
      "pain": "Bias and conflicts are hard to audit after decisions",
      "success": "Conflicts are flagged before finalist ranking",
      "activation": "Complete reviewer conflict check"
    },
    {
      "name": "Sponsor partner",
      "role": "Needs anonymized portfolio-level demand data",
      "pain": "Raw applicant details are not safe to share",
      "success": "Receives anonymized urgency and impact summaries",
      "activation": "Export sponsor-safe shortlist"
    }
  ],
  "journeys": [
    {
      "stage": "Application intake",
      "moment": "Collect business facts, constraints, and digital gap evidence",
      "success": "Required rubric fields are complete",
      "automation": "Forms import with missing-evidence guidance"
    },
    {
      "stage": "Reviewer calibration",
      "moment": "Assign reviewers and record conflicts",
      "success": "Conflicts logged before scoring",
      "automation": "Reviewer roster and conflict reminder"
    },
    {
      "stage": "Scoring",
      "moment": "Evaluate need, feasibility, impact, and fit",
      "success": "Scores carry evidence notes and variance flags",
      "automation": "Weighted rubric calculator"
    },
    {
      "stage": "Shortlist",
      "moment": "Compare applicants and document rationale",
      "success": "Ranking changes have reviewer rationale",
      "automation": "Shortlist builder and variance alerts"
    },
    {
      "stage": "Reporting",
      "moment": "Generate anonymized sponsor and chapter summaries",
      "success": "No owner-identifying notes in exports",
      "automation": "Sponsor-safe CSV/brief export"
    }
  ],
  "features": [
    {
      "name": "Cohort intake normalizer",
      "tier": "Community",
      "description": "Turns form responses into comparable digital-gap records",
      "evidence": "Rows require need, feasibility, impact, and source notes"
    },
    {
      "name": "Bias and conflict register",
      "tier": "Review Board",
      "description": "Reviewer disclosures, conflict flags, and resolution notes",
      "evidence": "Every conflict stores reviewer, applicant, and disposition"
    },
    {
      "name": "Consensus scoring workspace",
      "tier": "Review Board",
      "description": "Variance-aware multi-reviewer scoring and comments",
      "evidence": "Score changes keep rationale and reviewer identity"
    },
    {
      "name": "Finalist shortlist builder",
      "tier": "Chapter",
      "description": "Ranked pipeline views with anonymized applicant summaries",
      "evidence": "Shortlist exports hide identifying notes by default"
    },
    {
      "name": "Cohort benchmark dashboard",
      "tier": "Network",
      "description": "Cross-city need and feasibility trends",
      "evidence": "Aggregates only anonymized score distributions"
    },
    {
      "name": "Sponsor demand forecast",
      "tier": "Network",
      "description": "Estimates service demand and expected portfolio outcomes",
      "evidence": "Forecast assumptions documented beside metrics"
    }
  ],
  "experiments": [
    {
      "hypothesis": "Reviewer calibration reduces score variance",
      "measure": "Reviewer agreement",
      "target": "85% agreement",
      "cadence": "per cohort"
    },
    {
      "hypothesis": "Evidence guidance improves shortlist quality",
      "measure": "Evidence completeness",
      "target": "95% complete",
      "cadence": "weekly"
    },
    {
      "hypothesis": "Conflict checks increase trust in selection",
      "measure": "Bias checks resolved",
      "target": "100% resolved",
      "cadence": "per review cycle"
    },
    {
      "hypothesis": "Anonymized summaries speed sponsor approvals",
      "measure": "Applications triaged",
      "target": "50 per cycle",
      "cadence": "monthly"
    }
  ],
  "risks": [
    {
      "risk": "Reviewer bias influences rankings",
      "mitigation": "Conflict register, variance alerts, and rationale requirements",
      "owner": "Review lead",
      "severity": "high"
    },
    {
      "risk": "Exports expose applicant identity to sponsors",
      "mitigation": "Anonymized sponsor mode and safe summary checks",
      "owner": "Chapter director",
      "severity": "high"
    },
    {
      "risk": "Scores appear more precise than evidence supports",
      "mitigation": "Evidence completeness warnings and source notes",
      "owner": "Reviewer panel",
      "severity": "medium"
    },
    {
      "risk": "Finalist changes lack audit trail",
      "mitigation": "Ranking rationale required for every override",
      "owner": "Intake coordinator",
      "severity": "medium"
    }
  ],
  "automations": [
    {
      "name": "Forms intake import",
      "trigger": "New application batch submitted",
      "action": "Create normalized applicant scorecards",
      "owner": "Intake coordinator"
    },
    {
      "name": "Conflict check reminder",
      "trigger": "Reviewer assigned before scoring",
      "action": "Request disclosure before scores unlock",
      "owner": "Review lead"
    },
    {
      "name": "Variance alert",
      "trigger": "Reviewer scores diverge above threshold",
      "action": "Flag applicant for moderation meeting",
      "owner": "Reviewer panel"
    },
    {
      "name": "Sponsor export scrubber",
      "trigger": "Shortlist approved",
      "action": "Generate anonymized CSV and brief",
      "owner": "Chapter director"
    }
  ],
  "dashboards": [
    {
      "name": "Cohort pipeline",
      "audience": "Intake teams",
      "widgets": [
        "Applications triaged",
        "Missing evidence",
        "Reviewer assignment",
        "Shortlist status"
      ]
    },
    {
      "name": "Reviewer calibration",
      "audience": "Review board",
      "widgets": [
        "Score variance",
        "Conflicts unresolved",
        "Bias flags",
        "Consensus status"
      ]
    },
    {
      "name": "Sponsor demand board",
      "audience": "Partners",
      "widgets": [
        "Anonymized need levels",
        "Service categories",
        "Projected impact",
        "Cohort trends"
      ]
    }
  ],
  "templates": [
    {
      "name": "Applicant scorecard",
      "format": "Markdown",
      "sections": [
        "Need",
        "Feasibility",
        "Impact",
        "Evidence",
        "Reviewer notes"
      ]
    },
    {
      "name": "Sponsor-safe shortlist",
      "format": "CSV",
      "sections": [
        "Anonymous ID",
        "Need score",
        "Service fit",
        "Recommended next step"
      ]
    },
    {
      "name": "Reviewer moderation agenda",
      "format": "Markdown",
      "sections": [
        "High variance applicants",
        "Conflict resolutions",
        "Ranking changes",
        "Decision log"
      ]
    }
  ]
};
