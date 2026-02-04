# app.py

from flask import Flask, render_template, request
from instagram.input_schema import InstagramAccountInput
from instagram.detector import assess_account
from data.history import add_history, get_history

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    result = None
    error = None

    if request.method == "POST":
        username = request.form.get("username", "").strip()

        # Basic validation
        if not username:
            error = "Username is required to analyze an account."
        else:
            # Handle verified field properly (yes / no / unknown)
            verified_val = request.form.get("verified")
            if verified_val == "yes":
                verified = True
            elif verified_val == "no":
                verified = False
            else:
                verified = None

            # Build input object (ALL optional fields handled safely)
            account = InstagramAccountInput(
                username=username,

                followers=int(request.form["followers"]) if request.form.get("followers") else None,
                following=int(request.form["following"]) if request.form.get("following") else None,
                posts=int(request.form["posts"]) if request.form.get("posts") else None,
                account_age_days=int(request.form.get("account_age")) if request.form.get("account_age") else None,

                verified=verified,
                visibility=request.form.get("visibility") or None,

                has_profile_pic=request.form.get("profile_pic") or None,
                bio_text=request.form.get("bio") or None,
                bio_links=request.form.get("bio_links") or None,

                dm_activity=request.form.get("dm_activity") or None
            )

            # Run assessment
            result = assess_account(account)

            # Save last 5 checks only
            add_history({
                "username": account.username,
                "risk_level": result["risk_level"],
                "risk_score": result["risk_score"],
                "confidence": result["confidence"]
            })

    return render_template(
        "index.html",
        result=result,
        error=error,
        history=get_history()
    )


if __name__ == "__main__":
    print(">>> Starting Flask server")
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True,
        use_reloader=False
    )
