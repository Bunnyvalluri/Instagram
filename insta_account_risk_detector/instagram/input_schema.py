from dataclasses import dataclass
from typing import Optional

@dataclass
class InstagramAccountInput:
    username: str

    followers: Optional[int] = None
    following: Optional[int] = None
    posts: Optional[int] = None
    account_age_days: Optional[int] = None

    verified: Optional[bool] = None
    visibility: Optional[str] = None      # "public" / "private"

    has_profile_pic: Optional[str] = None # "normal" / "suspicious" / "absent"
    bio_text: Optional[str] = None
    bio_links: Optional[str] = None       # "none" / "genuine" / "suspicious"

    dm_activity: Optional[str] = None     # "yes" / "no" / "unknown"
