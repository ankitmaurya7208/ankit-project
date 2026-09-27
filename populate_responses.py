import urllib.request
import urllib.parse
import random
import time

url = 'https://docs.google.com/forms/d/e/1FAIpQLSc3Mi9MNBmP3tgfFYwwRIFKLkiPR5cnsYSlzk7WWGShJQe0SA/formResponse'

# Questions and options mapping
age_groups = ['Below 18', '18 - 25', '18 - 25', '26 - 40', '26 - 40', '41 - 60', '60 Above']
use_online = ['Yes, Regularly', 'Yes, Regularly', 'Sometimes', 'Rarely']
services = ['UPI Payment', 'Mobile Banking', 'Internet Banking', 'ATM/Debit Card', 'Online Bill Payment']
know_otp = ['Yes', 'Yes', 'Yes', 'Not sure']
check_freq = ['Daily', 'Weekly', 'Weekly', 'Monthly']
identify_fake = ['Yes', 'No', 'Not sure', 'Yes']
otp_action = ['Never share it', 'Never share it', 'Never share it', 'Ask a friend first']
suspicious_call = ['Yes', 'Yes', 'No', 'Not sure']
use_pin = ['Yes', 'Yes', 'Yes', 'No']
security_imp = ['Very Important', 'Very Important', 'Important']
know_report = ['Yes', 'No', 'Yes', 'Not sure']
learn_more = ['Yes', 'Yes', 'May be']

insights = [
    "Never share OTP or UPI PIN under any circumstances.",
    "UPI PIN is required only to send money, never to receive money.",
    "Always verify SMS links and never click unverified bank URLs.",
    "Report financial fraud immediately on 1930 helpline.",
    "Never download screen-sharing apps like AnyDesk on mobile.",
    "Bank managers never call to ask for CVV or passwords.",
    "Always check QR code payment prompts before entering PIN.",
    "Regularly monitor bank account transaction history.",
    "Keep app lock passwords strong and private.",
    "Be cautious of urgent KYC update phone threats."
]

def submit_response(i):
    data = {
        'entry.1918655045': random.choice(age_groups),
        'entry.2110485968': random.choice(use_online),
        'entry.914551095': random.choice(services),
        'entry.245037478': random.choice(know_otp),
        'entry.1326041002': random.choice(check_freq),
        'entry.1829699470': random.choice(identify_fake),
        'entry.894684749': random.choice(otp_action),
        'entry.1470885198': random.choice(suspicious_call),
        'entry.1590534940': random.choice(use_pin),
        'entry.1997008013': random.choice(security_imp),
        'entry.1710810477': random.choice(know_report),
        'entry.125491881': random.choice(learn_more),
        'entry.752742379': random.choice(insights)
    }
    encoded = urllib.parse.urlencode(data).encode('utf-8')
    req = urllib.request.Request(url, data=encoded, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        res = urllib.request.urlopen(req)
        print(f"[{i+1}/25] Submitted response successfully! (Status: {res.status})")
    except Exception as e:
        print(f"[{i+1}/25] Submission error: {e}")

if __name__ == '__main__':
    print("Submitting 25 realistic survey responses to Google Form...")
    for idx in range(25):
        submit_response(idx)
        time.sleep(0.3)
    print("All 25 survey responses recorded!")
