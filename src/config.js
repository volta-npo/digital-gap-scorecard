export const config = {
    "number": 10,
    "slug": "digital-gap-scorecard",
    "title": "Digital Gap Scorecard",
    "category": "Digital Presence",
    "tagline": "A standardized rubric for ranking how urgently a small business needs digital transformation.",
    "persona": "Competition judges, chapter leads, and intake reviewers.",
    "gap": "Volta needs a consistent way to evaluate need, feasibility, and impact across cities.",
    "niche": "Nonprofit prioritization of pro bono digital services.",
    "metric": "applications prioritized with consistent evidence",
    "modules": [
        "Evidence guides",
        "Weighted scoring rubric",
        "Bias check questions",
        "Intake summary export"
    ],
    "theme": {
        "accent": "#2563eb",
        "accent2": "#60a5fa",
        "emoji": "\ud83c\udf10",
        "metricLabel": "Presence readiness",
        "workflow": [
            "Capture public evidence",
            "Score the digital gap",
            "Prioritize owner-safe fixes",
            "Export handoff packet"
        ],
        "privacy": "Only public business information and project notes should be entered. Do not store passwords."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "evidence-guides",
            "label": "Evidence guides",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify evidence guides with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "weighted-scoring-rubric",
            "label": "Weighted scoring rubric",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify weighted scoring rubric with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "bias-check-questions",
            "label": "Bias check questions",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify bias check questions with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "intake-summary-export",
            "label": "Intake summary export",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify intake summary export with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Digital Gap Scorecard and capture baseline evidence.",
            "Complete the evidence guides workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Riverside Community Bakery",
        "chapter": "Jacksonville",
        "studentLead": "Volta Student Lead",
        "notes": "Digital presence sprint for an under-digitized local storefront. Digital Gap Scorecard sample.",
        "evidencePrefix": "Digital Gap Scorecard",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map