# instagram/detector.py

from instagram.feature_extractor import extract_features
from instagram.risk_signals import compute_risk_signals
from instagram.risk_engine import aggregate_risk


def assess_account(account):
    # Extract features and confidence
    features, confidence = extract_features(account)

    # Compute risk signals
    signals = compute_risk_signals(features)

    # Aggregate risk
    risk_score = aggregate_risk(signals)

    # Risk level
    if risk_score >= 65:
        level = "High Risk – Strong Scam Indicators"
    elif risk_score >= 40:
        level = "Moderate Risk – Exercise Caution"
    else:
        level = "Low Risk – No Strong Scam Patterns Observed"

    # Confidence label (CORRECTLY INDENTED)
    if confidence >= 70:
        confidence_label = "High"
    elif confidence >= 40:
        confidence_label = "Medium"
    else:
        confidence_label = "Low"

    # Human-readable explanations
    EXPLANATION_MAP = {
        "identity_risk": "Username pattern appears automated or non-personal",
        "behavior_risk": "Follower–following pattern appears unusual",
        "profile_pic_risk": "Profile picture appears missing or suspicious",
        "bio_risk": "Bio information is minimal or promotional",
        "link_risk": "Bio contains potentially risky external links",
        "dm_risk": "Suspicious direct messages reported by user"
    }

    indicators = []

    if signals["dm_risk"] > 0.5 and signals["link_risk"] > 0.5:
        indicators.append(
            "Account shows a common phishing pattern where unsolicited messages redirect users to external links."
        )

    if signals["identity_risk"] > 0.5 and signals["profile_pic_risk"] > 0.5:
        indicators.append(
            "Username structure and profile appearance resemble mass-created or automated accounts."
        )

    if signals["behavior_risk"] > 0.5:
        indicators.append(
            "Follower–following relationship deviates from typical organic growth patterns."
        )

    if not indicators:
        indicators.append(
            "No strong scam or impersonation patterns were detected based on available signals."
        )


    # Advisory note
    notes = []

    if features.get("visibility") == "private":
        notes.append(
            "Private account limits visibility into posts and interactions."
        )

    if confidence < 50:
        notes.append(
            "Assessment is based on limited publicly observable information."
        )

    notes.append(
        "User interaction with content (likes, views, DMs) is not observable by external systems."
    )

    note = " ".join(notes)

    return {
        "risk_score": risk_score,
        "risk_level": level,
        "confidence": f"{confidence}%",
        "confidence_label": confidence_label,
        "indicators": indicators,
        "note": note
    }
