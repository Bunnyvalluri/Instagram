def aggregate_risk(signals):
    weights = {
        "identity_risk": 0.15,
        "behavior_risk": 0.25,
        "profile_pic_risk": 0.15,
        "bio_risk": 0.15,
        "link_risk": 0.2,
        "dm_risk": 0.1
    }

    risk = sum(signals[k] * weights[k] for k in weights)
    return round(min(risk, 1.0) * 100, 1)
