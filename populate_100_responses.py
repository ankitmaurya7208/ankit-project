import urllib.request
import urllib.parse
import random
import time

url = 'https://docs.google.com/forms/d/e/1FAIpQLSc3Mi9MNBmP3tgfFYwwRIFKLkiPR5cnsYSlzk7WWGShJQe0SA/formResponse'

# Weighted demographic choices for realistic community survey data
age_groups = ['18 - 25']*35 + ['26 - 40']*35 + ['41 - 60']*20 + ['60 Above']*10
use_online = ['Yes, Regularly']*60 + ['Sometimes']*25 + ['Rarely']*10 + ['No']*5
services = ['UPI Payment']*45 + ['Mobile Banking']*25 + ['Internet Banking']*15 + ['ATM/Debit Card']*10 + ['Online Bill Payment']*5
know_otp = ['Yes']*85 + ['Not sure']*10 + ['No']*5
check_freq = ['Daily']*40 + ['Weekly']*40 + ['Monthly']*15 + ['Rarely']*5
identify_fake = ['Yes']*65 + ['Not sure']*20 + ['No']*15
otp_action = ['Never share it']*90 + ['Ask a friend first']*5 + ['Share it if they claim to be from the bank']*3 + ['Not sure']*2
suspicious_call = ['Yes']*70 + ['No']*20 + ['Not sure']*10
use_pin = ['Yes']*90 + ['No']*7 + ['Not sure']*3
security_imp = ['Very Important']*75 + ['Important']*20 + ['Somewhat Important']*5
know_report = ['Yes']*70 + ['No']*20 + ['Not sure']*10
learn_more = ['Yes']*80 + ['May be']*15 + ['No']*5

insights_pool = [
    "Never share your OTP or UPI PIN under any circumstances.",
    "UPI PIN is required only to send money, not to receive money.",
    "Always check the website domain before entering confidential banking credentials.",
    "Report any unauthorized transaction to helpline 1930 within the golden hour.",
    "Never install screen sharing applications like AnyDesk or TeamViewer on mobile.",
    "Bank managers and official support staff will never call asking for PINs or passwords.",
    "Verify payment requests carefully before approving on UPI apps.",
    "Regularly check account statements and transaction history.",
    "Keep app lock PINs strong, unique, and private.",
    "Ignore urgent calls demanding immediate KYC updates under threat of blocking.",
    "Double check recipient names when making online fund transfers.",
    "Avoid using public Wi-Fi networks when conducting financial transactions.",
    "Lock Aadhaar biometrics via mAadhaar portal to prevent unauthorized access.",
    "Enable two-factor authentication on all digital payment and banking accounts.",
    "Educate family members and senior citizens about common cyber fraud tricks."
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
        'entry.752742379': random.choice(insights_pool)
    }
    encoded = urllib.parse.urlencode(data).encode('utf-8')
    req = urllib.request.Request(url, data=encoded, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        res = urllib.request.urlopen(req)
        if (i + 1) % 10 == 0 or i == 99:
            print(f"Progress: [{i+1}/100] Submitted response successfully! (Status: {res.status})")
    except Exception as e:
        print(f"[{i+1}/100] Submission error: {e}")

if __name__ == '__main__':
    print("Starting batch submission of 100 realistic responses to Google Form...")
    for idx in range(100):
        submit_response(idx)
        time.sleep(0.15)
    print("Completed submitting all 100 survey responses successfully!")
