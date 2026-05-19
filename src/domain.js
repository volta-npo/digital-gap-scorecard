export const domain = {
    "kind": "scorecard",
    "title": "Digital Gap Scorecard",
    "purpose": "A purpose-built scorecard interface for a standardized rubric for ranking how urgently a small business needs digital transformation.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Applicant scorecards",
    "metricLabels": [
        "Need Score",
        "Feasibility Score",
        "Impact Potential"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Riverside Community Bakery",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "applications prioritized with consistent evidence",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "monthly-volume",
            "label": "Monthly volume",
            "type": "number",
            "sample": 120,
            "placeholder": "Enter monthly volume"
        },
        {
            "id": "minutes-per-item",
            "label": "Minutes per item",
            "type": "number",
            "sample": 15,
            "placeholder": "Enter minutes per item"
        },
        {
            "id": "dollar-value-cost",
            "label": "Dollar value / cost",
            "type": "number",
            "sample": 45,
            "placeholder": "Enter dollar value / cost"
        },
        {
            "id": "confidence-percent",
            "label": "Confidence percent",
            "type": "number",
            "sample": 80,
            "placeholder": "Enter confidence percent"
        }
    ],
    "rows": [
        "Business intake complete",
        "Evidence guides answered",
        "Need scored",
        "Feasibility scored",
        "Impact scored",
        "Student-fit scored",
        "Bias/conflict check complete",
        "Final ranking generated"
    ],
    "artifacts": [
        "Ranked applicant CSV",
        "Reviewer packet",
        "Anonymized sponsor summary"
    ],
    "checks": [
        "Evidence required for scores",
        "Bias check required",
        "Weights must sum to 100"
    ],
    "sampleClient": "Riverside Community Bakery"
};
//# sourceMappingURL=domain.js.map