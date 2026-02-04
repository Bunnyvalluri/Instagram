import math

def extract_features(account):
    features = {}
    available = 0
    total = 8

    # Username structure
    features["username_digit_ratio"] = sum(c.isdigit() for c in account.username) / max(len(account.username), 1)
    available += 1

    # Follow ratio
    if account.followers is not None and account.following is not None:
        features["follow_ratio"] = math.log1p(account.following / max(account.followers, 1))
        available += 1
    else:
        features["follow_ratio"] = None

    # Activity
    if account.posts is not None and account.account_age_days is not None:
        features["posts_per_day"] = account.posts / max(account.account_age_days, 1)
        available += 1
    else:
        features["posts_per_day"] = None

    # Profile pic signal
    features["profile_pic_state"] = account.has_profile_pic
    if account.has_profile_pic is not None:
        available += 1

    # Bio quality
    features["bio_length"] = len(account.bio_text.strip()) if account.bio_text else None
    if account.bio_text is not None:
        available += 1

    # Bio links
    features["bio_links"] = account.bio_links
    if account.bio_links is not None:
        available += 1

    # DM activity
    features["dm_activity"] = account.dm_activity
    if account.dm_activity is not None:
        available += 1

    # Visibility
    features["visibility"] = account.visibility
    if account.visibility is not None:
        available += 1

    confidence = round((available / total) * 100, 1)
    return features, confidence
