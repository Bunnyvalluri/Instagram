# data/history.py

from collections import deque

# Fixed-size queue (keeps only last 5)
_history = deque(maxlen=5)

def add_history(entry: dict):
    """
    Add a new assessment entry.
    Oldest entry is automatically removed when size exceeds 5.
    """
    _history.appendleft(entry)

def get_history():
    """
    Return history as a list (most recent first).
    """
    return list(_history)
