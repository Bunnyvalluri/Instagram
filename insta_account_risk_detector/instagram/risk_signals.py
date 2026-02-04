def compute_risk_signals(features):
    signals = {}

    # Identity risk (weak)
    signals["identity_risk"] = 0.6 if features["username_digit_ratio"] > 0.4 else 0.2

    # Behavior risk
    signals["behavior_risk"] = min(features["follow_ratio"] / 3, 1.0) if features["follow_ratio"] else 0.3

    # Profile picture risk
    pic = features["profile_pic_state"]
    if pic == "suspicious":
        signals["profile_pic_risk"] = 0.5
    elif pic == "absent":
        signals["profile_pic_risk"] = 0.3
    else:
        signals["profile_pic_risk"] = 0.1

    # Bio risk
    if features["bio_length"] is not None and features["bio_length"] < 10:
        signals["bio_risk"] = 0.4
    else:
        signals["bio_risk"] = 0.2

    # Bio link risk
    if features["bio_links"] == "suspicious":
        signals["link_risk"] = 0.6
    elif features["bio_links"] == "genuine":
        signals["link_risk"] = 0.1
    else:
        signals["link_risk"] = 0.2

    # DM risk (user-declared)
    if features["dm_activity"] == "yes":
        signals["dm_risk"] = 0.6
    else:
        signals["dm_risk"] = 0.2

    return signals
